"use strict"
const SQL = require('../SQL/SQLquery')



const getUserInfo = async function (req, res, next) {

    let sqlStatement = `select first_name, last_name, profile_pic from users
    where id = $1
    `

    let userInfo = await SQL.sqlQueryWithArray(sqlStatement, [req.user.id])


    res.send(userInfo)
}

const getParticularUserInfo = async function (req, res, next) {

    let sqlStatement = `
    select first_name, last_name, profile_pic from users
    where id = $1
    `
    let userInfo = await SQL.sqlQueryWithArray(sqlStatement, [req.params.id])

    res.send(userInfo)
}



const editUserInfo = async function (req, res, next) {
    let updatePicStatement = `
    update users
    set profile_pic = $1
    where id = $2
    `

    await SQL.sqlQueryWithArray(updatePicStatement, [req.body.profilepic, req.user.id])


    res.send('editUserInfo')
}



module.exports.getUserInfo = getUserInfo;
module.exports.getParticularUserInfo = getParticularUserInfo;
module.exports.editUserInfo = editUserInfo;
