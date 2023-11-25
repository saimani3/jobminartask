import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts/');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (newPost) => {
    try {
      const response = await fetch('http://localhost:5000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      setPosts([...posts, data]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const deletePost = async (postId) => {
    console.log('Deleting post with id:', postId); // Log the postId
    try {
      await fetch(`http://localhost:5000/api/posts/${postId}`, {
        method: 'DELETE',
      });
      fetchPosts();
      // console.log('Post deleted successfully.'); // Log success message
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="app">
      <h1>React Blog App</h1>
      <AddPost onAddPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default App;
