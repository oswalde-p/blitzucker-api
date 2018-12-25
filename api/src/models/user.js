const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  history: {
    type: [Object],
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
