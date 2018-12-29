const moment = require('moment')

const isValidHistoryEvent = function (obj) {
  const mandatoryKeys = ['type', 'subtype', 'value', 'time']
  const validTypes = ['READING', 'BGL', 'INSULIN', 'PILLS', 'ACTIVITY', 'TRANSACTION']

  for (let key of mandatoryKeys) {
    if (!obj[key]) return false
  }

  if (!validTypes.includes(obj.type)) return false
  if (obj.type == 'READING') {
    return !!obj.units
  }
  return true
}


const timeComparatorNewestFirst = function(a, b){
  let t1 = moment(a.time)
  let t2 = moment(b.time)
  return t2 - t1
}

module.exports = { isValidHistoryEvent, timeComparatorNewestFirst }
