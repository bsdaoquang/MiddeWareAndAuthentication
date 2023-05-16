const mongoose = require('mongoose')
const { Schema, ObjectId } = mongoose

const schemaUser = new Schema({
  id: { type: ObjectId },
  username: {
    type: String,
    require: true,
    validate: {
      validator: (value) => value.length >= 6,
      message: 'Username phải lớn hơn 6 ký tự',
    },
  },

  password: {
    type: String,
    require: true,
    validate: {
      validator: (value) => value.length >= 6,
      message: 'Mật khẩu phải lớn hơn 6 ký tự',
    },
  },
})

const User = mongoose.model('User', schemaUser)

module.export = User
