const router = require('express').Router()
const User = require('../models/user')
const HistoryEvent = require('../models/history-event')

router.get('/'), async function(req, res) {
  const { email } = req.body
  const user = User.findOne({ email })
  return HistoryEvent.find({ user })
}

router.post('/', async function(req, res) {
  const {email, historyEvent } = req.body

  if (!email) return res.status(400).send('Missing paramater: email')
  const user = await User.findOne({email})
  if (!user) return res.status(400).send('User not found')

  try {
    const newEvent = await historyService.create(user, historyEvent)
    return res.status(200).send(newEvent)
  } catch (error) {
    console.error(error)
    res.send(500)
  }
})

router.put('/:eventId/', async function(req, res){
  const {email, historyEvent } = req.body

  if (!email) return res.status(400).send('Missing paramater: email')
  const user = await User.findOne({email})
  if (!user) return res.status(400).send('User not found')

  try {
    const newEvent = await historyService.update(user, historyEvent)
    return res.status(200).send(newEvent)
  } catch (error) {
    console.error(error)
    res.send(500)
  }
})

module.exports = router
