"use strict"
const SQL = require('../SQL/SQLquery')


const getFollowingList = async function (req, res, next) {
    let sqlStatement = `
    select * from user_follow_school
    where user_id = $1
    `

    let userFollower = await SQL.sqlQueryWithArray(sqlStatement, [req.user.id])

    res.send(userFollower)
}

const followAction = async function (req, res, next) {

    let followStatement = `
    insert into user_follow_school
    (school_id,user_id)
    values
    ($1,$2)  
    `

    await SQL.sqlQueryWithArray(followStatement, [req.params.id, req.user.id])


    res.send('followAction')
}



const unFollowAction = async function (req, res, next) {

    let unFollowStatement = `
delete from user_follow_school
where school_id = $1 and
user_id = $2
`

    await SQL.sqlQueryWithArray(unFollowStatement, [req.params.id, req.user.id])

    res.send('unFollowAction')
}


module.exports.getFollowingList = getFollowingList;
module.exports.followAction = followAction;
module.exports.unFollowAction = unFollowAction;
