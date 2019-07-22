"use strict"
const SQL = require('../SQL/SQLquery')


const getSchoolFollower = async function(req,res, next){
    let sqlStatement = `
    select * from user_follow_school
    where school_id = $1
    `

    let userFollower = await SQL.sqlQueryWithArray(sqlStatement, [req.params.id])

    
    res.send(userFollower)
}

module.exports.getSchoolFollower = getSchoolFollower;