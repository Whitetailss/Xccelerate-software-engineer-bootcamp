const passport = require('passport');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config');
const SQL = require('../SQL/SQLquery');
const bcrypt = require('../login-utils/bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios')



//User account sign up route
router.post('/api/signup', async function (req, res) {
 

    let email = req.body.email;
    let password = req.body.password;
 console.log(email, password)
    let hash = await bcrypt.hashPassword(password);
    console.log("Got to here")
    let dataArr = [
        email,
        hash
    ]
    console.log(dataArr)

    let query = `select * from users where email = $1`
    let users = await SQL.sqlQueryWithArray(query, [req.body.email]);
    if (users.length == 0) {
        
        let query2 = `insert into users (email, password) values ($1, $2) returning id`
        let newUser = await SQL.sqlQueryWithArray(query2, dataArr);

        console.log(newUser)

        if (newUser !== undefined) {
            var payload = {
                id: newUser[0].id
            };
            console.log('2', payload)
            //create an entry for put request in review and follower table??
            let query = `insert into user_follow_school (user_id) values ($1)`
            let query2 = `insert into review (user_id) values ($1)`


            let followEntry = await SQL.sqlQueryWithArray(query, [payload.id])
            let reviewEntry = await SQL.sqlQueryWithArray(query2, [payload.id])

            console.log(followEntry, reviewEntry)

            const token = jwt.encode(payload, config.jwtSecret);//authentication


            return res.status(200).json({
                token: token
            })
        } else {
            res.status(401).json(info)
        }
    } else {
        res.send(false)
    }
})
    

//School CMS account sign up route
router.post('/api/cms/signup', async function (req, res) {
 

    let username = req.body.email;
    let password = req.body.password;
 console.log(username, password)
    let hash = await bcrypt.hashPassword(password);
    console.log("Got to here")
    let dataArr = [
        username,
        hash
    ]
    console.log(dataArr)

    let query = `select * from school_users where username = $1`
    let users = await SQL.sqlQueryWithArray(query, [req.body.email]);
    console.log(users)
    if (users.length == 0) {
        
        let query2 = `insert into school_users (username, password) values ($1, $2) returning id`
        let newUser = await SQL.sqlQueryWithArray(query2, dataArr);

        console.log(newUser)

        if (newUser !== undefined) {
            var payload = {
                id: newUser[0].id
            };
            console.log('2', payload)
            //create an entry for put request in review and follower table??
            //let query = `insert into school_photo (school_id) values ($1)`
            //let query2 = `insert into school_video (school_id) values ($1)`
            let query3 = `insert into school_details (school_id) values ($1)` 
            //let query4 = `insert into social_card (school_id) values ($1)` 
            let query5 =`insert into school_contact_info (school_id) values ($1)`

            //let photoEntry = await SQL.sqlQueryWithArray(query, [payload.id])
            //let videoEntry = await SQL.sqlQueryWithArray(query2, [payload.id])
            let detailsEntry = await SQL.sqlQueryWithArray(query3, [payload.id])
            //let socialEntry = await SQL.sqlQueryWithArray(query4, [payload.id])
            let contactEntry = await SQL.sqlQueryWithArray(query5, [payload.id])
            
            console.log(photoEntry, videoEntry, detailsEntry, socialEntry, contactEntry)

            const token = jwt.encode(payload, config.jwtSecret);//authentication


            return res.status(200).json({
                token: token
            })
        } else {
            res.status(401).json(info)
        }
    } else {
        res.send(false)
    }
})

//User login and generate jwt from backend
router.post("/api/login", async function (req, res) {
    if (req.body.email && req.body.password) {

        var email = req.body.email;
        var password = req.body.password;
        console.log(email, password)
        //query db using email only and use bcrypt to check if password is the same as that in the db
        let sqlStatement = `select * from users where email=$1`
        let dataArray = [email]
        let user = await SQL.sqlQueryWithArray(sqlStatement, dataArray)
        console.log(user)

        if (user[0] != undefined) {
            let result = await bcrypt.checkPassword(password, user[0].password);
            if (!result) {
                res.send('Password is incorrect')
            } else {

                var payload = {
                    id: user[0].id
                };
                //return all info related profile (followschool, interested event )  
                let query = `select * from user_follow_school where user_id = $1`
                let query2 = `select * from event_signup where user_id = $1`
                let query3 = `select * from review where user_id = $1`

                let follow = await SQL.sqlQueryWithArray(query, [payload.id]);
                let event = await SQL.sqlQueryWithArray(query2, [payload.id])
                let review = await SQL.sqlQueryWithArray(query3, [payload.id])

                var token = jwt.encode(payload, config.jwtSecret);//authentication
                console.log(token)
                res.json({
                    token: token
                });

                return {
                    id: user[0].id,
                    follow: follow,
                    event: event,
                    review: review
                }

            }
        } else {
            res.send('Account does not exist')
        }

    }
})

router.post("/api/cms/login", async function (req, res) {
    if (req.body.email && req.body.password) {

        var username = req.body.email;
        var password = req.body.password;
        console.log(username, password)
        //query db using email only and use bcrypt to check if password is the same as that in the db
        let sqlStatement = `select * from school_users where username=$1`
        let dataArray = [username]
        let user = await SQL.sqlQueryWithArray(sqlStatement, dataArray)
        console.log(user)

        if (user[0] != undefined) {
            let result = await bcrypt.checkPassword(password, user[0].password);
            if (!result) {
                res.send('Password is incorrect')
            } else {

                var payload = {
                    id: user[0].id
                };
                //return all info related school profile (school_details, school_photos, video and social cards )  

                let query = `select * from school_details where school_id = $1`
                let query2 = `select * from school_video where school_id = $1`
                let query3 = `select * from school_photo where school_id = $1`
                let query4 = `select * from social_card where school_id = $1`

                let details = await SQL.sqlQueryWithArray(query, [payload.id]);
                let video = await SQL.sqlQueryWithArray(query2, [payload.id]);
                let photo = await SQL.sqlQueryWithArray(query3, [payload.id]);
                let social = await SQL.sqlQueryWithArray(query4, [payload.id]);

                var token = jwt.encode(payload, config.jwtSecret);//authentication
                console.log(token)
                res.json({
                    token: token
                });

                return {
                    id: user[0].id,
                    details: details,
                    video: video,
                    photo: photo,
                    social: social
                }

            }
        } else {
            res.send('Account does not exist')
        }

    }
})

//facebook login route
router.post("/api/login/facebook", async function (req, res) {
    if (req.body.userInfo) {
        let userInfo = req.body.userInfo;
        let fbToken = userInfo.accessToken;
        let fbId = userInfo.userID;
        let profilePicUrl = userInfo.picture.data.url;
        let name = userInfo.name.split(' ')[0];
        let email = userInfo.email


        // console.log(profilePicUrl)
        // console.log(userInfo)
        // console.log(name)
        var payload = {
            id: fbToken
        };

        //check if the fb_user has signed in before
        let query = `select * from users where facebook_id = $1`
        let result = await SQL.sqlQueryWithArray(query, [fbId]);

        // if not, SQL insert the user details into our database
        if (result.length == 0) {
            
            let query = `insert into users (email, first_name, facebook_id, access_token, profile_pic) values ($1, $2, $3, $4, $5)`
            let dataArr = [email, name, fbId, fbToken, profilePicUrl]
            await SQL.sqlQueryWithArray(query, dataArr)
        }
        //return jwt token with accessToken as payload
        let token = jwt.encode(payload, config.jwtSecret);

        res.json({
            token: token,
            username: name,
            profilePic: profilePicUrl
        });
    } else {
        res.sendStatus(401);
    }

});





module.exports = router;