const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error'))

const main = async () => {
  const posts = [
    {
      title: 'Brazil',
      description: 'Brazil',
      image:
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/1145D/production/_110794707_gettyimages-590664365.jpg'
    },
    {
      title: 'England',
      description: 'England',
      image:
        'https://www.planetware.com/wpimages/2020/03/england-top-rated-cities-london.jpg'
    },
    {
      title: 'Spain',
      description: 'Spain',
      image:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Spain-in-August1.jpg'
    }
  ]
  await Post.insertMany(posts)
  console.log('Created posts')
}

const run = async () => {
  await main()
  db.close()
}

run()
