import React, {useState} from 'react'
import Form from './Form';

function AddPosts() {
    const [posts, setPosts] = useState([]);

    function addNewPost(newPost) {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    }
    return (
        <div>
            <h1>Ваши посты!</h1>
            <Form addNewPost={addNewPost} />

            <h3>Список ваших постов:</h3>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AddPosts