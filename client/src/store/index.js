import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import CommentReducer from './reducers/CommentReducer'
import PostReducer from './reducers/PostReducer'

const store = createStore(
  combineReducers({
    commentsState: CommentReducer,
    postsState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
