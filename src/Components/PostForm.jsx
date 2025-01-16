import React,{useState} from "react";
import axios from "axios";
function PostForm ({addPost}){
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
          axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body
          })
          .then((res) => {
         console.log(res)
         const newPost = {title, body}
         addPost(newPost)
         setTitle('')
         setBody('')
          })
          .catch((err) => {
           console.log(err)
         })
        } catch (error) {
          console.log(error)
        }
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