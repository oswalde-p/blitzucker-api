const mongoose = require('mongoose')

const HistoryEvent = new mongoose.Schema({
  user: { type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventType: { type:mongoose.Schema.Types.ObjectId, ref: 'EventType', required: true },
  time: { type: Date, required: true },
  endTime: { type: Date, required: () => this.eventType.hasEndTime },
  value: { type: Number, required: () => this.eventType.hasValue }
})
