const router = require('express').Router()
const User = require('../models/user')
const { isValidHistoryEvent } = require('../helpers')

//TODO add authorisation to appropriate functions

router.get('/', async function(req, res) {
  const users = await User.find()
  res.send(users)
})

router.post('/history/', async function(req, res) {
  const {email} = req.body
  console.log(req.body)
  if (email) {
    const user = await User.findOne({email})
    if (user){
      return res.send(user.history)
    } else {
      return res.status(400).send('User not found')
    }
  }
  res.send(400)
})

router.post('/history/add/', async function(req, res){
  const { email, data } = req.body
  //TODO check data is valid
  if (!isValidHistoryEvent(data)) {
    return res.sendStatus(400)
  }
  if (!email){
    return res.sendStatus(400)
  }
  User.updateOne({email}, {$push: {history: data}})
    .exec((err, user) => {
        if (!err) {
          res.send(user.history)
        } else {
          res.sendStatus(400)
        }
    })
})

module.exports = router
