const express = require('express');
const schoolFollowerHandler = require('../handler/schoolFollowerHandler') 
const schoolFollowerRouter = express.Router();

schoolFollowerRouter.get('/:id', schoolFollowerHandler.getSchoolFollower)


module.exports = schoolFollowerRouter;