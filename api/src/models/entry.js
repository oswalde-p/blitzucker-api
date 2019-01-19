
//type, subtype, units, time
const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  subtype: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  units: {
    type: String
  }
})

module.exports = mongoose.model('Entry', EntrySchema)
