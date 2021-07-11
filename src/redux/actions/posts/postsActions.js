import {
  POSTS_ADD_POST,
  POSTS_UPDATE_POST,
  POSTS_DELETE_POST,
  POSTS_FETCHING_FAILURE,
  POSTS_FETCHING_START,
  POSTS_FETCHING_SUCCESS,
} from './ACTION_TYPES';

export const postsFetchingStart = () => {
  return { type: POSTS_FETCHING_START };
};

export const postsFetchingSuccess = (posts) => {
  return { type: POSTS_FETCHING_SUCCESS, payload: posts };
};

export const postsFetchingFailure = (errorMessage) => {
  return { type: POSTS_FETCHING_FAILURE, payload: errorMessage };
};

export const postsAddPost = (post) => {
  return { type: POSTS_ADD_POST, payload: post };
};

export const postsDeletePost = (post) => {
  return { type: POSTS_DELETE_POST, payload: post };
};

export const postsUpdatePost = (post) => {
  return { type: POSTS_UPDATE_POST, payload: post };
};
