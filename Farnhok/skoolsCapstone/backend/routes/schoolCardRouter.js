const express = require('express');
const schoolCardHandler = require('../handler/schoolCardHandler') 
const schoolCardRouter = express.Router();

schoolCardRouter.get('/', schoolCardHandler.getCMSSchoolCard)
schoolCardRouter.get('/photo', schoolCardHandler.getschoolCardPhoto)
schoolCardRouter.get('/:id', schoolCardHandler.getSchoolCard)
schoolCardRouter.post('/', schoolCardHandler.postSchoolCard)
schoolCardRouter.post('/:card_id', schoolCardHandler.postCardMedia)
schoolCardRouter.put('/:card_id', schoolCardHandler.editSchoolCard)
schoolCardRouter.delete('/', schoolCardHandler.deleteSchoolCard)


module.exports = schoolCardRouter;