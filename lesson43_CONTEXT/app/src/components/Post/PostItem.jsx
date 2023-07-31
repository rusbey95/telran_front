import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../MyContext';

function PostItem({post}) {
	const {deletePost} = useContext(MyContext);
	const navigate = useNavigate();

    return (
		<div>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<button onClick={() => deletePost(post.id)}>Delete</button>
			<button onClick={() => navigate(`/post/${post.id}`)}>View more</button>
		</div>
    )
}

export default PostItem;