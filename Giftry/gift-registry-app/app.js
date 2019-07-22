const express = require('express');
const router = require('./routes/router');
const hbs = require('express-handlebars');
const setupPassport = require('./login-utils/init-app');
const passport = require('passport');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//static files
app.use(express.static('public'));

//template engine, handlebars
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
setupPassport(app);

//checking the login status for every view by making isAuthenticated a res variable in this piece of middleware
app.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
})
app.use('/', router);


app.listen(PORT, function () {
    console.log(`server is listening on port ${PORT}`);
});
