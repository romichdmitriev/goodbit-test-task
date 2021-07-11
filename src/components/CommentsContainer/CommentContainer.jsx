import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { uid } from 'uid';

import Comment from './Comment/Comment';

import { addCommentThunk } from '../../redux/thunk/comments/commentsThunkCreators';
import CommentConstructor from '../../Factory/Comment';

import styles from './CommentContainer.module.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

import sprite from '../../assets/icons/sprite.svg';
import { COMMENTS, EMPTY_COMMENTS } from '../../content/content';

const CommentContainer = ({ postId }) => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.items.filter((item) => item.postId === postId));

  const addComment = () => {
    if (!inputText) {
      return;
    }

    dispatch(
      addCommentThunk(
        new CommentConstructor({
          id: 20,
          postId: postId,
          text: inputText,
        })
      )
    );

    setInputText('');
  };

  const inputHandler = ({ target }) => {
    setInputText(target.value);
  };

  return (
    <>
      <h2 className={styles.title}>{COMMENTS}</h2>

      <PerfectScrollbar>
        <div className={styles.commentsWrapper}>
          {comments.length
            ? comments.map((comment) => (
                <Comment key={uid(6) + comment.id} text={comment.text} id={comment.id} postId={postId} />
              ))
            : EMPTY_COMMENTS}
        </div>
      </PerfectScrollbar>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={inputText}
          onChange={inputHandler}
          placeholder="Напишите здесь что-нибудь ..."
          type="text"
        />

        <div className={styles.iconCircle} onClick={addComment}>
          <svg className={styles.icon}>
            <use xlinkHref={`${sprite}#send`} />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CommentContainer;
