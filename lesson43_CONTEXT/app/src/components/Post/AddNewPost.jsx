import { useContext, useState } from "react";
import { MyContext } from "../../MyContext";

const AddNewPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addPost } = useContext(MyContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            body,
        };

        addPost(newPost);

        //e.target.reset();
        setBody('');
        setTitle('');
    };

    return (
        <div>
            <h3>Add Post</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Body..."
                    value={body} 
                    onChange={(e) => setBody(e.target.value)} 
                ></textarea>
                <button>Add post</button>
            </form>
        </div>
    );
};

export default AddNewPost;