import React from 'react';
import './Post.css';

const Post = ({ id, title, content, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default Post;
