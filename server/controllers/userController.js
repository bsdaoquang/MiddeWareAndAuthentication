const userController = (router, service) => {
  const userService = service

  router.get('/getAllUsers', (_, res, next) => {
    const users = userService.getAllUsers()

    res.data = users

    next()
  })
}

module.exports = userController
