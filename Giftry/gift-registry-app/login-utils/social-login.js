const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();


module.exports = (passport, knex) =>{

passport.use('fb-strategy', new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret:process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/redirect"
  },
  async (accessToken //will expire after a certain amt of time
    , refreshToken //this is used to refresh that token
    , profile, done) => {
      console.log(profile)
    //check if user already exist in our database
    let users = await knex('users').where({facebookID: profile.id});
    
    if(users.length == 0){  
        let user = {
        facebookID: profile.id,
        username: profile.displayName,
        accessToken: accessToken
    }
    
    await knex('users').insert(user);
    done(null, user);
}
    let user = users[0];
    done(null, user);
  
  }
));


}