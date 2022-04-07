const db = require('../db')
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error'))

const main = async () => {
  const comments = {
    name: '1',
    recomendation: 'somewhere',
    rating: 'good',
    comment: 'something'
  }

  await Comment.insertOne(comments)
  console.log('Created Comments')
}

const run = async () => {
  await main()
  db.close()
}

run()
