require('dotenv').config()

const config = {}
config.PORT = process.env.PORT || 3001
config.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'No mongo string found'
module.exports = config
