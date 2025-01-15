import { useState,useEffect } from 'react'
import './App.css'
import PostList from './Components/PostList.jsx'
import axios from 'axios'
import PostForm from './Components/PostForm.jsx'
function App() {
  const [post,setPost]= useState([])
    useEffect (() => {
      const fetchPost = async () => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(response.data)
      }catch(error){
        console.error(error)
      }
      }  
      fetchPost()
    },[])
    const addPost = (newPost) => {
      setPost([...post, newPost]);
  };

  return (
      <div className='body'>
          <h1>Post Management App</h1>
          <PostForm addPost={addPost} />
          <h1>Recent Post</h1>
          <PostList post={post} />
      </div>
  );
};


export default App
