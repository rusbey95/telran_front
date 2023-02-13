// const num1 = 5;
// const num2 = 7;

// function call(callback) {
//     callback(num1, num2);
// }

// call(function(a, b) {
//     console.log(a + b);
// });

// setTimeout(() => {
    
// }, timeout);

// setTimeout(() => {
//     console.log('Hello world')
// }, 5000);

// const message = document.querySelector('.toggle-box');
// const btn = document.querySelector('.btn');
// btn.onclick = () => {
//     setTimeout(() => {
//         message.style.display = 'block';
//     }, 1000);
// }
//setInterval

// const numbers = [1, 2, 3, 6, 5, 2];
// numbers.forEach((elem, index) => {
//     console.log(elem, index);
// });
//callback's arguments => element, index, array

// const strings = ['first line', 'second line', 'therd line'];
// strings.forEach((string) => {
//     console.log(string);
// });

// const strings = ['first line', 'second line', 'therd line'];
// strings.forEach((str, i) => {
//     console.log(`(${i + 1}) ${str}`)
// });


// const strings = ['1', '2', '3', '4', '5', '6'];
// strings.forEach((str, i) => {
//     if (i % 2 == 0 && i != 0) {
//         console.log(str);
//     }
// });


// map
// [1, 2, 3] => [2, 3, 4];
// const numbers = [1, 2, 3, 4, 5];
// // let newNumbers = numbers.map((number) => number ** 2);
// let newNumbers = numbers.map((number) => {
//     return number ** 2
// });
// console.log(newNumbers);

// const numbers = [1, 2, -5, -6, 7, 2, -56, 1, 2, -9, -8];
// let newNumbers = numbers.map((number) => {
//     if (number < 0) {
//         return -number; 
//     } else {
//         return number;
//     }
// });
// let newNumbers = numbers.map((number) => number < 0 ? -number : number);

// console.log(newNumbers);

// const numbersString = ["5", "4", "3", "2", "6"];
// let numbers = numbersString.map((number) => +number);
// console.log(numbers);


// const users =  [{ name: "John", age: 25 }, { name: "Jane", age: 30 }, {name: "Sophie", age: 15}];
// let usersName = users.map((userName) => userName.name)
// console.log(usersName);

// const numbers = [4, 16, 81, 121];
// let newNums = numbers.map((number) => Math.sqrt(number));
// console.log(newNums);


// const nums = [2, 3, -5, -53, 4, 9];
// let positiveNums = nums.filter((elem) => elem > 0);
// console.log(positiveNums);

// const nums = [2, 3, -5, -53, 4, 94, 8];
// let evenNumbers = nums.filter(elem => elem % 2 == 0);
// console.log(evenNumbers);


const names = [ {name: "Roza", age: 40}, {name: "Lyudmila", age: 60}, {name: "Rasul", age: 30}, {name: "John", age: 25}];

let namesMoreFourWord = names.filter(elem => elem.name.length > 4).map(elem => elem.name);
console.log(namesMoreFourWord);