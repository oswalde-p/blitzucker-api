const EventType = require('../models/event-type')
const HistoryEvent = require('../models/history-event')

/**
 * Create a new history event
 *
 * @param {User} user
 * @param {Object} eventData
 */
const create = async function(user, eventData) {
  return HistoryEvent.create({
    user,
    ...eventData
  })
}

/**
 * Update an existing history event
 *
 * @param {User} user
 * @param {Object} eventData includes existing _id and any updated fields
 */
const update = async function(user, eventData) {
  const oldEvent = HistoryEvent.findOne(eventData._id)
  if (!(oldEvent && oldEvent.user == user)) {
    throw new Error('Invalid user/eventId combination')
  }
  return HistoryEvent.findOneAndUpdate(eventData._id, eventData, { new: true })
}

/**
 * Get the history for a given user
 * @param {User} user
 * @param {Object} options (optional)
 */
const retrieve = async function(user, options) {

}

module.exports = { create, update, retrieve }
