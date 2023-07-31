import React from 'react'

function FormTodo({addNewTodo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = e.target.item.value;

        addNewTodo({
            id: Date.now(),
            item,
        })

        e.target.reset();
    }
    return (
        <form style={{maxWidth: '400px'}} onSubmit={handleSubmit}>
            <input type="text" name="item" placeholder="Item" style={{display: 'block', marginBottom: '10px', width: '100%', padding: '10px'}} required/>
            <button>Add</button>
        </form>
    )
}

export default FormTodo;