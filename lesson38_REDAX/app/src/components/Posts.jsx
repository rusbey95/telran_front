import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '../actions/postActions';

function Posts() {
    const posts = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const handleAddPost = (content) => {

    }

    return (
        <div>Posts</div>
    )
}

export default Posts