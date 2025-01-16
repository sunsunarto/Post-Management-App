import React from 'react'
function PostList({ posts }) {
  return (
    <div >
        {posts.map((post, index) => (
            <div className='postContent'  key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}
export default PostList

