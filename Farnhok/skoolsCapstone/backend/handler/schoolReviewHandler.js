"use strict"
const SQL = require('../SQL/SQLquery')


const getSchoolReview = async function(req,res, next){

    let sqlStatement = `
    select * from review
    where school_id = $1
    `

    let review = await SQL.sqlQueryWithArray(sqlStatement, [req.params.id])
    res.send(review)
}

const postSchoolReview = async function(req,res, next){

    let sqlStatement = `
    insert into review (user_id,school_id,comment_content,score_param_1,score_param_2,score_param_3,teaching_style)
    values($1,$2,$3,$4,$5,$6,$7)
    `

    await SQL.sqlQueryWithArray(sqlStatement, [req.user.id,req.params.id,req.body.comment_content,req.body.score_param_1,req.body.score_param_2,req.body.score_param_3,req.body.teaching_style])
    res.send('postSchoolReview');
}


module.exports.getSchoolReview = getSchoolReview;
module.exports.postSchoolReview = postSchoolReview;