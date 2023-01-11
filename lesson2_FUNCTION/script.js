// const person = {
//     name: 'Joe',
//     lastName: 'Lennon',
//     age: 40,
// }

// const product = {
//     name: 'book',
//     price: 250,
// }

// //bracket notation
// console.log(product['name']);
// console.log(product['price']);

// //dot notation
// console.log(product.name);
// console.log(product.price);

// const products = [
//     {
//         title: 'Nike',
//         price: 300,
//         type: 'shoe',
//     },
//     {
//         title: 'Puma',
//         price: 450,
//         type: 'shoe',
//     },
//     {
//         title: 'Chanel',
//         price: 1200,
//         type: 'bag',
//     },
//     {
//         title: 'BMW',
//         price: 7000,
//         type: 'car',
//     },
// ]

// for (let i = 0; i < products.length; i++) {
//     console.log(`${products[i].title}, price is ${products[i].price}, product type is ${products[i].type}`);
// }

// Пройтись циклом по массиву и найти общую сумму товаров
// let productSum = 0;
// for (let i = 0; i < products.length; i++) {
//     productSum += products[i].price;
// }
// console.log(productSum);

// Пройтись циклом по массиву. Вывести название товаров, которые дороже 1000
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 1000) {
//         console.log(products[i].title);
//     }
// }

// for (let i = 0; i < products.length; i++) {
//     if (products[i].type === 'shoe') console.log(products[i].title);
// }



//ДЕСТРУКТУРИЗАЦИЯ
// const product = {
//     name: 'book',
//     price: 250,
// }

// let { name } = product;
// let { price } = product;

// let {name, price} = product;

// console.log(name);

const products = [
    {
        title: 'Nike',
        price: 300,
        type: 'shoe',
    },
    {
        title: 'Puma',
        price: 450,
        type: 'shoe',
    },
    {
        title: 'Chanel',
        price: 1200,
        type: 'bag',
    },
    {
        title: 'BMW',
        price: 7000,
        type: 'car',
    },
];


// for (let i = 0; i < products.length; i++) {
//     let {title, price} = products[i];
//     console.log(`${title}, ${price - (price * 5) / 100}`);
// }

// Создать пустой массив. Пройтись циклом по массиву products 
// В новый массив добавить те продукты, которые дешевле 1000
// const productsNext = [];
// for (let i = 0; i < products.length; i++) {
//     let {title, price, type} = products[i];
//     if (price < 1000) productsNext.push({title, price, type});
// }
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 1000){
//         productsNext.push(products[i]);
//     }
// }
// console.log(productsNext);

// const test = 10;
// const test2 = [];

// test2.push(20, 123, 34);
// console.log(test2);



//FUNCTION 
// 1) function declaration
// 2) function expression
// 3) arrow function

// function numberPow(a) {
//     console.log(Math.pow(a, 4));
// }
// numberPow(2);

// function isEven(num) {
//     if (num % 2 == 0) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// }
// let someUserNumber = +prompt('Please write some number');
// isEven(someUserNumber);

// function number2(num) {
//     return num ** 4;
// }

// let num3 = number2(3);
// console.log(num3);

// function power(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2, 4));


// function lasrgestNumber (num1, num2) {
//     num1 > num2 ? console.log(num1) : console.log(num2);
// }
// lasrgestNumber(10, 22);

// function getArray(num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// let newArr = power(5);
// let result = 0;
// for (let i = 0; i < newArr.length; i++) {
//     result += newArr[i];
// }

// console.log(newArr);
// console.log(result);

function getArr(string, number) {
    let arr = [];
    for (i = 0; i < number; i++) {
        arr.push(string);
    }
    return arr;
}

console.log(getArr('text', 13));