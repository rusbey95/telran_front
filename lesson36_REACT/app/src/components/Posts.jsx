import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Posts() {
    const [posts, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try{
                const respone = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPost(respone.data);
                setLoading(false);
                // throw new Error('Ошибка');
            } catch(e) {
                setError(e.message);
                setLoading(false);
            }
        }
        getData();
    }, []);

    if (loading) {
        return <p>Посты грузятся</p>
    }
    if (error) {
        return <p>Ошибка {error}</p>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.title} {post.id}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    )
}

export default Posts