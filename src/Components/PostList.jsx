import React from 'react'
import PostItem from './PostItem.jsx'

function PostList({ post }) {
  return (
    <div className='postItem'>
        {post.map((post) => (
            <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}
export default PostList

