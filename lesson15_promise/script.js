// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

// let posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json));

// var xhr = new XMLHttpRequest();
// console.log('UNSENT', xhr.readyState); // readyState будет равно 0


// xhr.open('GET', '/api', true);
// console.log('OPENED', xhr.readyState); // readyState будет равно 1


// xhr.onprogress = function () {
//    console.log('LOADING', xhr.readyState); // readyState будет равно 3
// };


// xhr.onload = function () {
//    console.log('DONE', xhr.readyState); // readyState будет равно 4
// };


// xhr.send(null);


// const requestURL = 'https://jsonplaceholder.typicode.com/users';
// let xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL, true);
// xhr.onload = function () {
//     let users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send();

// const requestURL = 'https://jsonplaceholder.typicode.com/users';
// let data = {};
// data.firstname = "Ruslan";
// data.lastname = "Bei";
// let json = JSON.stringify(data);

// let xhr = new XMLHttpRequest();
// xhr.open("POST", requestURL, true);

// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

// xhr.onload = function () {
//     let _data = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "201") {
//         console.log("Сервер вернул нам: ", _data);
//     } else {
//         console.error("error");
//     }
// }
// xhr.send(json);


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Here i'm call resolve");
//     }, 5000);
// });

// promise1.then((info) => {
//     console.log('resolve', info);
// });

// console.log(promise1);

const requestURL = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })
}


sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err)) 