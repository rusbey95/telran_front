//function expression
//arow function 


//function decloration
// hi();
// function hi() {
//     console.log('Hello');
// }

//function expression

// const sayHi = function () {
//     console.log('Hello 2');
// }
// sayHi();

//arrow function
// const sayHello = () => console.log('Hello 3');
// sayHello();

//return
// const hi1 = () => 'Hello';

// const square = (number) => {
//     let result = number ** 2;
//     return result;
// };
// console.log(square(10));

//callback
// const function1 = function () {
//     let test234 = 'hi';
//     console.log('This is function one');
// };

// const mainFunction = function (callbackFunction) {
//     console.log('Start!');
//     callbackFunction();
// };

// mainFunction(function1);

// Написать функцию, которая в качестве первого аргумента массива, а второго - функция. Вызывает принятую функцию для каждого элемента массива.
// const numArr = [1, 3, 4];
// const workWithArray = function (array, callback) {
//     return callback(array);
// };

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function arrayWithOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(workWithArray(numArr, sumOfArray));
// console.log(workWithArray(numArr, arrayWithOdd));






//event
//event listener - оброботчик события

//click
//onclick, addEventListener
// const btn = document.querySelector('button');
// btn.onclick = function() {
//     alert('Hello World');
// };

// const product = document.querySelectorAll('.product');
// const p = document.querySelectorAll('.product .number');
// const btnIncrement = document.querySelectorAll('.product .increment');
// const btnDecrement = document.querySelectorAll('.product .decrement');

// console.log(btnIncrement);
// let numOfP = +p.textContent;
// btnIncrement.onclick = function() {
//     this.numOfP++;
//     console.log(this);
//     this.p.innerText = numOfP;
// };
// btnDecrement.onclick = function() {
//     this.numOfP--;
//     this.p.innerText = numOfP;
// };



//object event
// const p = document.querySelector('p');
// let pContent = p.textContent;
// addEventListener('keydown', (event) => {
//     // console.log(event.key);
//     // console.log(event);
//     pContent += event.key;
//     p.innerText = pContent;
// });

// 1)На основе этого массива создать и добавить внутри body параграфы
const body = document.querySelector('body');
const p    = document.createElement('p');
const array = [
    "This is some text",
    "You can use event listener",
    "Never give up",
    "Future frontend developers",
];
for (let i = 0; i < array.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = array[i];
    body.append(p);
    p.onclick = () => {
        for (let j = 0; j < array[i].length; j++) {
            p.innerText += '*';
        }
    }
}
//2)При клике на параграф текст должен меняться на звездочки
// const newParagraph = document.querySelectorAll('p');
// console.log(newParagraph);
// newParagraph.onclick = function() {
//     console.log(newParagraph[1]);
// };