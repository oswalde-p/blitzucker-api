const mongoose = require('mongoose')

const EventType = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  hasValue: { type: Boolean, default: false },
  hasEndTime: { type: Boolean, default: false },
  units: {
    type: {
      symbol: String,
      desctiption: String
    }
  }
})

module.exports = mongoose.model('EventType', EventType)
