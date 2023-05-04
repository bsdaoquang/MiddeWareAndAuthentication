const userController = require('../controllers/userController')
const userService = require('../services/userSevice')

const userRouter = require('express').Router()

userController(userRouter, userService)

module.exports = userRouter
