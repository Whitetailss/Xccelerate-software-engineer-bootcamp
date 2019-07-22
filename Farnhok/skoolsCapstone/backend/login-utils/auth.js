const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');



module.exports = (passport, SQL) => {

    //passport jwt-strategy to verify jwt token
    passport.use('jwt', new JwtStrategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
        async function (payload, done) {
     console.log(`payloadis ${payload}`)
     console.log(payload)
            return done(null, payload)} //payload consist of user_id
        ))
      
}
