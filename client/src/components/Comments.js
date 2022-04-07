import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  LoadPostComments,
  PostCommentAction
} from '../store/actions/PostActions'
import { useParams } from 'react-router-dom'

const mapStateToProps = ({ commentsState }) => {
  return { commentsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadPostComments(id)),
    postComment: (id, comment) => dispatch(PostCommentAction(id, comment))
  }
}

const Comments = (props) => {
  const [newComment, setNewComment] = useState({
    name: '',
    rating: '',
    recomendation: '',
    comment: ''
  })
  let { id } = useParams()

  useEffect(() => {
    props.fetchComments(id)
    console.log(props.commentsState)
  }, [])

  const onChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.postComment(id, newComment)
    setNewComment({
      name: '',
      rating: '',
      recomendation: '',
      comment: ''
    })
  }

  return (
    <div>
      {props.commentsState.comments.map((comment) => (
        <div className="comment" key={comment._id}>
          <p>Comments: {comment.comment}</p>
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="name"
          value={newComment.name}
          onChange={(e) => onChange(e)}
        />
        <input
          name="rating"
          placeholder="rating"
          value={newComment.rating}
          onChange={(e) => onChange(e)}
        />
        <input
          name="comment"
          placeholder="comment"
          value={newComment.comment}
          onChange={(e) => onChange(e)}
        />
        <input
          name="recomendation"
          placeholder="recomendation"
          value={newComment.recomendation}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
