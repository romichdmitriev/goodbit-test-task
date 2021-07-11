import React, { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'uid';

import CenteredContentContainer from '../../components/Layout/CenteredContentContainer';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';

import { postsFetchingStart } from '../../redux/actions/posts/postsActions';
import { fetchPostsThunk } from '../../redux/thunk/posts/postsThunkCreators';
import { commentsFetchingStart } from '../../redux/actions/comments/commentsActions';
import { fetchCommentsThunk } from '../../redux/thunk/comments/commentsThunkCreators';
import { addPostThunk } from '../../redux/thunk/posts/postsThunkCreators';
import PostConstructor from '../../Factory/Post';

import sprite from '../../assets/icons/sprite.svg';

import { POSTS } from '../../content/content';

import styles from './PostFeed.module.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const PostFeedPage = () => {
  const isLoading = useSelector((state) => state.comments.isFetching || state.posts.isFetching);
  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(postsFetchingStart());
      await dispatch(fetchPostsThunk());
      await dispatch(commentsFetchingStart());
      await dispatch(fetchCommentsThunk());
    };
    fetchData();
  }, [dispatch]);

  const addPost = () => {
    dispatch(
      addPostThunk(
        new PostConstructor({
          id: 15,
          title: '',
          body: '',
        })
      )
    );
  };

  return (
    <CenteredContentContainer>
      <div className={styles.postsContainer}>
        {isLoading
          ?
          <Loader />
          :
          <>
            <h1 className={styles.pageTitle}>{POSTS}</h1>
            <PerfectScrollbar>
              <div className={styles.postFeed}>
                {!posts.length ? (
                  <p className={styles.postFeedStatus}>Скорее напишите пост ...</p>
                ) : (
                  posts.map((post) => (
                    <Post key={uid(6) + post.id} postId={post.id} text={post.body} title={post.title} />
                  ))
                )}

                <div className={styles.addPostCircle} onClick={addPost}>
                  <svg className={styles.addPostIcon}>
                    <use xlinkHref={`${sprite}#add-post`} />
                  </svg>
                </div>
              </div>
            </PerfectScrollbar>
          </>
        }
      </div>
    </CenteredContentContainer>
  );
};

export default PostFeedPage;
