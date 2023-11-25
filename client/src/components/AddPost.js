import React, { useState } from 'react';

const AddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title && content) {
      onAddPost({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
