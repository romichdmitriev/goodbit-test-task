import {
  COMMENTS_ADD_COMMENT,
  COMMENTS_UPDATE_COMMENT,
  COMMENTS_DELETE_COMMENT,
  COMMENTS_FETCHING_FAILURE,
  COMMENTS_FETCHING_START,
  COMMENTS_FETCHING_SUCCESS,
} from '../../actions/comments/ACTION_TYPES';

const initialState = {
  isFetching: false,
  items: [],
  errorMessage: '',
};

const updateTargetComment = (state, targetComment) => {
  return state.items.map((item) => (item.id === targetComment.id ? targetComment : item));
};

const deleteTargetComment = (state, targetComment) => {
  console.log(targetComment);
  return state.items.filter((comment) => comment.id !== targetComment);
};

const commentsManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_FETCHING_START:
      return { ...state, isFetching: true };
    case COMMENTS_FETCHING_SUCCESS:
      return { ...state, isFetching: false, items: [...action.payload] };
    case COMMENTS_FETCHING_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case COMMENTS_ADD_COMMENT:
      return { ...state, items: [...state.items, action.payload] };
    case COMMENTS_DELETE_COMMENT:
      return { ...state, items: [...deleteTargetComment(state, action.payload)] };
    case COMMENTS_UPDATE_COMMENT:
      return { ...state, items: [...updateTargetComment(state, action.payload)] };
    default:
      return state;
  }
};

export default commentsManageReducer;
