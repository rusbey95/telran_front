import './ToDoForm.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/slices/TodoSlice';

function ToDoForm() {
    const dispath = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispath(add(e.target.title.value));
        e.target.reset();
    };



    return (
        <form onSubmit={onSubmit} className="form">
            <input type="text" name="title" placeholder="Title..." />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;