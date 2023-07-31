import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../toDoItem/ToDoItem';

function ToDoList() {
    const list = useSelector((state) => state.todo.list);

    return (
        <div>
            <h2>All your Todo</h2>
            <div>
                {list.map((item) => (
                    <ToDoItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default ToDoList;