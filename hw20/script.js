// 1 Создайте класс Todo со свойствами title, description и completed.

// 2 Добавьте в класс методы, позволяющие пользователю отмечать тодо как завершенное, изменять заголовок или описание тодо, а также удалять тодо.

// 3 Создайте класс TodoList с пустым массивом свойств todos.

// 4 Добавьте в класс TodoList методы, позволяющие пользователю добавить новый todo, получить все todo, получить только завершенные todo и получить только незавершенные todo.

// 5 Используйте класс Todo для создания новых todos и добавления их в свойство массива todos класса TodoList.

// 6 Используйте методы класса TodoList для работы со списком todos.
// Todo пользователь должен добавить с помощью input, и все добавленные todo отобразите на странице.При обновлении страницы все todo не должны исчезнуть.

// 7. Задача: добавьте способ удаления todo.

const todoList = document.querySelector('.todo-list');

class TodoButtons {
    constructor(add, completed, edited, all) {
        this.buttons = document.querySelectorAll('.todo-buttons .button');
        this.all = all;
        this.add = add;
        this.edited = edited;
        this.completed = completed;
    }
    changeButtonsClass() {
        this.buttons.forEach(element => {
            if (element.className === 'button button-add-todo') {
                this.add = element;
            } else if (element.className === 'button button-completed-todo') {
                this.completed = element;
            } else if (element.className === 'button button-edited-todo') {
                this.edited = element;
            } else {
                this.all = element;
            }
        });
        this.add.onc
    }

}

const todoBtns = new TodoButtons();
todoBtns.changeButtonsClass();

class Todo {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    done() {

    }
    change() {

    }
    delete() {

    }
}
class TodoList {
    constructor(todos) {
        this.todos = []
    }
}