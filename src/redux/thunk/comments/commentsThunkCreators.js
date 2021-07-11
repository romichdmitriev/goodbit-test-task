import fetchComments from '../../../requests/comments/fetchComments';
import addCommentRequest from '../../../requests/comments/addComment';
import deleteCommentRequest from '../../../requests/comments/deleteComment';
import updateCommentRequest from '../../../requests/comments/updateComment';
import * as commentsActions from '../../actions/comments/commentsActions';

export const fetchCommentsThunk = () => {
  return function (dispatch) {
    return fetchComments
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при fetchComments');
        }

        return response.json();
      })
      .then((posts) => dispatch(commentsActions.commentsFetchingSuccess(posts)))
      .catch((error) => dispatch(commentsActions.commentsFetchingFailure(error.message)));
  };
};

export const addCommentThunk = (comment) => {
  return function (dispatch) {
    return addCommentRequest(comment)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error('Произошла ошибка при addCommentRequest');
        }

        dispatch(commentsActions.commentsAddComment(comment));
      })
      .catch((error) => dispatch(commentsActions.commentsFetchingFailure(error.message)));
  };
};

export const deleteCommentThunk = (comment) => {
  return function (dispatch) {
    return deleteCommentRequest(comment)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при deleteCommentRequest');
        }

        dispatch(commentsActions.commentsDeleteTargetComment(comment));
      })
      .catch((error) => dispatch(commentsActions.commentsFetchingFailure(error.message)));
  };
};

export const updateCommentThunk = (comment) => {
  return function (dispatch) {
    return updateCommentRequest(comment)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при updateCommentRequest');
        }

        dispatch(commentsActions.commentsUpdateTargetComment(comment));
      })
      .catch((error) => dispatch(commentsActions.commentsFetchingFailure(error.message)));
  };
};
