import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                setLoading(false);
                // throw new Error('error:');
            } catch(e) {
                setError(e.message);
                setLoading(false);
            }
        }
        getData();
    }, []);

    if (loading) {
        return <p>данные грузятся...</p>;
    }
    if (error) {
        return <p>Ошибка: {error}</p>;
    }
    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Users