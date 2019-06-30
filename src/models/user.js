const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    required: true
  },
  isAdmin: { type: Boolean, required: true, default: false},
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)
