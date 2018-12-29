const isValidHistoryEvent = function (obj) {
  const mandatoryKeys = ['type', 'subtype', 'value', 'time']
  const validTypes = ['READING', 'BGL', 'MEDICINE', 'ACTIVITY', 'TRANSACTION']

  for (let key of mandatoryKeys) {
    if (!obj[key]) return false
  }

  if (!validTypes.includes(obj.type)) return false
  if (obj.type == 'READING' || obj.type == 'MEDICINE') {
    return !!obj.units
  }
  return true
}

module.exports = { isValidHistoryEvent }
