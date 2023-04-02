/*  
Task 1

Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.
*/
const id = 1; // id поста
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        console.log('Данные поста:', post);
        const userId = post.userId; // id автора поста

        // получаем данные автора поста
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(author => {
                console.log('Данные автора:', author);
            });
    });