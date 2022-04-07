const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const { Post, Comment } = require('./models')
const routes = require('./routes')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`)
})
