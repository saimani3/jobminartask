// PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} id={post._id} title={post.title} content={post.content} onDelete={onDelete} />
      ))}
    </div>
  );
};


export default PostList;
