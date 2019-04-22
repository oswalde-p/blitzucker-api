const bcrypt = require('bcrypt')

const config = require('../config')
const User = require('../models/user')

const saltRounds = config.saltRounds

async function createUser(email, password) {
  if (await User.findOne({ email })) throw new Error('User already exists')
  bcrypt.hash(password, saltRounds, async (err, passwordHash) => {
    const user = await User.create({ email, passwordHash })
  })
  return true
}

async function setPassword(email, password){
  const user = await User.findOne({email})
  if (!user) throw new Error('User not found')
  bcrypt.hash(password, saltRounds, (err, hash) => {
    user.passwordHash = hash
  })
}

async function comparePassword(email, password){
  const user = await User.findOne({ email })
  const hash = user.passwordHash
  const isValid = await bcrypt.compare(password, hash)
  return isValid
}

module.exports = { comparePassword, createUser, setPassword }
