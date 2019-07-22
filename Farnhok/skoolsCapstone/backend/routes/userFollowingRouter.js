const express = require('express');
const userFollowingHandler = require('../handler/userFollowingHandler') 
const userFollowingRouter = express.Router();

userFollowingRouter.get('/', userFollowingHandler.getFollowingList)
userFollowingRouter.post('/:id', userFollowingHandler.followAction)
userFollowingRouter.delete('/:id', userFollowingHandler.unFollowAction)

module.exports = userFollowingRouter;