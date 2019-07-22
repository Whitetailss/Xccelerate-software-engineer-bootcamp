const SQL = require('../SQL/SQLquery')
"use strict"


const getAllSchoolInfo = async function (req, res, next) {

let sqlStatement = `select school_users.id, school_contact_info.*,school_details.*
from school_users
inner join school_contact_info
on school_users.id = school_contact_info.school_id
inner join school_details
on school_users.id = school_details.school_id
`

let photo = `select * from school_photo`
let video = `select * from school_video`

let schoolPhoto = await SQL.sqlQueryWithArray(photo, [])
let schoolVideo = await SQL.sqlQueryWithArray(video, [])

    let schoolInfo = await SQL.sqlQueryWithArray(sqlStatement, [])

    res.send(schoolPhoto)
}

const getSchoolInfo = async function (req, res, next) {
    let sqlStatement =
        `select school_users.id, school_contact_info.*, school_details.*
     from school_users
     inner join school_contact_info
     on school_users.id = school_contact_info.school_id
     inner join school_details
     on school_users.id = school_details.school_id
     Where school_details.school_id = $1`

    let photo = `select * from school_photo where school_id = $1`
    let video = `select * from school_video where school_id = $1`

    let schoolPhoto = await SQL.sqlQueryWithArray(photo, [req.user.id])
    let schoolVideo = await SQL.sqlQueryWithArray(video, [req.user.id])

    let schoolInfo = await SQL.sqlQueryWithArray(sqlStatement, [req.user.id])
    res.send(schoolVideo)
}

const postSchoolMedia = async function (req, res, next) {

    if(req.body.url){

        let sqlStatement = `INSERT INTO school_photo (photo, caption, school_id, photo_category) VALUES ($1,$2,$3,$4)`

        let dataArr = [
            req.body.url,
            req.body.caption,
            req.user.id,
            req.body.photo_category
        ]

        await SQL.sqlQueryWithArray(sqlStatement, dataArr)
    }

    res.send('createSchoolPage')
}



const editSchoolInfo = async function (req, res, next) {
 
    let bannerImg = req.body.bannerImg;
    let mainVideo = req.body.mainVideo;
    let contactInfo = req.body.contactInfo;
        let schoolName = req.body.contactInfo.name;
        let location = req.body.contactInfo.location;
        let address = req.body.contactInfo.address;
        let phone = req.body.contactInfo.contactNumber;
        let website = req.body.contactInfo.website;
        let email = req.body.contactInfo.email;  
    let moreDetails = req.body.moreDetails;
        let isAM = req.body.moreDetails.isAM;
        let isPM = req.body.moreDetails.isPM;
        let isFullDay =req.body.moreDetails.isFullDay
        let isLongFullDay=req.body.moreDetails.isLongFullDay;
        let noOfStudentAM=req.body.moreDetails.noOfStudentAM;
        let tuitionAM=req.body.moreDetails.tuitionAM;
        let noOfStudentPM=req.body.moreDetails.noOfStudentPM;
        let tuitionPM=req.body.moreDetails.tuitionPM;
        let noOfStudentFD=req.body.moreDetails.noOfStudentFD;
        let tuitionFD=req.body.moreDetails.tuitionFD;
        let noOfStudentLFD=req.body.moreDetails.noOfStudentLFD;
        let tuitionLFD=req.body.moreDetails.tuitionLFD;
        let hasSubsidy=req.body.moreDetails.hasSubsidy;
        let subsidyAmt = req.body.moreDetails.subsidyAmt;
        let noOfTeacher = req.body.moreDetails.noOfTeacher;
   
   

  
    if(req.body.contactInfo){
        console.log('contactInfo present')
        let updateStatement = `
        insert into school_contact_info
        (school_name, contact_number, address, website, email, school_id) values ($1, $2, $3, $4, $5, $6)
        `
       console.log(req.user.id)
        let dataArr = [
            schoolName,
            phone,
            address,
            website,
            email,
            req.user.id
        ]
         console.log(dataArr)
        await SQL.sqlQueryWithArray(updateStatement, dataArr)
    }
    
    if (req.body.moreDetails){
        console.log('moreDetails Present')
         let updateStatement1 = `
         insert into school_details
        (has_am, am_student, am_tuition, has_pm, pm_student, pm_tuition, has_full_day, full_day_student, full_day_tuition,has_long_full_day, long_full_day_student, long_full_day_tuition, has_subsidy, subsidy_amt, no_of_teacher, school_name, profile_pic, location, school_id) values ($1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        `
        

        let dataArr1 = [ 
            isAM, 
            noOfStudentAM, 
            tuitionAM,
            isPM, 
            noOfStudentPM, 
            tuitionPM,
            isFullDay, 
            noOfStudentFD, 
            tuitionFD, 
            isLongFullDay, 
            noOfStudentLFD, 
            tuitionLFD, 
            hasSubsidy,
            subsidyAmt, 
            noOfTeacher, 
            schoolName, 
            bannerImg, 
            location, 
            req.user.id     
        ]

        console.log(dataArr1)
        await SQL.sqlQueryWithArray(updateStatement1, dataArr1)
    }
    
    if (req.body.mainVideo){
        console.log('mainVideo Present')
        let updateStatement = `
        update school_video
        set video = $1
        where school_id = $2 returning id
        `
        await SQL.sqlQueryWithArray(updateStatement, [mainVideo, req.user.id])
    }


    res.send('editSchoolInfo')
}

/*const editSchoolInfo = async function (req, res, next) {
 
    let bannerImg = req.body.bannerImg;
    let mainVideo = req.body.mainVideo;
    let contactInfo = req.body.contactInfo;
        let schoolName = req.body.contactInfo.name;
        let location = req.body.contactInfo.location;
        let address = req.body.contactInfo.address;
        let phone = req.body.contactInfo.contactNumber;
        let website = req.body.contactInfo.website;
        let email = req.body.contactInfo.email;  
    let moreDetails = req.body.moreDetails;
        let isAM = req.body.moreDetails.isAM;
        let isPM = req.body.moreDetails.isPM;
        let isFullDay =req.body.moreDetails.isFullDay
        let isLongFullDay=req.body.moreDetails.isLongFullDay;
        let noOfStudentAM=req.body.moreDetails.noOfStudentAM;
        let tuitionAM=req.body.moreDetails.tuitionAM;
        let noOfStudentPM=req.body.moreDetails.noOfStudentPM;
        let tuitionPM=req.body.moreDetails.tuitionPM;
        let noOfStudentFD=req.body.moreDetails.noOfStudentFD;
        let tuitionFD=req.body.moreDetails.tuitionFD;
        let noOfStudentLFD=req.body.moreDetails.noOfStudentLFD;
        let tuitionLFD=req.body.moreDetails.tuitionLFD;
        let hasSubsidy=req.body.moreDetails.hasSubsidy;
        let subsidyAmt = req.body.moreDetails.subsidyAmt;
        let noOfTeacher = req.body.moreDetails.noOfTeacher;
   
   

  
    if(req.body.contactInfo){
        console.log('contactInfo present')
        let updateStatement = `
        update school_contact_info
        set school_name = $1, contact_number=$2, address=$3, website=$4, email=$5
        where school_id = $6
        `
       console.log(req.user.id)
        let dataArr = [
            schoolName,
            phone,
            address,
            website,
            email,
            req.user.id
        ]
         console.log(dataArr)
        await SQL.sqlQueryWithArray(updateStatement, dataArr)
    }
    
    if (req.body.moreDetails){
        console.log('moreDetails Present')
         let updateStatement1 = `
        update school_details set has_am = $1, am_student = $2, am_tuition=$3,  has_pm = $4, pm_student = $5,  pm_tuition=$6, where school_id= $7  `
        
        let updateStatement2 = `
        update school_details set has_full_day =$1 ,full_day_student=$2,  full_day_tuition=$3, has_long_full_day = $4, long_full_day_student =$5, long_full_day_tuition=$6 where school_id= $7  `
       
        let updateStatement3 = `
        update school_details set has_subsidy = $1,  subsidy_amt =$2, no_of_teacher= $3,  school_name = $4, profile_pic=$5, location=$6 where school_id= $7  `

        let dataArr1 = [ 
            isAM, 
            noOfStudentAM, 
            tuitionAM,
            isPM, 
            noOfStudentPM, 
            tuitionPM,
            req.user.id     
        ]
       
        let dataArr2 = [ 
            isFullDay, 
            noOfStudentFD, 
            tuitionFD, 
            isLongFullDay, 
            noOfStudentLFD, 
            tuitionLFD, 
            req.user.id     
        ]

        let dataArr3 = [ 
            hasSubsidy,
            subsidyAmt, 
            noOfTeacher, 
            schoolName, 
            bannerImg, 
            location, 
            req.user.id     
        ]

        console.log(dataArr1, dataArr2)
        await SQL.sqlQueryWithArray(updateStatement1, dataArr1)
        await SQL.sqlQueryWithArray(updateStatement2, dataArr2)
        await SQL.sqlQueryWithArray(updateStatement3, dataArr3)
    }
    
    if (req.body.mainVideo){
        console.log('mainVideo Present')
        let updateStatement = `
        update school_video
        set video = $1
        where school_id = $2 returning id
        `
        await SQL.sqlQueryWithArray(updateStatement, [mainVideo, req.user.id])
    }


    res.send('editSchoolInfo')
}*/


// const deleteSchoolInfo = async function (req, res, next) {
//     res.send('deleteSchoolInfo')
// }

module.exports.getAllSchoolInfo = getAllSchoolInfo;
module.exports.getSchoolInfo = getSchoolInfo;
module.exports.postSchoolMedia = postSchoolMedia;
module.exports.editSchoolInfo = editSchoolInfo;
// module.exports.deleteSchoolInfo = deleteSchoolInfo;


// select school_users.id, school_contact_info.*, school_details.*
//      from school_users
//      inner join school_contact_info
//      on school_users.id = school_contact_info.school_id
//      inner join school_details
//      on school_users.id = school_details.school_id 