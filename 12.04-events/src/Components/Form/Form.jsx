import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [nameError, setNameError] = useState('');
    const [commentError, setCommentError] = useState('');
    const [comments, setComments] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name.trim()) {
        setNameError('Please enter your name');
        return;
      } else {
        setNameError('');
      }
  
      if (!comment.trim()) {
        setCommentError('Please enter a comment');
        return;
      } else {
        setCommentError('');
      }
  
      const newComment = {
        name: name,
        comment: comment,
        timestamp: new Date().toLocaleString()
      };
  
      setComments([newComment, ...comments]);
      setName('');
      setComment('');
    };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={nameError ? 'error' : ''}/>
        {nameError && <span className="errorMessage">{nameError}</span>}
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} className={commentError ? 'error' : ''}/>
        {commentError && <span className="errorMessage">{commentError}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
    <div className={styles['container-message']}>
      {comments.map((comment, index) => (
        <div key={index} className={styles['message']}>
          <p>Name: {comment.name}</p>
          <p>Comment: {comment.comment}</p>
          <p>Timestamp: {comment.timestamp}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
