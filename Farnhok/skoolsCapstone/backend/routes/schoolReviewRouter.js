const express = require('express');
const schoolReviewHandler = require('../handler/schoolReviewHandler') 
const schoolReviewRouter = express.Router();

schoolReviewRouter.get('/:id', schoolReviewHandler.getSchoolReview)
schoolReviewRouter.post('/:id', schoolReviewHandler.postSchoolReview)

module.exports = schoolReviewRouter;