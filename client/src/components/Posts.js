import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostActions'

const mapStateToProps = ({ postsState }) => {
  return { postsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <div>
      {props.postsState.posts.map((post) => (
        <div className="post" key={post._id}>
          <h1 className="title">{post.title}</h1>
          <p className="description">{post.description}</p>
          <img className="image" src={post.image} alt=""></img>
          <Link className="link" to={`/posts/${post._id}`}>
            Comments
          </Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
