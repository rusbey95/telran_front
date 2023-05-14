import React from 'react'

function Todo() {
    const title = 'Title text';
    const description = 'Lorem ipsum';
    const result = true;

    return (
        <div style={{
                color: result ? '#ddd' : '#000',
                textDecoration: result ? 'line-through' : 'none',
            }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    )
}

export default Todo