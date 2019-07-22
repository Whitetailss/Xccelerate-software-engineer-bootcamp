const passport = require('passport');
const SQL = require('../SQL/SQLquery');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');

module.exports = (app) => {

    app.use(passport.initialize());

    
    require('./auth')(passport, SQL);
    // require('./socialAuth')(passport, SQL);
   
    
} 