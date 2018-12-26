const mongoose = require('mongoose')
const User = require('../models/user')
const moment = require('moment')

const mongooseConnectionString = process.env.mongoose || 'mongodb://localhost:27017/d6s'

mongoose.connect(mongooseConnectionString,async function(err){
  if (err) {
    console.log('Error connecting to mongodb')
    console.error(err)
  } else {
    console.log('Mongo connection successful')

    const user = new User( {email: "example2@test.com", password: "password123" })
    addRandomHistory(user)
    user.validate()
    await user.save()
    console.log('done')
  }
})

const addRandomHistory = function(user, hours = 48){
  const now = moment()
  let time = now.clone()
  time.subtract(hours, 'hours')
  let reading = 7.5
  const history = []
  while (time < now) {
    history.push({
      type: 'READING',
      subtype: 'bgl',
      value: reading,
      units: 'mmol/L',
      time: time.format()
    })
    time = time.add(10, 'minutes')
    const deltaR = (Math.floor(Math.random()*10 - 5))/10
    reading = roundToTenths(reading + deltaR)
    if (reading < 3) {
      reading += 0.5
    } else if (reading > 12) {
      reading -= 0.5
    }
  }
  user.history = history
}

function roundToTenths(num) {
  return Math.round(num*10)/10
}

