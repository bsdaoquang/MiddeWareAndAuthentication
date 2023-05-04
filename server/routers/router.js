const userRouter = require('./userRouter')
const filmRouter = require('./filmRouter')
const rootRouter = require('express').Router()

rootRouter.use('/film', filmRouter)
rootRouter.use('/user', userRouter)
rootRouter.use(require('../middlewares/formatData'))
rootRouter.use(require('../middlewares/formatError'))

module.exports = rootRouter
