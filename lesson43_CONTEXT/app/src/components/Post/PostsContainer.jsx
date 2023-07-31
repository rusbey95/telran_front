import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import PostItem from './PostItem';

function PostsContainer() {
    const { posts, deletePost } = useContext(MyContext);

    return (
        <div>
            <h2>All posts</h2>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} deletePost={deletePost} />
            ))}
        </div>
    )
}

export default PostsContainer;