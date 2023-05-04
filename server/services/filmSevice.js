const films = require('../datas/films.json')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const filmsService = {}

// get all users
filmsService.getAllfilms = () => {
  return films
}

// Get film detail
filmsService.getFilmDetail = (token, id) => {
  const film = films.find((element) => element.id === parseInt(id))

  if (!film) {
    throw new Error('Film not found')
  }

  if (film.isFree) {
    return film
  } else {
    if (!token) {
      throw new Error('token not found')
    }

    const isVerify = jwt.verify(token, process.env.SCRETEKEY)

    if (!isVerify) {
      throw new Error('Invalid token')
    }

    return film
  }
}

module.exports = filmsService
