const passport = require("passport");


const authUser =
    function (req, res, next) {
        console.log('here')
        passport.authenticate('jwt', { session: false }, function (err, user, info) {
            console.log('authenticated here')
            console.log(user)
            if (err) {
                return next(err); //system error
            }
            else if (!user) {

                console.log(`here is password wrong`)
                res.send('password wrong')
            }
            else if (user) {
                console.log('password right')
                req.user = user  //should be united
                next();
            }
        })(req, res, next);
    }

module.exports.authUser = authUser;
