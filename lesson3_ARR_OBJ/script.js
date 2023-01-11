// const person = {
//     name: 'Joe',
// }

// person.age = 46;
// person['last name'] = 'test';
// person.name = 'Alex';

// // delete person.age;

// console.log(person);


// 'cat', 3 => {car0: 0, cat1: 1, cat2: 2}
// function makeObj(string, num) {
//     let result = {};
//     for (let i = 0; i < num; i++) {
//         result[string + i] = i;
//     }
//     return result;
// }
// console.log(makeObj('cat', 3));


// foo(3) => {0: 0, 1: 1, 2: 2}
// function foo(num) {
//     let result = {};
//     for (let i = 0; i <= num; i++) {
//         result[i] = i;
//     }
//     return result;
// }
// console.log(foo(2));


// 1. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.
//    Пример: foo(1,6) => [1,2,3,4,5,6]
// function createArr(num_less, num_more) {
//     let arr = [];
//     for (let i = num_less; i <= num_more; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(createArr(4, 6));

// 2. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.
//    Пример: foo(1,6) => [6,5,4,3,2,1]
// function createArr2(start, end) {
//     let arr = [];
//     if (end > start) {
//         for (let i = end; i >= start; i--){
//             arr.push(i);
//         }
//     } else {
//         for (let i = start; i >= end; i--){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(createArr2(6, 1));

// 3. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// const list = [5,6,8,9,2];
// let sum = 0;
// for (i = 0; i <= list.length - 1; i++) {
//     sum += list[i];
// }
// console.log(sum);

// 4. В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// const list = [5,6,8,9,2,-6,-5,-8,-2]
// let sum = 0;
// for (i = 0; i <= list.length - 1; i++) {
//     if(list[i] > 0) {
//         sum += list[i];
//     }
// }
// console.log(sum);

// 5. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [1,2,3,4,5,6,8,10];
// let sumEven = 0;
// let sumOdd = 0;
// let result = 0;
// for (i = 0; i <= list.length - 1; i++) {
//     if (list[i] % 2 == 0) {
//         sumEven += list[i];
//     } else {
//         sumOdd += list[i];
//     }
// }
// console.log(sumEven - sumOdd);

// 6.Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает максимальное число из массива.

// function getMaxArrayNumber(someArr) {
//     let arr2 = someArr[0];
//     for (let i = 1; i <= someArr.length - 1; i++) {
//         if (arr2 < arr[i]) {
//             arr2 = arr[i]
//         }
//     }
//     return arr2;
// }
// function getMaxArrayNumber(someArr) {
//     let max = someArr[0];
//     for (let i = 1; i <= someArr.length; i++) {
//         if (someArr[i] > max) {
//             max = someArr[i]
//         }
//     }
//     return max;
// }
// console.log(getMaxArrayNumber([1, 2, 3, 6, 123, 123123]))

// 7. Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg(среднее значение) с соответствующими значениями по массиву.
// function getMinMaxAvgNumber(array) {
//     let max = array[0];
//     let sum = 0;
//     for (let i = 0; i <= array.length-1; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }

//     let min = array[0];
//     for (let i = 1; i <= array.length-1; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }

//     for ( i = 1; i <= array.length - 1; i++) {
//         sum += array[i];
//     }
//     let avg = sum / array.length;
    
//     const resultObj = [
//         {
//             min: min,
//             max: max,
//             avg: avg,
//         }
//     ];

//     return resultObj;

// }

// let arr = [1, 2, 3, 6, 123, 123123];
// function getMinNumber(array) {
//     let min = array[0];
//     for (let i = 1; i <= array.length-1; i++) {
//         if (array[i] < min) min = array[i];
//     }

//     return min;
// }
// function getMaxNumber(array) {
//     let max = array[0];
//     for (let i = 0; i <= array.length-1; i++) {
//         if (array[i] > max) max = array[i];
//     }

//     return max;
// }

// function getAvgNumber(array) {
//     let sum = 0;
//     for ( i = 1; i <= array.length - 1; i++) {
//         sum += array[i];
//     }
//     let avg = sum / array.length;
    
//     return avg;
// }
// function getNumbers(min, max, avg) {
//     const resultObj = [
//         {
//             min,
//             max,
//             avg,
//         }
//     ];

//     return resultObj;
// }

// console.log(getNumbers(getMinNumber(arr), getMaxNumber(arr) ,getAvgNumber(arr)))
