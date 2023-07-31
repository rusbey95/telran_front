import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, postAction } from '../actions/postAction';
import { useEffect } from 'react';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postRed.posts);
    const error = useSelector((state) => state.postRed.error);

    useEffect(() => {
        dispatch(postAction());
    }, []);

    const handleClick = (postId) => {
        dispatch(deletePost(postId));
    };

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => handleClick(post.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts