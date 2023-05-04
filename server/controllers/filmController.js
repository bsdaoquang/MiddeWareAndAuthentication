const filmController = (router, service) => {
  const filmService = service

  router.get('/getAllFilms', (_, res, next) => {
    const films = filmService.getAllfilms()

    res.data = films

    next()
  })
}

module.exports = filmController
