//task 1 - data type 
// 1.1 - что выведет функция alert 
let name = "Ilya";

alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya


//task 2 - while-for
// 2.1 - Какое последнее значение выведет этот код? Почему?
let test = 3;
while (test) {
  alert( test-- );
}
//Решение: последнее значение будет 1, так как цикл дойдет до 0 и последним выведет 1

// 2.2 - Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i );
while (i++ < 5) alert( i );
// Решение: первый цикл выведет на посдедней итерации 4, а второй цикл выведет 5 так как у первого префиксная форма и из-за этого цикл дойдет до 4 и остановится, а во втором случае цыкл дойдет до 4 и пойдет дальше, так как увеличится еще на 1 и только после этого остановится

// 2.3 - Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) console.log( i );
for (let i = 0; i < 5; ++i) console.log( i );
// Решение: первый и второй цикл выведет на посдедней итерации 4 из-за того, что цикл for работает не зависимо от префиксной или постфиксной формы. 

// 2.4 - При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 2.5 - Замените for на while
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

// let i = 0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++;
}

// 2.6 - Повторять цикл, пока ввод неверен
while (true) {
    let userNumber = prompt('Введите число, большее 100');
    if (+userNumber > 100 || userNumber == null ) break;
}

// 2.7 - Вывести простые числа 2,3,5,7.
let n = 10;
skipDot:
for (let i = 2; i <= n; i++) {
    for (let x = 2; x < i; x++) {
        if (i % x == 0) continue skipDot;
    }
    console.log(i);
}


//task 3 - Array
// 3.1 - Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); 
//Решение - 4 эллемента, так как массив копируется по ссылке

// 3.2 - Операции с массивами
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let centerStyles = Math.floor(styles.length / 2);
styles[centerStyles] = 'Классика';
console.log(styles.shift(0));
styles.unshift('Рэп', 'Регги');
console.log(styles);

// 3.3 - Вызов в контексте массива
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
});

// arr[2]();
//Решение - добавит функцию в конце массива, так как push добаляет эллемент в конце массива, а в массиве может лежать любой тип данных.

// 3.4 - Сумма введённых чисел
function sumInput() {
    let userNumbers = [];
    let userNumbersSum = 0;

    while (true) {
        let userEnter = prompt('Введите число');
        
        if (userEnter == null || userEnter == '' || isNaN(userEnter)) break;
        
        userNumbers.push(+userEnter);
    }

    for (let i = 0; i < userNumbers.length; i++) {
        userNumbersSum = userNumbers[i] + userNumbersSum;
    }
    return userNumbersSum;
}
console.log(sumInput());


// task 4 - comparison
// 4.1 - Операторы сравнения
console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //false - 
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false

// task 5 - logical-operators
// 5.1 - Что выведет alert (ИЛИ)?
alert( null || 2 || undefined );
// Решение - выведет 2, так как это первое положительное значение

// 5.2 - Что выведет alert (ИЛИ)? 
alert( alert(1) || 2 || alert(3) );
// Решение - так как alert возвращает undefined, то сперва он зайтед в alert(1) - вернет undefined и после пойдет дальше к 2 и в итоге выведет 2
// Итого сперва выведет 1 а потом 2 

// 5.3 - Что выведет alert (И)?
alert( 1 && null && 2 );
// Решение - выведет null так как null - ложный

// 5.4 - Что выведет alert (И)?
alert( alert(1) && alert(2) );
//Решение - выведет 1 и undefined а дальше остановится так как alert вернет undefined

// 5.5 - Что выведет этот код?
alert( null || 2 && 3 || 4 );
//Решение - выведет 3 так как приаритет у логического И выше чем у или

// 5.6 - Проверка значения из диапазона
let age = +prompt('введите число от 14 до 90');
if (age >= 14 && age <= 90) {
    console.log('age в диапазоне между 14 и 90');
} else {
    console.log('age не входит в диапазон между 14 и 90');
}

// 5.7 - Проверка значения вне диапазона
// let age = +prompt('введите число от 14 до 90');
// 1
if (!(age >= 14 && age <= 90)) {
    console.log('age не входит в диапазон между 14 и 90');
} else {
    console.log('age в диапазоне между 14 и 90');
}
// // 2
if (age < 14 && age > 90) {
    console.log('age не входит в диапазон между 14 и 90');
} else {
    console.log('age в диапазоне между 14 и 90');
}

// 5.8 - Вопрос о "if"
if (-1 || 0) alert( 'first' ); // выведет first
if (-1 && 0) alert( 'second' ); // даже не зайдет в if
if (null || -1 && 1) alert( 'third' ); // выведет third так как && выше приаритет

// 5.9 - Проверка логина
let userLogin = prompt("Please enter your 'Login'", '');

if (userLogin === 'Админ') {
    let userPassword = prompt('Пароль?', '');
    if (userPassword === 'Я главный') {
        alert('Здравствуйте!');
    } else if (userPassword === '' || userPassword === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userLogin === '' || userLogin === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}


// task 6 - ifelse
// 6.1 - if (строка с нулём)
if ("0") {
    alert( 'Привет' );
}
// Решение - выведется 'Привет';

// 6.2 - Название JavaScript
let jsName = prompt('Please write "Official" Javascript name');
if (jsName === 'ECMAScript') {
    alert("it's true");
} else {
    alert("You don't know? ECMAScript");
}

// 6.3 - Покажите знак числа
let someNumber = +prompt('please write some number');
if (someNumber > 0) {
    alert(1);
} else if (someNumber < 0) {
    alert(-1);
} else {
    alert(0);
}

// 6.5 - Перепишите 'if' в '?'
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
result = a + b < 4 ? 'Мало' : 'Много';

// 6.6 - Перепишите 'if..else' в '?'
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
message = (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
        '';
