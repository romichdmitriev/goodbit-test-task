import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CommentConstructor from '../../../Factory/Comment';
import { deleteCommentThunk, updateCommentThunk } from '../../../redux/thunk/comments/commentsThunkCreators';

import styles from './Comment.module.scss';

import sprite from '../../../assets/icons/sprite.svg';

const Comment = ({ text, postId, id }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState(text);
  const [prevCommentText, setPrevCommentText] = useState(text);
  const [isInputDisabled, setInputDisabled] = useState(false);

  const textareaHandler = ({ target }) => {
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

    setPrevCommentText(commentText);
    editСomment();
  };

  const editСomment = () => {
    setInputDisabled(!isInputDisabled);
  };

  const undoChangesOfComment = () => {
    setCommentText(prevCommentText);
    setInputDisabled(!isInputDisabled);
  }

  return (
    <div className={styles.wrapper}>
      {!isInputDisabled
        ?
        <div className={styles.text}>
          {commentText}
        </div>
        :
        <textarea
          className={styles.textInput}
          value={commentText}
          onChange={textareaHandler}
          placeholder="Напишите что-нибудь здесь ..."
        ></textarea>
      }

      {!isInputDisabled
        ?
        <svg className={styles.icon} onClick={editСomment}>
          <use xlinkHref={`${sprite}#edit-post`} />
        </svg>
        :
        <svg className={styles.icon} onClick={updateComment}>
          <use xlinkHref={`${sprite}#save-post`} />
        </svg>
      }

      {!isInputDisabled
        ?
        <svg className={styles.icon} onClick={() => deleteComment(id)}>
          <use xlinkHref={`${sprite}#delete`} />
        </svg>
        :
        <svg className={styles.icon} onClick={undoChangesOfComment}>
          <use xlinkHref={`${sprite}#undo`} />
        </svg>
      }

    </div>
  );
};

export default Comment;
