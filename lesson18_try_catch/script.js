// try {
//     throw new Error('das ist err');
// } catch (e) {
//     console.log(e);
// }

// try {
//     const elem = document.querySelector('#id');
//     console.log(elem.innerHTML);
// } catch (e) {
//     console.log('такого эллемента нет');
// }

// function createArray(element) {
//     try {
//         return Array.from(element);
//     } catch {
//         return [];
//     }
// }

// const obj = new Set({a: 1, b: 2, c: 3});
// console.log(createArray(obj));


// Создать функцию, которая в качестве аргумента получает селектор и возвращает содержащийся в этом элементе текст. Если такого элемента нет, то функция должна возвращать null.

// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         return p.innerText;
//     } catch {
//         return null;
//     }
// }
// console.log(getText('.text'));
// console.log(getText('div'));

// Создать функцию, save_call. Данная функция должна получать функцию в качестве аргумента и вызывать ее, если ее нет, то выводить сообщение в консоль “Такой функиции нет”

// const num = 1;
// function save_call(func) {
//     try {
//         if (typeof func === "function") {
//             return func()
//         } else {
//             throw new Error("Такой функиции нет")
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }
// save_call(num)
// function log() { 
//     console.log("Second Func");
// }

// Изменяем функцию, созданную в первом задании и дорабатываем ее. При возникновении ошибки функция должна вызвать исключение с текстом “Элемента с селектором <указанный селектор> нет в документе”.
// function getText(selector) {
//     try {
//         let p = document.querySelector(selector);
//         if (p) {
//             return p.innerText;
//         } else {
//             throw new Error (`Элемента с селектором ${selector} нет в документе`)
//         }
//     } catch (e) {
//         return e;
//     }
// }
// console.log(getText('div'));


// Написать функцию, который запрашивает пост с несуществующим id и проверяет код ответа. В случае кода ошибки пользователя вывести сообщение об отсутствии такого поста.
// async function getPost(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         console.log(response);
//         if (response.status !== 200) {
//             throw new Error('Not found this post');
//         } else {
//             const post = await response.json();
//             console.log(post);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
// getPost(100000);

// Создать функцию custom_fetch. Данная функция получает ссылку и callback функцию. Если по указанной ссылке получилось отправить запрос и ответ с кодом 200, то необходимо вызвать переданную функцию и в качестве аргумента передать ответ сервера.
async function custom_fetch(link, callback) {
    try {
        const response = await fetch(link);
        if (response.status !== 200) {
            throw new Error(`Error ${response.status}`);
        } else {
            const obj = await response.json();
            callback(obj);
        }
    } catch (e) {
        console.log(e);
    }
}
custom_fetch("https://jsonplaceholder.typicode.com/posts/102330", (data) => {
    console.log(data);
});