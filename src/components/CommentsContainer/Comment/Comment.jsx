import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CommentConstructor from '../../../Factory/Comment';
import { deleteCommentThunk, updateCommentThunk } from '../../../redux/thunk/comments/commentsThunkCreators';

import styles from './Comment.module.scss';

import sprite from '../../../assets/icons/sprite.svg';

const Comment = ({ text, postId, id }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState(text);
  const [inputDisabled, setInputDisabled] = useState(false);

  const textareaHander = ({ target }) => {
    setCommentText(target.value);
  };

  const deleteComment = (commentId) => {
    dispatch(deleteCommentThunk(commentId));
  };

  const updateComment = () => {
    if (!commentText) {
      return;
    }

    // Если коммент не редактировался, не отправлять запрос на обновление
    if (text === commentText) {
      editСomment();
      return;
    }

    dispatch(
      updateCommentThunk(
        new CommentConstructor({
          id: id,
          postId: postId,
          text: commentText,
        })
      )
    );

    editСomment();
  };

  const editСomment = () => {
    setInputDisabled(!inputDisabled);
  };

  return (
    <div className={styles.wrapper}>
      {!inputDisabled
        ?
        <div className={styles.text} onInput={textareaHander}>
          {commentText}
        </div>
        :
        <textarea
          className={styles.textInput}
          value={commentText}
          onChange={textareaHander}
          placeholder="Напишите что-нибудь здесь ..."
        ></textarea>
      }

      {!inputDisabled
        ?
        <svg className={styles.icon} onClick={editСomment}>
          <use xlinkHref={`${sprite}#edit-post`} />
        </svg>
        :
        <svg className={styles.icon} onClick={updateComment}>
          <use xlinkHref={`${sprite}#save-post`} />
        </svg>
      }

      <svg className={styles.icon} onClick={() => deleteComment(id)}>
        <use xlinkHref={`${sprite}#delete`} />
      </svg>
    </div>
  );
};

export default Comment;
