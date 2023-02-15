// sort();
const numbers = [0, 15, 10, 34, 5, 10];
// ASCII code
// 0 10 15 5

// numbers.sort((a, b) => a - b); // по возрастанию
// numbers.sort((a, b) => b - a); // // по убыванию
// console.log(numbers);

// const someArray = [
//     { id: 4, title: "велосипед", price: 45000 },
//     { id: 1, title: "самокат", price: 15000 },
//     { id: 3, title: "сноуборд", price: 20000 },
//     { id: 2, title: "лыжи", price: 22000 },
// ];
// // someArray.sort((a, b) => b.price - a.price);
// // console.log(someArray);
// function getSumTwoSmallestNumbers(arr) {
//     arr.filter(number => number > 0).sort((a, b) => a - b);
//     return arr[0] + arr[1];
// }
// console.log(getSumTwoSmallestNumbers([9, 4, 10, 1, -1, -20]))

// reduce - callback, accumulator
// const nums = [-2, 2, 2, 3, 213, -4];
// function getSumNumberArray(arr) {
//     // let result = arr.reduce((accumulator, current) => accumulator + current, 3);
//     // return result;
// }
// console.log(getSumNumberArray(nums));

// function getPositiveArrayNumber(arr) {
//     let result = arr.reduce((acc, cur) => {
//         if (cur > 0) {
//             return acc + cur;
//         } else {
//             return acc;
//         }
//     }, 0);

//     return result;
// }
// console.log(getPositiveArrayNumber(nums));

// function getSumEvenArrayNumbers(arr) {
//     let result = arr.reduce((acc, cur) => {
//         if (cur % 2 == 0 && cur > 0) {
//             return acc + cur;
//         } else {
//             return acc;
//         }
//     }, 0);
//     return result;
// }
// console.log(getSumEvenArrayNumbers(nums));

// const nums = [-2, 2, 2, 3, 213, -4];
// function getMaxArrayNumber(arr) {
//     let result = arr.reduce((acc, cur) => acc < cur ? cur : acc, 0);
//     return result;
// }
// console.log(getMaxArrayNumber(nums));

// function getMaxArrayNumber(arr) {
//     let result = arr.reduce((acc, cur) => acc < cur ? cur : acc, 0);
//     return result;
// }
// Используя метод reduce найти объект товара с самой высокой ценой.

// const products = [
//     { id: 1, price: 10000 },
//     { id: 2, price: 15000 },
//     { id: 3, price: 1000 },
//     { id: 4, price: 45000 },
//     { id: 5, price: 30000 },
// ];
// function getProductWithHigherPriceNumber(arr) {
//     let result = arr.reduce((acc, cur) => acc.price < cur.price ? cur : acc);
//     return result;
// }
// console.log(getProductWithHigherPriceNumber(products));

const products = [
    { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
];

// products.forEach(product => {
//     product.sum_marks = product.marks.reduce((acc, cur) => acc + cur);
//     delete product.marks;
// });

// Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, max_mark.
// products.forEach(product => {
//     product.max_marks = product.marks.reduce((acc, cur) => acc < cur ? cur : acc);
//     delete product.marks;
// });
// console.log(products);

// Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, avg_mark. Avg_mark содержит среднеарифметическое значение marks.

products.forEach(product => {
    product.avg_marks = product.marks.reduce((acc, cur) => acc + cur) / product.marks.length;
    delete product.marks;
});
console.log(products);