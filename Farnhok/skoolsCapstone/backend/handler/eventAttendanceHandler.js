"use strict"

const getEventAttendance = async function(req,res, next){
    res.send('getEventAttendance')
}

const userJoinEventAction = async function(req,res, next){
    res.send('userJoinEventAction')
}

const userUnjoinEventAction = async function(req,res, next){
    res.send('userUnjoinEventAction')
}

module.exports.getEventAttendance = getEventAttendance;
module.exports.userJoinEventAction = userJoinEventAction;
module.exports.userUnjoinEventAction = userUnjoinEventAction;