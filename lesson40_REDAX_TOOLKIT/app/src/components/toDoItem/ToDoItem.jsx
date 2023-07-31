import React from 'react';
import './ToDoItem.css';

import { useDispatch } from 'react-redux';
import { remove, changeStatus } from '../../store/slices/TodoSlice';

function ToDoItem({ id, title, done }) {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <h4 className={done ? 'task__done' : ''}>{title}</h4>
            <input type="checkbox" checked={done} onChange={() => dispatch(changeStatus(id))} />
            <button onClick={() => dispatch(remove(id))}>Remove</button>
        </div>
    );
}

export default ToDoItem