import { useState, useEffect } from 'react';
import './App.css';
import PostList from './Components/PostList.jsx';
import axios from 'axios';
import PostForm from './Components/PostForm.jsx';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className='body'>
      <h1>Post Management App</h1>
      <PostForm addPost={addPost} />
      <h1>Recent Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;

