// task 1 - object - learn.javascript
// 1.1 - Привет, object
let user = {}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// 1.2 - Проверка на пустоту
function isEmpty(obj) {
    return Object.keys(obj).length === 0 ? true : false;
}
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

//1.3 - Объекты-константы?
const user = {
    name: "John"
};
// это будет работать?
user.name = "Pete";
// Ответ: да, будер работать так как нельзя менять сам тип переменной user, т.е. менять object на string и так далее

//1.4 - Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    console.log(salaries[key]);
    sum += salaries[key];
}
console.log(sum);

//1.5 - Умножаем все числовые свойства на 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};


// task 2 - function - learn.javascript
// 2.1 - Обязателен ли "else"?
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}
// Ответ:  Не обязательный, можно было сделать и так 
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Родители разрешили?');
}

// 2.2 - Перепишите функцию, используя оператор '?' или '||'
// let age = prompt('How old are you?', '');
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
console.log(+checkAge(age));

// 2.3 - Функция min(a, b)
function getMinNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
console.log(getMinNumber(1, 1));

// 2.4 - Функция pow(x,n)
function pow(x, n) {
    if (n < 1) {
        return 'Степень -1 не поддерживается, используйте натуральное число';
    }
    return x ** n;
}
let x = prompt('pleae enter x', '');
let n = prompt('pleae enter n', '');
console.log(pow(x, n));


// task 3 - skilldesk
// Задача 1:Дан многомерный массив arr:
const arr = {
  'ru':['голубой', 'красный', 'зеленый'],
  'en':['blue', 'red', 'green'],
};
// Выведите с его помощью слово 'голубой'.
for (let key in arr) {
    for (let i = 0; i < arr[key].length; i++) {
        if (arr[key][i] === 'голубой') {
            console.log('голубой');
        }
    }
}

// Задача 2: Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (key in obj) {
    console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
}

// Задача 3: Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
const technologies = {
    js: ['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}
for (let key in technologies) {
    for (let i = 0; i < technologies[key].length; i++) {
        if (technologies[key][i] === 'jQuery') {
            console.log('jQuery');
        }
    }
}

// Задача 4: Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английский (пусть понедельник - это нулевой день).
const daysMultiLang = {
  'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  'en': ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
} 
for (let key in daysMultiLang) {
    for (let i = 0; i < daysMultiLang[key].length; i++) {
        if (key === 'ru') {
            // console.log(daysMultiLang[key][0]);
            break;
        }
        if (key === 'en') {
            // console.log(daysMultiLang[key][2]);
            break;
        }
    }
}

// Задача 5:  Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
const days = {
    0: 'Вс',
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб'
}
const date = new Date();
console.log(days[date.getDay()]);

// Задача 6: Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.
let someObj = {};
function addElementToObj (string, number) {
    for (i = 0; i < number; i++) {
        someObj[string + i] = string + i;
    }
}
addElementToObj('dog', 1);
console.log(someObj);

// Задача 7: Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.
let sumEven = 0;
function getSumEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sumEven += arr[i];
        }
    }
    return sumEven;
}
console.log(getSumEvenNumbers([1,2,3,4,5]));

let sumOdd = 0;
function getSumOddNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sumOdd += arr[i];
        }
    };
    return sumOdd;
}
console.log(getSumOddNumbers([1,2,3,4,5]));

function getLargestNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(getLargestNumber(sumEven, sumOdd));

// Задача 8: Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);
function degreeConversionCelsiusToFahrenheit(degreeCelsius) {
    return degreeCelsius * 1.8 + 32;
}
console.log(degreeConversionCelsiusToFahrenheit(0));