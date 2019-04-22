const moment = require('moment')

const userService = require('../services/user-service')

populate()

async function populate() {
  const mongo = require('../mongo-connection')
  try {
  const user = await userService.createUser('admin@test.com', 'test', true)
  } catch (err) {
    if (err.message == 'User already exists') {
      console.log(`user "admin@test.com" already exists`)
    }
  }
}

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

