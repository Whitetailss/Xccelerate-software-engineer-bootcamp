const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');


module.exports = (passport, knex) => {
    
    passport.use('local-login', new LocalStrategy(
    async (username, password, done) => {
        try{
            let users = await knex('users').where({username:username}); 
            if (users.length == 0) { 
                return done(null, false, { message: 'Incorrect credentials.' });
            }
            let user = users[0];
            let result = await bcrypt.checkPassword(password, user.password);
            if (result) { 
                return done(null, user);
            }else{
                return done(null, false, { message: 'Incorrect credentials.' });
            }
        }catch(err){
            done(err);
        }
    }
));

    passport.use('local-signup', new LocalStrategy(
    async (username, password, done) => {
        try{
            let users = await knex('users').where({username:username});
            if (users.length > 0) {
                return done(null, false, { message: 'Email already taken' });
            }

            let hash = await bcrypt.hashPassword(password)
            const newUser = {
                username:username,
                password: hash
            };

            let userId = await knex('users').insert(newUser).returning('id');
            newUser.id = userId[0];
            done(null,newUser);
        }catch(err){
            done(err);
        }
    }
    )
    )



}
