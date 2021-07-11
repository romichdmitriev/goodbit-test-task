import fetchPosts from '../../../requests/posts/fetchPosts';
import addPostRequest from '../../../requests/posts/addPost';
import deletePostRequest from '../../../requests/posts/deletePost';
import updatePostRequest from '../../../requests/posts/updatePost';
import * as postsActions from '../../actions/posts/postsActions';

export const fetchPostsThunk = () => {
  return function (dispatch) {
    return fetchPosts
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при fetchPosts');
        }
        return response.json();
      })
      .then((posts) => dispatch(postsActions.postsFetchingSuccess(posts)))
      .catch((error) => {
        dispatch(postsActions.postsFetchingFailure(error.message));
      });
  };
};

export const addPostThunk = (post) => {
  return function (dispatch) {
    return addPostRequest(post)
      .then((response) => {
        console.log(response.status);
        if (response.status !== 201) {
          throw new Error('Произошла ошибка при addPostRequest');
        }

        dispatch(postsActions.postsAddPost(post));
      })
      .catch((error) => dispatch(postsActions.postsFetchingFailure(error.message)));
  };
};

export const deletePostThunk = (post) => {
  return function (dispatch) {
    return deletePostRequest(post)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при deletePostRequest');
        }

        dispatch(postsActions.postsDeletePost(post));
      })
      .catch((error) => dispatch(postsActions.postsFetchingFailure(error.message)));
  };
};

export const updatePostThunk = (post) => {
  return function (dispatch) {
    return updatePostRequest(post)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Произошла ошибка при updatePostRequest');
        }

        dispatch(postsActions.postsUpdatePost(post));
      })
      .catch((error) => dispatch(postsActions.postsFetchingFailure(error.message)));
  };
};
