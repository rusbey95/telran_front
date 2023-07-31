import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newPostAction } from '../actions/newPostAction';

function PostForm() {
    const dispath = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            title,
            body,
        }

        dispath(newPostAction(post));

        setBody('');
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add new Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Add new Description" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
            />
            <button>Add Post</button>
        </form>
    </div>
  )
}

export default PostForm