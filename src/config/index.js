const config = {}
config.PORT = process.env.PORT || 3001
config.MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/d6s'

config.saltRounds = process.env.SALT_ROUNDS || 13

module.exports = config
