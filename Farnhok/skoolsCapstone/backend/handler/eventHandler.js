"use strict"

const getAllEventInfo = async function(req,res, next){
    res.send('getAllEventInfo')
}

const getEventInfo = async function(req,res, next){
    res.send('getEventInfo')
}

const createEvent = async function(req,res, next){
    res.send('createEvent')
}

const editEventInfo = async function(req,res, next){
    res.send('editEventInfo')
}

const deleteEventInfo = async function(req,res, next){
    res.send('deleteEventInfo')
}


module.exports.getAllEventInfo = getAllEventInfo;
module.exports.getEventInfo = getEventInfo;
module.exports.createEvent = createEvent;
module.exports.editEventInfo = editEventInfo;
module.exports.deleteEventInfo = deleteEventInfo;
