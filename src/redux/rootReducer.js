import { combineReducers } from 'redux';
import postsManageReducer from './reducers/posts/postsManageReducer';
import commentsManageReducer from './reducers/comments/commentsManageReducer';

const rootReducer = combineReducers({
  posts: postsManageReducer,
  comments: commentsManageReducer,
});

export default rootReducer;
