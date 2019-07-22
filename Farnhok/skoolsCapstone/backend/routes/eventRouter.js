"use strict"
const express = require('express');
// const eventHandler = require('../handler/eventHandler');
const router = express.Router();
const attendanceRouter = require('./eventAttendanceRouter');
const SQL = require('../SQL/SQLquery');


router.use('/attendance', attendanceRouter)

//get all event information from all events
router.get('/', async (req, res) =>{
    console.log('you there 123')
    let query = `select * from school_event`
    let result = await SQL.sqlQueryWithArray(query, []);
   
    res.json(result)
})

//get event information from specific event with event ID (or school id?)
router.get('/:id', async (req, res) =>{

    let dataArr = [req.params.id];
    let query = `select * from school_event where id = $1`
    let result = await SQL.sqlQueryWithArray(query, dataArr)
  
    res.json(result)
})


//post event with information (to school id?:id)
router.post('/', async (req, res)=>{

    let dataArr = [
        req.body.school_id,//??how do I get this data??
        req.body.poster,
        req.body.event_name,
        req.body.event_venue,
        req.body.event_description,
        req.body.is_free,
        req.body.event_date,
        req.body.start_time,
        req.body.end_time
    ]

    let query = `insert into school_event (school_id, poster, event_name, event_venue, event_description, is_free, event_date, start_time, end_time) values ($1, $2, $3, $4,$5, $6, $7, $8, $9)
    returning *`;    

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result)

})

//update or edit event information with specific event id
router.put('/:id', async (req, res) => {

    let dataArr = [
        req.body.school_id,
        req.body.poster,
        req.body.event_name,
        req.body.event_venue,
        req.body.event_description,
        req.body.is_free,
        req.body.event_date,
        req.body.start_time,
        req.body.end_time,
        req.params.id
    ]

    let query = `update school_event set school_id=$1, poster=$2, event_name=$3, event_venue=$4, event_description=$5, is_free=$6, event_date=$7, start_time=$8, end_time=$9 where id = $10
    returning *`;

    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result);

})

// delete specific event with event id
router.delete('/:id', async (req, res)=>{

    let dataArr = [req.params.id];
    let query = `delete from school_event where id=$1 returning *`;
    let result = await SQL.sqlQueryWithArray(query, dataArr);

    res.json(result)

})

router.post('/cms/events', async (req,res) => {

    let event = [
        req.body.abc
    ]
})

module.exports = router;