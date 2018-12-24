const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3001
const mongooseConnectionString = process.env.mongoose || 'mongodb://localhost/d6s'
const app = express()

app.use(morgan('tiny'))

//mongoose
mongoose.connect(mongooseConnectionString, err => {
  if (err) {
    console.log('Error connecting to mongodb')
    console.error(err)
  } else {
    'Mongo connection successfully'
  }
})

//routes
app.get('/api/~/liveness', (_, res) => res.sendStatus(200))


app.listen(PORT, r => { console.log(`Server listening on port ${PORT}`)})
