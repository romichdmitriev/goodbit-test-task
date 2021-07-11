import {
  COMMENTS_ADD_COMMENT,
  COMMENTS_UPDATE_COMMENT,
  COMMENTS_DELETE_COMMENT,
  COMMENTS_FETCHING_FAILURE,
  COMMENTS_FETCHING_START,
  COMMENTS_FETCHING_SUCCESS,
} from './ACTION_TYPES';

export const commentsFetchingStart = () => {
  return { type: COMMENTS_FETCHING_START };
};

export const commentsFetchingSuccess = (comments) => {
  return { type: COMMENTS_FETCHING_SUCCESS, payload: comments };
};

export const commentsFetchingFailure = (errorMessage) => {
  return { type: COMMENTS_FETCHING_FAILURE, payload: errorMessage };
};

export const commentsAddComment = (comment) => {
  return { type: COMMENTS_ADD_COMMENT, payload: comment };
};

export const commentsDeleteTargetComment = (comment) => {
  return { type: COMMENTS_DELETE_COMMENT, payload: comment };
};

export const commentsUpdateTargetComment = (comment) => {
  return { type: COMMENTS_UPDATE_COMMENT, payload: comment };
};
