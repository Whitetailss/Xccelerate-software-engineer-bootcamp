const knexFile = require('../knexfile').development;
const knex = require('knex')(knexFile)
const passport = require('passport');
const expressSession = require('express-session')


module.exports = (app) =>{

app.use(expressSession({ //this middleware will store the session
        name: 'giftSessionID',
        secret:'thisRealSecret', //use to hash the cookies
        resave: false, //read up documentation
        saveUninitialized: false,
        cookie:{secure:false}
    }))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let users = await knex('users').where({id:id});
    if (users.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
    }
    let user = users[0];
    return done(null, user);
});

require('./local-login')(passport, knex);
require('./social-login')(passport, knex);
}