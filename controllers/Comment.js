const { Comment } = require('../models')
const { Post } = require('../models')

const createOne = async (req, res) => {
  try {
    const newComment = await new Comment(req.body)
    await newComment.save()

    return res.status(201).json(newComment)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const postComment = async (req, res) => {
  try {
    const newComment = await new Comment(req.body)
    await newComment.save()

    const post = await Post.findById(req.params.id)
    post.comments.push(newComment._id)
    await post.save()

    return res.status(201).json(newComment)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createOne,
  postComment
}
