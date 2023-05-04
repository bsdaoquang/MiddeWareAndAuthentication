const userController = (router, service) => {
  const userService = service

  router.get('/getAllUsers', (_, res, next) => {
    const users = userService.getAllUsers()

    res.data = users

    next()
  })

  router.post('/register', (req, res, next) => {
    const user = userService.register(req.body)
    /*
      req.body = {
        "username": "something",
        "password": ""
      }
    */

    res.data = user

    next()
  })

  router.post('/login', (req, res, next) => {
    const user = userService.login(req.body)

    res.data = user

    next()
  })
}

module.exports = userController
