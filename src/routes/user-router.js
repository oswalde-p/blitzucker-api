const router = require('express').Router()
const User = require('../models/user')
const Entry = require('../models/entry')
const { timeComparatorNewestFirst } = require('../helpers')
const userService = require('../services/user-service')

//TODO add authorisation to appropriate functions

router.get('/', async function(req, res) {
  console.log('inside user request handler')
  const users = await User.find()
  res.send(users)
})

router.post('/', async function(req, res, next) {
  const { email, password } = req.body
  if (!(email && password)) return res.sendStatus(400)
  try {
    await userService.createUser(email, password)
    return res.status(200).send()
  } catch(err) {
    if (err.message == 'User already exists'){
      return res.status(400).send('User already exists')
    }
    next(err)
  }
})

module.exports = router
