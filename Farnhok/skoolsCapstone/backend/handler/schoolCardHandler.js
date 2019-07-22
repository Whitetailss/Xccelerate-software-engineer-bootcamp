"use strict"
const SQL = require('../SQL/SQLquery')


const getCMSSchoolCard = async function (req, res, next) {

    if (req.query.id) {
        console.log('you reached there')
        let sqlStatement =
            `select * from social_card where school_id = $1 order by id desc`


        let social_card = await SQL.sqlQueryWithArray(sqlStatement, [req.query.id])

        res.send(social_card)
    } 
    else {
        console.log('not here')

        let sqlStatement =
            `select * from social_card where school_id = $1 order by id desc`


        let social_card = await SQL.sqlQueryWithArray(sqlStatement, [req.user.id])

        res.send(social_card)
    }
}

const getschoolCardPhoto = async function (req, res, next) {

    if (req.query.id == true) {
        console.log('you are there')
        let sqlStatement =
            `
    select * from social_card_photo
    where school_id = $1
    `

        let social_card_photo = await SQL.sqlQueryWithArray(sqlStatement, [req.query.id])

        res.send(social_card_photo)
    } else{
        console.log('cannot here')
    let sqlStatement =
        `
    select * from social_card_photo
    where school_id = $1
    `

    let social_card_photo = await SQL.sqlQueryWithArray(sqlStatement, [req.user.id])

    res.send(social_card_photo)
    }
}


const getSchoolCard = async function (req, res, next) {

    let sqlStatement =
        `
    select * from social_card
    where school_id=$1
    `

    let photo =
        `
    select * from social_card_photo
    where card_id = $1
    `

    let video =
        `
    select * from social_card_video
    where card_id = $1
    `

    let social_card = await SQL.sqlQueryWithArray(sqlStatement, [req.params.id])
    let social_card_photo = await SQL.sqlQueryWithArray(photo, [req.query.card])
    let social_card_video = await SQL.sqlQueryWithArray(video, [req.query.card])

    console.log(social_card_photo, social_card_video)

    res.send(social_card)
}

const postSchoolCard = async function (req, res, next) {

    console.log(`card content is ${req.query.card_content}`)

    if (req.query.card_content) {
        console.log(req.query.card_content)
        let cardContent = `
        insert into social_card (school_id,card_content)
        values($1,$2)
        `
        console.log(req.user.id)
        await SQL.sqlQueryWithArray(cardContent, [req.user.id, req.query.card_content])

        let getAllContent = `
        select * from social_card
        where school_id=$1
        order by id desc
        `

        let allPost = await SQL.sqlQueryWithArray(getAllContent, [req.user.id])

        res.send(allPost)
    }


    // res.send('createSchoolCard')
}

const postCardMedia = async function (req, res, next) {


    console.log(req.body.url)

    if (req.body.url) {
        let cardPhoto = `
    insert into social_card_photo (card_id,school_id,photo)
    values($1,$2,$3)
    `
        await SQL.sqlQueryWithArray(cardPhoto, [req.params.card_id, req.user.id, req.body.url])

        let getAllPhoto = `
        select * from social_card_photo
        where school_id=$1
        order by id desc
        `

        let allPhoto = await SQL.sqlQueryWithArray(getAllPhoto, [req.user.id])
        res.send(allPhoto)
    }

    if (req.body.card_video) {
        let cardVideo = `
    insert into social_card_video (card_id,video)
    values($1,$2)
    `
        await SQL.sqlQueryWithArray(cardVideo, [req.query.card_id, req.body.card_video])

    }

}

const editSchoolCard = async function (req, res, next) {

    let updatePicStatement = `
    update social_card
    set card_content = $1
    where id = $2
    `

    await SQL.sqlQueryWithArray(updatePicStatement, [req.query.card_content, req.params.card_id])

    let getAllContent = `
    select * from social_card
    where school_id=$1
    `
    let allPost = await SQL.sqlQueryWithArray(getAllContent, [req.user.id])

    res.send(allPost)
}

const deleteSchoolCard = async function (req, res, next) {

    if (req.query.card_id) {
        let deleteCardPhoto = `
        delete from social_card_photo 
        where card_id = $1
        `
        await SQL.sqlQueryWithArray(deleteCardPhoto, [req.query.card_id])

        let deleteCardVideo = `
        delete from social_card_video 
        where card_id = $1
        `

        await SQL.sqlQueryWithArray(deleteCardVideo, [req.query.card_id])

        let deleteStatement = `
        delete from social_card 
        where id = $1
        `
        await SQL.sqlQueryWithArray(deleteStatement, [req.query.card_id])

        let getAllContent = `
        select * from social_card
        where school_id=$1
        `
        let allPost = await SQL.sqlQueryWithArray(getAllContent, [req.user.id])

        res.send(allPost)
    }


    if (req.query.card_photo_id) {
        let deleteStatement = `
        delete from social_card_photo 
        where id = $1
        `

        await SQL.sqlQueryWithArray(deleteStatement, [req.query.card_photo_id])
    }

    if (req.query.card_video_id) {
        let deleteStatement = `
        delete from social_card_video 
        where id = $1
        `

        await SQL.sqlQueryWithArray(deleteStatement, [req.query.card_video_id])
    }

    // res.send('deleteSchoolCard')
}

module.exports.getCMSSchoolCard = getCMSSchoolCard;
module.exports.getschoolCardPhoto = getschoolCardPhoto;
module.exports.getSchoolCard = getSchoolCard;
module.exports.postSchoolCard = postSchoolCard;
module.exports.postCardMedia = postCardMedia;
module.exports.editSchoolCard = editSchoolCard;
module.exports.deleteSchoolCard = deleteSchoolCard;

