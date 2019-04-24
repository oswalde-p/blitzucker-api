const bcrypt = require('bcrypt')

const config = require('../config')
const User = require('../models/user')

const saltRounds = config.SALT_ROUNDS

async function createUser(email, password, admin) {
  if (await User.findOne({ email })) throw new Error('User already exists')
  bcrypt.hash(password, saltRounds, async (err, passwordHash) => {
    const user = await User.create({ email, password: passwordHash, isAdmin: !!admin })
  })
}

async function setPassword(email, password){
  const user = await User.findOne({email})
  if (!user) throw new Error('User not found')
  bcrypt.hash(password, saltRounds, (err, hash) => {
    user.password = hash
    user.save()
  })
}

async function comparePassword(email, password){
  const user = await User.findOne({ email })
  const hash = user.password
  const isValid = await bcrypt.compare(password, hash)
  return isValid
}

module.exports = { comparePassword, createUser, setPassword }
