const formatError = (error, _, res, next) => {
  if (error) {
    return res.status(404).json({
      errorMsg: error.message,
    })
  }
}

module.exports = formatError
