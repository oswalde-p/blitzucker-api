const mongoose = require('mongoose')
const config = require('./config')

const mongooseConnectionString = config.MONGO_CONNECTION_STRING
const CONNECTED = 1

function connect() { 
    mongoose.connect(mongooseConnectionString, {useNewUrlParser: true},  err => {
    if (err) {
      console.log('Error connecting to mongodb')
      console.log(`String: ${mongooseConnectionString}`)
      console.error(err)
    } else {
      console.log('Mongo connection successful')
    }
    })
}

const disconnect = mongoose.disconnect

function connected() {
    return (mongoose.connection.readyState == CONNECTED)
}

module.exports = { connect, connected, disconnect }
