const mongoose = require('mongoose')

async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGOO_URL)
    console.log('Successfully connected to MongoDB!')
  } catch (error) {
    throw new Exception('Can not conect to mongoo db')
  }
}

module.exports = dbConnect
