const films = require('../datas/films.json')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const filmsService = {}

// get all users
filmsService.getAllfilms = () => {
  return films
}

module.exports = filmsService
