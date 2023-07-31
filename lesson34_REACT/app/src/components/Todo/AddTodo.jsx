import React, {useState} from 'react'
import FormTodo from './FormTodo'

// постановка задачи
//         - Задача: Создать компонент с формой, который добавляет новое дело в состояние todo
//         разбор задачи
//         - Создаем компонент AddTodo, FormTodo и верстаем там форму
//         - В AddTodo создаем функцию addNewTodo, которая позволяет добавить новое дело в состояние todos и передаем ее в Formtodo
//         - Описываем обработчик формы, который останавливает сетевой запрос через event.preventDefault() и формирует объект с данными из формы
//         - При отправку формы вызываем функцию addNewTodo и передаем туда новый объект с постом. В качестве id используем Date.now() (заглушка).

function AddTodo() {
    const [todos, setTodo] = useState([]);

    function addNewTodo(newTodo) {
        setTodo((prevTodo) => [...prevTodo, newTodo]);
    }
    return (
        <div>
            <h1>Todo</h1>
            <FormTodo addNewTodo={addNewTodo} />

            <h3>Список ваших todo:</h3>
            <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.item}</span>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default AddTodo;