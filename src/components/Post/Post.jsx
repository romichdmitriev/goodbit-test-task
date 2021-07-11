import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CommentContainer from '../CommentsContainer/CommentContainer';

import { updatePostThunk } from '../../redux/thunk/posts/postsThunkCreators';
import { deletePostThunk } from '../../redux/thunk/posts/postsThunkCreators';
import PostConstructor from '../../Factory/Post';

import styles from './Post.module.scss';

import sprite from '../../assets/icons/sprite.svg';

import { READ_MORE } from '../../content/content';

const Post = ({ text, postId, title, isOpenedPost }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(text);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const comments = useSelector((state) => state.comments.items.filter((item) => item.postId === postId));
  const isOpen = isOpenedPost || false;

  const textAreaHandler = ({ target }) => {
    setTextInput(target.value);
  };

  const deletePost = (postId) => {
    dispatch(deletePostThunk(postId));
  };

  const updatePost = () => {
    // Если пост не редактировался, не отправлять запрос на обновление
    if (text === textInput) {
      editPost();
      return;
    }

    dispatch(
      updatePostThunk(
        new PostConstructor({
          id: postId,
          title: title,
          body: textInput,
        })
      )
    );

    editPost();
  };

  const editPost = () => {
    setInputDisabled(!isInputDisabled);
  };

  return (
    <div className={`${styles.post} ${styles.postPos}`}>
      <header className={styles.header}>
        <p className={styles.postTitle}>{title}</p>

        {isInputDisabled
          ?
          <svg className={styles.headerIcon} onClick={editPost}>
            <use xlinkHref={`${sprite}#edit-post`} />
          </svg>
          :
          <svg className={styles.headerIcon} onClick={updatePost}>
            <use xlinkHref={`${sprite}#save-post`} />
          </svg>
        }

        {!isOpen && (
          <svg className={styles.headerIcon} onClick={() => deletePost(postId)}>
            <use xlinkHref={`${sprite}#delete`} />
          </svg>
        )}
      </header>

      <main>
        <div className={styles.content}>
          {isInputDisabled
            ?
            <div className={styles.contentText}>{textInput}</div>
            :
            <textarea
              className={`${styles.contentInput} ${isInputDisabled && styles.contentTextDisabled}`}
              onChange={textAreaHandler}
              placeholder="Напишите что-нибудь здесь ..."
              value={textInput}
            ></textarea>
          }

          {isInputDisabled && !isOpen && (
            <Link to={`/posts/${postId}`} className={styles.openPost}>
              {READ_MORE}
            </Link>
          )}
        </div>

        <div className={styles.comments}>
          {isOpen
            ?
            <CommentContainer postId={postId} />
            :
            <div className={styles.commentsCounter}>
              <svg className={styles.commentsIcon}>
                <use xlinkHref={`${sprite}#comments`} />
              </svg>

              <span>{comments.length}</span>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default Post;
