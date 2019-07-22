const express = require('express')

module.exports = class Router {
    constructor(userServices){
        this.userServices = userServices;
    }

    router(){
        let router = express.Router();
        router.get('/', this.get.bind(this)); //call this in app.js with /user/console (this will list all the registry this user has created)
        router.post('/shop', this.post.bind(this));//this will add a new registry with the form info
        router.put('/:id', this.put.bind(this)); //used to edit the registry information
        router.delete('/:id', this.delete.bind(this));
        

//to view the gifts assigned to the registry of specific id
        router.get('/registry/status/:id', (req,res)=>{
            console.log('fired?')
            return this.userServices.listGiftInRegistry(req.params.id)
            .then((row)=>{
                res.render('giftlist', {item: row})
            }) .catch((err)=> {res.status(500).json(err)});
        })

        return router;
    };


    get(req, res){
        console.log('do I also go?')
        return this.userServices.listRegistry(req.user.id)
            .then((row)=>{
                res.render('console_SL', {item: row})
            })
            .catch((err)=> {res.status(500).json(err)});
    }

    post(req, res, next){
        return this.userServices.addRegistry(req.user.id, req.body)//need to input.occassion etc to extract info from the object in the function? try try
            .then((row)=>{             
                let username = req.user.username;
                console.log(row, username)
                res.render('newborn', {result:row})
            })
           
            .catch((err)=> {res.status(500).json(err)});
    }

    put(req, res){
        return this.userServices.editRegistryInfo(req.user.id, req.params.id, req.body)
            .then(res.redirect('./gift'))
            .catch((err)=>{res.status(500).json(err)})
    }

    delete(req, res){
        return this.userServices.deleteRegistry(req.user.id, req.params.id)
            .then(()=>{
                this.userServices.listRegistry(req.user.id)
            }).then((row)=>{
                res.render('console_SL', {item: row})
            })
            .catch((err)=>{res.status(500).json(err)})
    }

    
}