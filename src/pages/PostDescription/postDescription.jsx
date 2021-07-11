import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import CenteredContentContainer from '../../components/Layout/CenteredContentContainer';
import Post from '../../components/Post/Post';

import styles from './PostDescription.module.scss';

import sprite from '../../assets/icons/sprite.svg';

const PostDescriptionPage = () => {
  const { id: postId } = useParams();
  const post = useSelector((state) => state.posts.items.find((item) => item.id === +postId));

  return (
    <CenteredContentContainer>
      <div className={styles.postWrapper}>
        <Link to="/posts" className={styles.closePostCircle}>
          <svg className={styles.closePostIcon}>
            <use xlinkHref={`${sprite}#delete`} />
          </svg>
        </Link>

        <Post key={post.id} postId={post.id} text={post.body} title={post.title} isOpenedPost={true} />
      </div>
    </CenteredContentContainer>
  );
};

export default PostDescriptionPage;
