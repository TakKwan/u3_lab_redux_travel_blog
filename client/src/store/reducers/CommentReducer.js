const { GET_COMMENTS, POST_COMMENT } = require('../types')

const iState = {
  comments: []
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      state.comments = new Array(...action.payload)
      return { ...state }
    case POST_COMMENT:
      state.comments.push(action.payload)
      return { ...state }
    default:
      return { ...state }
  }
}

export default CommentReducer
