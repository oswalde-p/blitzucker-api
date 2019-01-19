const mongoose = require('mongoose')
const Entry = require('./entry')

const UserSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  history: [{type:mongoose.Schema.Types.ObjectId, ref: 'Entry'}]
})

UserSchema.statics.updateHistory = async function(email, entries) {
  if (!email){
    throw new Error('Missing user email')
  }
  const newEntries = entries.map(obj => new Entry(obj))
  await this.updateOne({email}, {$push: {history: newEntries}})
  newEntries.forEach(e => e.save())
}

module.exports = mongoose.model('User', UserSchema)
