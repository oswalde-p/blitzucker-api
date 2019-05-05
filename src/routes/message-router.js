const router = require('express').Router()

const Message = require('../models/message')

router.get('/', async(req, res) => {
  const messages = await Message.find()
  res.send(messages)
})

router.post('/', async(req, res) => {
  const { text } = req.body
  console.log(text)
  const message = await Message.create({text})
  res.send(message)
})

module.exports = router
