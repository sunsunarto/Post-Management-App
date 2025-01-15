import React from "react";

function PostItem({ post }) {
    return (
        <div className="postContent">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default PostItem;
