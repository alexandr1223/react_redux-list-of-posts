import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsActionCreators }
  from '../../redux/reducers/posts/action-creators';
import { SelectedPost } from '../../redux/reducers/posts/selectors';
import './NewCommentForm.scss';

export const NewCommentForm: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPostId = useSelector(SelectedPost);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  // eslint-disable-next-line
  const addNewCommentHandler = (e: any) => {
    e.preventDefault();

    if (selectedPostId) {
      const comment = {
        name: nameValue,
        email: emailValue,
        body: bodyValue,
        postId: selectedPostId,
      };

      dispatch(PostsActionCreators.addNewComment(comment));
      setNameValue('');
      setEmailValue('');
      setBodyValue('');
    }
  };

  return (
    <form
      className="NewCommentForm"
      onSubmit={(e) => addNewCommentHandler(e)}
    >
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="NewCommentForm__input"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="NewCommentForm__input"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          value={bodyValue}
          onChange={(e) => setBodyValue(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};
