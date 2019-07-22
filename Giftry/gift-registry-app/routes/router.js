const router = require('express').Router();
const passport = require('passport');

const ProductRouter = require('./ProductRouter');
const UserRouter = require('./UserRouter');
const UserSerives = require('../services/UserServices')
const knexFile = require('../knexfile').development;
const knex = require('knex')(knexFile);

const userservices = new UserSerives(knex);


//handlebars render Routers
router.get('/', function(req, res) {
    res.render('home', {layout: 'main'});
});


router.get('/signup', function(req, res) {
    res.render('signup', {layout: 'register'});
});

router.get('/login', function(req, res) {
    res.render('login', {layout: 'register'});
});


function isLoggedIn(req, res, next) {
    console.log('checking')
    if (req.isAuthenticated()) { //this is a built-in method to check if the user has been authenticated before
        return next();
    }
    console.log('failure')
    res.redirect('/');
}

//login Routers
router.post('/login', passport.authenticate('local-login', //posting the strategy name 'local-login'
{
    successRedirect:'/console',
    failureRedirect:'/error'
}));

router.post('/signup', passport.authenticate('local-signup', //posting the strategy name 'local-signup'
{
    successRedirect:'/console',
    failureRedirect:'/error'
}));

router.get('/auth/facebook', 
    //handle with passport, NO NEED (req, res)!!!!
    passport.authenticate('fb-strategy', {
            scope: ['user_friends', 'manage_pages']
        
    }));   

router.get('/auth/facebook/redirect', 
 //handle with passport, NO NEED (req, res)!!!!
    passport.authenticate('fb-strategy'), 
        (req, res)=>{
            res.redirect('/console');
        });


//logout route using passport logout function and destroy session
router.get('/logout', function(req,res){
    req.session.destroy(function(){
        req.logout();
        res.redirect('/');
    });
    
})

router.get('/error', (req, res)=>{
    res.send('Log-in failed');
});



const shopRouter = require('./shop');


router.use('/console', isLoggedIn, new UserRouter(userservices).router())

router.use('/console/shop', shopRouter)


router.get('*', function(req, res) {
    res.render('404', {layout: 'main'});
})

module.exports = router;