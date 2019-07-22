const express = require('express');
const schoolSearchHandler = require('../handler/schoolSearchHandler');
const schoolSearchRouter = express.Router();

schoolSearchRouter.post('/api/search', schoolSearchHandler.postSchoolSearch)

module.exports = schoolSearchRouter;