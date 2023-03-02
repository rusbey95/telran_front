// setItem, getItem, removeItem

// window.localStorage

// setItem
// localStorage.setItem('name', 'Joe');
// localStorage.setItem('age', '23');
// localStorage.setItem('gender', 'male');

// getItem
// const name = localStorage.getItem('name');
// const nameH = document.createElement('h1');
// nameH.innerHTML = name;
// document.body.append(nameH);

//removeItem
// localStorage.removeItem('gender');

// const btn = document.querySelector('.btn');
// btn.onclick = () => {
//     const value = localStorage.getItem('number');
//     if (+value === 1) {
//         localStorage.setItem('number', 0);
//     } else {
//         localStorage.setItem('number', 1);
//     }
// }

// Создать форму с полем ввода(input). При отправке формы значение поля ввода должно сохраниться в local storage.
const form = document.querySelector('.form');
const inputText = document.querySelector('.text');
const sendbutton = document.querySelector('.send-button');
const removeButton = document.querySelector('.remove-button');

form.onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('input-data', e.target.text.value);
}

sendbutton.onclick = () => {
    const getInputData = localStorage.getItem('input-data');
    inputText.value = getInputData;
}

removeButton.onclick = () => {
    // localStorage.removeItem('input-data');

    localStorage.clear();
}

// localStorage.setItem('test', 23123);