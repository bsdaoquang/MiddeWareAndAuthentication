const userRouter = require('./userRouter')

const rootRouter = require('express').Router()

rootRouter.use('/user', userRouter)

module.exports = rootRouter
