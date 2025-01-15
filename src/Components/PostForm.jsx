import React,{useState} from "react";

function PostForm ({addPost}){
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addPost(title,body)
        setTitle('')
        setBody('')
    }
    return (
        <div className="inputSubmit">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}
export default PostForm