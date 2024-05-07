import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form() {
    const [inputName, setInputName] = useState('');
    const [inputComment, setInputComment] = useState('');
    const [nameError, setNameError] = useState('');
    const [commentError, setCommentError] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!inputName.trim()) {
            setNameError('Please enter your name');
            return;
        } else {
            setNameError('');
        }

        if (!inputComment.trim()) {
            setCommentError('Please enter a comment');
            return;
        } else {
            setCommentError('');
        }

        const newComment = {
            name: inputName,
            comment: inputComment,
            timestamp: new Date().toLocaleString()
        };

        setCommentsList([newComment, ...commentsList]);
        setInputName('');
        setInputComment('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        className={nameError ? styles.error : ''}
                    />
                    {nameError && <span className={styles.errorMessage}>{nameError}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={inputComment}
                        onChange={(e) => setInputComment(e.target.value)}
                        className={commentError ? styles.error : ''}
                    />
                    {commentError && <span className={styles.errorMessage}>{commentError}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className={styles.containerMessage}>
                {commentsList.map((comment, index) => (
                    <div key={index} className={styles.message}>
                        <p>Name: {comment.name}</p>
                        <p>Comment: {comment.comment}</p>
                        <p>Timestamp: {comment.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}