import {
  POSTS_ADD_POST,
  POSTS_UPDATE_POST,
  POSTS_DELETE_POST,
  POSTS_FETCHING_FAILURE,
  POSTS_FETCHING_START,
  POSTS_FETCHING_SUCCESS,
} from '../../actions/posts/ACTION_TYPES';

const initialState = {
  isFetching: false,
  items: [],
  errorMessage: '',
};

const updateTargetPost = (state, targetPost) => {
  return state.items.map((item) => (item.id === targetPost.id ? targetPost : item));
};

const deleteTargetPost = (state, targetPost) => {
  return state.items.filter((post) => post.id !== targetPost);
};

const postsManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCHING_START:
      return { ...state, isFetching: true };
    case POSTS_FETCHING_SUCCESS:
      return { ...state, isFetching: false, items: [...action.payload] };
    case POSTS_FETCHING_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case POSTS_ADD_POST:
      return { ...state, items: [...state.items, action.payload] };
    case POSTS_DELETE_POST:
      return { ...state, items: [...deleteTargetPost(state, action.payload)] };
    case POSTS_UPDATE_POST:
      return { ...state, items: [...updateTargetPost(state, action.payload)] };
    default:
      return state;
  }
};

export default postsManageReducer;
