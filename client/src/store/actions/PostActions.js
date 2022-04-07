import {
  getPosts,
  getPostComments,
  postComment
} from '../../services/PostServices'
import { GET_POSTS, GET_COMMENTS, POST_COMMENT } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await getPosts()

      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadPostComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await getPostComments(id)

      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const PostCommentAction = (id, newComment) => {
  return async (dispatch) => {
    try {
      const comment = await postComment(id, newComment)

      dispatch({
        type: POST_COMMENT,
        payload: comment
      })
    } catch (error) {
      throw error
    }
  }
}
