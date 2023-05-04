const userRouter = require('./userRouter')

const rootRouter = require('express').Router()

rootRouter.use('/user', userRouter)
rootRouter.use(require('../middlewares/formatData'))
rootRouter.use(require('../middlewares/formatError'))

module.exports = rootRouter
