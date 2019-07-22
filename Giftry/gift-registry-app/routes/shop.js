//these are controller for the user to view products, assign products and unassign products 
        
const express = require('express')
const router = express.Router();
const knexFile = require('../knexfile').development;
const knex = require('knex')(knexFile);
const async = require('async')

//Entry point of the shop
router.get('/', (req, res)=>{
    res.render('newborn')    
})


//Search products by product category
router.get('/:product_cat', (req, res) => {
        
    let product_cat = req.params.product_cat;
    let query = knex('products').leftJoin('productsPhoto','products.id','productsPhoto.product_id').where("productCat", 'like',`%${product_cat}%`)

       query.then(function(products){

                res.send(products);
                console.log(products)
        })
              
}); 


//Assign product to gift table
router.post('/assignGift/:id', async (req,res)=>{

    let product_id = req.body.product_id;
    let registry_id = req.body.registry_id;

        let query = await knex('gift').insert({registryINFO_id: registry_id, product_id: product_id}).returning('id');

        query.then((gift_id)=>{
            console.log('getting?? ' + gift_id)
           
            }) 
            .catch((err)=> {res.status(500).json(err)});

    })
       
 


//Remove product from gift table
router.delete('/removeGift/:product_id', (req,res)=>{
            return this.userServices.removeProductFromGiftList(req.params.gift_id, req.registry.id)
            .then(res.send('product unassigned'))
            .catch((err)=> {res.status(500).json(err)})   
        });
    
        
//view individual product        
router.get('/:product_cat/:product_id', (req,res)=>{
            console.log('I got here')
            res.redirect('/')
        });
  

module.exports = router;