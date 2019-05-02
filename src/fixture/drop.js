const mongoConnection = require('../mongo-connection')
const User = require('../models/user')

run()

async function run() {
    await mongoConnection.connect()
    await User.deleteMany({})
    await mongoConnection.disconnect()
}




