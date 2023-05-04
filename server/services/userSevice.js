const users = require('../datas/user.json')

const userService = {}

userService.getAllUsers = () => {
  return users
}

module.exports = userService
