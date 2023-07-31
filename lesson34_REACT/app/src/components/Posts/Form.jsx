import React from 'react'

function Form({addNewPost}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const text = e.target.text.value;

        addNewPost({
            id: Date.now(),
            title,
            text,
        })

        e.target.reset();
    }

    return (
        <form style={{maxWidth: '400px'}} onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" style={{display: 'block', marginBottom: '10px', width: '100%', padding: '10px'}} required/>
            <textarea name="text" placeholder="Text" style={{display: 'block', marginBottom: '10px', width: '100%', padding: '10px'}} required></textarea>
            <button>Add new post</button>
        </form>
    )
}

export default Form;