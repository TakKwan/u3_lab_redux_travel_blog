const { Post } = require('../models')

const createOne = async (req, res) => {
  try {
    const newPost = await new Post(req.body)
    await newPost.save()

    return res.status(201).json(newPost)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})

    return res.status(201).json(posts)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('comments')

    return res.status(201).json(post)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createOne,
  getAllPosts,
  getPostById
}
