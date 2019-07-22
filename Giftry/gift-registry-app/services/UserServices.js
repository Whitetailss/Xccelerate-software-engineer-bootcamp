//functions for the host to create new registry and display existing ones



module.exports = class UserServices{
    constructor(knex){
        this.knex = knex;
    }

    listRegistry(userID){
        let query = this.knex("registryINFO").where({user_id: userID})
        
        return query.then((rows)=>{
            console.log(rows)
            return rows.map(row =>({
                regID: row.id,
                ocassion: row.ocassionName,
                isSent: row.isSent,
                reg_password: row.password
            }))
        })

    }

    addRegistry(userID, regInfo){ 
        let ocassion = regInfo.ocassion_name;
        let reg_password = regInfo.reg_password;

        let query =  this.knex("registryINFO").insert({user_id:userID, ocassionName:ocassion, isSent:false, password: reg_password}).returning('*');
        
        return query.then((rows)=>{
            return rows.map(row =>({
                registry_id: row.id,
                ocassion: row.ocassionName,
                isSent: row.isSent,
                reg_password: row.password
            }))

        })
        .catch((err)=>{console.log(err)});

    }

    editRegistry(userID, regID, regInfo){
        let ocassion = regInfo.ocassion_name;
        let reg_password = regInfo.reg_password;

        let query = this.knex("registryINFO").where({id:regID}).update(
            {ocassionName:ocassion, password: reg_password}
        );
      
        return query.then(console.log('Registry info updated'))
        .catch((err)=> {console.log(err)});

    }

    deleteRegistry(userID, regID){
        //joinning is required in this case as registry destroy meaning entry of gifts should also be removed
       
        return  this.knex("registryINFO").where('id', regID).del();
     
    }


    listGiftInRegistry(regID){
        console.log('I get here')

        let query = this.knex('gift').leftJoin('products','gift.product_id','products.id').where('registryINFO_id', regID).returning('*');


        return query.then((rows)=>{
            console.log(rows)
            return rows.map(row =>({
                gift_id: row.id,
                registry_id:row.registryINFO_id,
                isBought: row.isBought,
                product_id: row.product_id,
                product_cat: row.productCat,
                description: row.description,
                buyer_name: row.buyerName,
                buyer_email: row.buyerEmail,
                price: row.price,
                details: row.details,
                ocassion: row.ocassionTag
            }))
        })

 }

}
