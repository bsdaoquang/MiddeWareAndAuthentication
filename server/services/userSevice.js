const users = require('../datas/users.json')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const userService = {}

// get all users
userService.getAllUsers = () => {
  return users
}

// Đăng ký người dùng mới
userService.register = async (resgisterPayload) => {
  // Kiểm tra thông tin truyền vào
  if (!resgisterPayload.username || !resgisterPayload.password) {
    throw new Error('Invalid arguments!')
  }

  // Kiểm tra sự tồn tại trong data
  const isReady = users.filter(
    (user) => user.username === resgisterPayload.username,
  )

  if (isReady.length > 0) {
    throw new Error('Tên đăng nhập đã tồn tại!')
  } else {
    const newUser = await User.create({
      username: resgisterPayload.username,
      password: resgisterPayload.password,
    })

    console.log({
      username: resgisterPayload.username,
      password: resgisterPayload.password,
    })
  }
}
// Đăng ký người dùng mới
userService.login = (loginPayload) => {
  // Kiểm tra thông tin truyền vào
  if (!loginPayload.username || !loginPayload.password) {
    throw new Error('Invalid arguments!')
  }

  const user = users.find(
    (user) =>
      user.username === loginPayload.username &&
      user.password === loginPayload.password,
  )

  if (!user) {
    throw new Error('Tài khoản không tồn tại')
  }

  const token = jwt.sign(
    { username: user.username, id: user.id },
    process.env.SCRETEKEY,
  )

  return { data: user, token }
}

module.exports = userService
