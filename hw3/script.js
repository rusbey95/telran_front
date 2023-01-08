// task 1 - В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
let word = 'something';
let expandedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
    expandedWord += word[i];
}
console.log(expandedWord);

// task 2 - Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
//Палиндром - слово, одинаково читающееся как слева направо, так и справа налево.
function checkPalindrome(str) {
    let expandedWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        expandedWord += str[i];
    }
    return expandedWord === str ? true : false;
}
console.log(checkPalindrome('заказ'));

// task 3 - Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
let sum = 0;
for (i = 0; i <= 50; i++) {
    if (i % 5 == 0 && i > 0) {
        sum += i;
    }
}
console.log(sum);

// task 4 - Написать цикл, который выводит только названия товаров
const products = [
    {
        name: "Berry Leash",
        img: 'src="images/leashes/berry.jpg" alt="berry leash"',
        price: 14.99,
        onsale: 0.0,
        tags: "Leash",
        description: "A fresh taste on a collar,"
    },
    {
        name: "Tommy Leash",
        img: 'src="images/leashes/berry.jpg" alt="berry leash"',
        price: 5515.99,
        onsale: 0.0,
        tags: "Leash",
        description: "A fresh taste on a collar,"
    },
    {
        name: "Tommy Leash 3",
        img: 'src="images/leashes/berry.jpg" alt="berry leash"',
        price: 415.99,
        onsale: 0.0,
        tags: "Leash",
        description: "A fresh taste on a collar,"
    }
]
for (i = 0; i < products.length; i++) {
    console.log(products[i]['name']);
}

// task 5 - Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
for (i = 0; i < products.length; i++) {
    console.log(products[i]['name'] + ' (' + products[i]['price'] + ')');
}

// task 6 - Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
function getTheMostExpensiveProduct(arr) {
    let maxPrice = 0;
    let product;
    for (i = 1; i < arr.length; i++) {
        if (arr[i]['price'] > maxPrice) {
            maxPrice = arr[i]['price'];
            product = arr[i];
        }
    }

    return product;
}
console.log(getTheMostExpensiveProduct(products));