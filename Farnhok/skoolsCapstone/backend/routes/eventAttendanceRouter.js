const express = require('express');
const eventAttendanceHandler = require('../handler/eventAttendanceHandler') 
const router = express.Router();
const SQL = require('../SQL/SQLquery');


//School get event attendance joining the user first and last name and profile pic with event id
router.get('/:id', async (req, res)=>{
    
    let dataArr = [req.params.id];
    let query = `select e.event_id, e.is_interested, e.is_attending, e.user_email, u.first_name, u.last_name, u.profile_pic from event_signup e inner join users u on e.user_id = u.id where e.event_id =$1`;

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result)
 
})

//User sign up for specific event either interested or attending
router.post('/:id', async (req, res)=>{

    let dataArr = [
        req.params.id, //event_id
        req.body.user_id, // how to get this from the post?
        req.body.is_interested,
        req.body.is_attending,
        req.body.email
    ];

    let query = `insert into event_signup (event_id, user_id, is_interested, is_attending, user_email) values ($1, $2, $3, $4, $5 ) returning *`

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result)

})

//User can change their attendance to  either interested or attending specific event
router.put('/:id/:event_signup.id', async (req, res)=>{

    let dataArr = [
        req.params.id, //event_id
        req.body.user_id, // how to pass this to the post req?
        req.body.is_interested,
        req.body.is_attending,
        req.body.email,
        req.params.event_signup.id
    ];

    let query = `update event_signup set event_id =$1, user_id=$2, is_interested=$3, is_attending=$4, user_email=$5 where id = $6 returning *`

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result)

})

//User delete attendance to specific event with event_signup id? Don't we need the user_id so that they are deleting their attendance only?
router.delete('/:id/:user_id', async (req, res)=>{

    let dataArr = [req.params.id, 
        req.params.user_id //how to pass this to the request
    ];

    let query = `delete from event_signup where event_id=$1 && user_id=$2 returning *`

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result);
})


module.exports = router;