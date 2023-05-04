const filmController = require('../controllers/filmController')
const filmService = require('../services/filmSevice')

const filmRouter = require('express').Router()

filmController(filmRouter, filmService)

module.exports = filmRouter
