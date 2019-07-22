//try a different way to organize the router in shop.js simply require export the file as router with different get/post/put/delete request controller function the 


const express = require('express')

module.exports = class Router {
    constructor(userServices){
        this.userServices = userServices;
    }

    router(){
        let router = express.Router();
        
        //this allow user to get the list of product in this category from the db
        router.get('/:product_cat', this.get.bind(this)); 

        //this allow user to assign the product to the gift table
        router.post('/:product_cat/assign/:product_id', this.post.bind(this));

        // this allow user 
        router.delete('/:product_cat/:gift_id', this.delete.bind(this));
        router.get('/:product_cat/:product_id', (req,res)=>{
            console.log('I got here')
            res.redirect('/')
        });
        return router;
    };

    get(req, res){
        console.log('getting?' + req.params.product_cat)
        return this.userServices.listProduct(req.params.product_cat)
            .then((row)=>{
                console.log(row)
                res.json(row)})
            .catch((err)=> {res.status(500).json(err)});
    }

    
    post(req,res){
        return this.userServices.assignProduct(req.params.product_id, req.user.id, req.registry.id).then((gift)=>{res.json(gift)})
        .catch((err)=> {res.status(500).json(err)});
    }

    delete(req,res){
        return this.userServices.unassignProduct(req.params.gift_id, req.registry.id)
        .then(res.send('product unassigned'))
        .catch((err)=> {res.status(500).json(err)});
    }

    
}