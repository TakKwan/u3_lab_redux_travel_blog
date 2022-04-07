const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, required: false, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = PostSchema
