// const age = prompt("How old are you?");
// console.log(+age * 365);

// const userNumber = prompt('Please write number');
// console.log(Math.pow(+userNumber, 3));

// const num = prompt('Please write a number...');
// if (+num === 0) {
//     console.log('равно нулю')
// } else if (+num % 2 === 0) {
//     console.log('четное');
// } else {
//     console.log('это число не четное')
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 'test', '123123']
// console.log(arr[arr.length - 1]);

// // arr.pop();
// console.log(arr.push('23', '123'));
// console.log(arr);

// arr.unshift('first');
// console.log(arr);
// arr.shift();
// console.log(arr);

// const arr = [];

const originalArr = [2, 3, 4, 5, 6, 7];
const newArr = [];

// newArr.push(originalArr[0] ** 2);
// newArr.push(originalArr[1] ** 2);
// newArr.push(originalArr[2] ** 2);
// newArr.push(originalArr[3] ** 2);
// newArr.push(originalArr[4] ** 2);
// newArr.push(originalArr[5] ** 2);

// console.log(newArr);

// for (let i = 0; i <= originalArr.length - 1; i++) {
//     newArr.push(originalArr[i] ** 2);
// }

// let i = 0;
// while (i <= originalArr.length - 1) {
//     newArr.push(originalArr[i] ** 2);
//     i++;
// }
// console.log(newArr);

// let i = 0;
// do {
//     newArr.push(originalArr[i] ** 2);
//     i++;
// } while (i <= originalArr.length - 1);
// console.log(newArr);

// const arr = [1, 3, 4, 764, -2, -123, 12];
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }

// const arr = [1, 7, 5, 4, 3, 2];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }

// const array = [15, 8, 4, 2, 4, 7, 12, 35, 45, 58];
// for (let i = 0; i < array.length; i++) {
//     if (i % 3 == 0 && i > 0) {
//         console.log(array[i]);
//     }
// }

// const array = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     console.log(sum = sum + array[i]);
// }

// const array = [5,6,-2,1,-7,5];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         sum = sum + array[i];
//         console.log('i = ' + array[i]);
//     }
// }

// console.log(sum);

const array = [1,5,4,7,2,3,4,5,6,7,4,5,]
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        sumEven += array[i];
        console.log('Even - ' + array[i])
    } else {
        sumOdd += array[i];
        console.log('Odd - ' + array[i])
    }
}

if (sumEven > sumOdd) {
    console.log(sumEven - sumOdd);
} else if (sumEven < sumOdd){
    console.log(sumOdd - sumEven);
} else {
    console.log('они равны');
}