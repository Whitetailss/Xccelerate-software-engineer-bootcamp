"use strict"
const express = require('express');
const schoolHandler = require('../handler/schoolHandler');
const schoolSearchRouter = require('../handler/schoolSearchHandler');
const schoolRouter = express.Router();
const schoolReviewRouter = require('./schoolReviewRouter')
const schoolFollowerRouter = require('./schoolFollowerRouter');
const schoolCardRouter = require('./schoolCardRouter');

schoolRouter.use('/review', schoolReviewRouter)
// schoolRouter.use('/search', schoolSearchRouter)
schoolRouter.use('/follower', schoolFollowerRouter)
schoolRouter.use('/card', schoolCardRouter)

schoolRouter.get('/', schoolHandler.getAllSchoolInfo)
schoolRouter.get('/:id', schoolHandler.getSchoolInfo)
schoolRouter.post('/', schoolHandler.postSchoolMedia)
schoolRouter.post('/info', schoolHandler.editSchoolInfo)
// schoolRouter.delete('/:id', schoolHandler.deleteSchoolInfo)

module.exports = schoolRouter;