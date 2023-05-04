const users = require('../datas/users.json')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const userService = {}

// get all users
userService.getAllUsers = () => {
  return users
}

// Đăng ký người dùng mới
userService.register = (resgisterPayload) => {
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
    const newUser = {
      username: resgisterPayload.username,
      password: resgisterPayload.password,
      roles: 'Member',
    }

    users.push(newUser)

    return 'Đăng tài khoản thành công!'
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

  return { token }
}

module.exports = userService
