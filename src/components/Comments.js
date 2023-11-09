import React, { useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
   
    setComments(prevComments => [...prevComments, newComment]);

    
    setNewComment('');
  };

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <textarea
          placeholder="Add your comment..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
