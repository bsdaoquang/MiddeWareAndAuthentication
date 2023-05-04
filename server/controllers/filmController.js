const verifyToken = require('../middlewares/verifyToken')

const filmController = (router, service) => {
  const filmService = service

  router.get('/getAllFilms', (_, res, next) => {
    const films = filmService.getAllfilms()

    res.data = films

    next()
  })

  router.get('/getFilmDetail', (req, res, next) => {
    const header = req.headers.authorization

    const token = header ? header.split(' ')[1] : ''

    const id = req.query.id

    const film = filmService.getFilmDetail(token, id)

    res.data = film
    next()
  })
}

module.exports = filmController
