"use strict"
const express = require('express');
const userHandler = require('../handler/userHandler');
const userRouter = express.Router();
const userFollowingRouter = require('./userFollowingRouter');
const passport = require('passport');
const config = require('../config');
const SQL = require('../SQL/SQLquery');



userRouter.use('/following', userFollowingRouter)
userRouter.get('/',userHandler.getUserInfo)
userRouter.get('/:id',userHandler.getParticularUserInfo)
userRouter.put('/', userHandler.editUserInfo)

module.exports = userRouter;