const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is Landing Page'))

router.get('/posts', controllers.post.getAllPosts)
router.get('/posts/:id', controllers.post.getPostById)
router.post('/posts', controllers.post.createOne)
router.post('/posts/:id', controllers.comment.postComment)

module.exports = router
