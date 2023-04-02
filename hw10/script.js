/*  
Task 1

Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
Пример: [1,2,3] => "1,2,3" 
*/
const numbers = [1,2,3];

// 1 Вариант
let numbersString = '';
numbers.forEach(elem => numbersString += elem + ',' );
console.log(numbersString);

// 2 Вариант
console.log(numbers.join(', '));



/*  
Task 2

Используя метод reduce, посчитайте сколько людей проголосовали.
*/
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function getVotedSum(arr) {
    let result = arr.reduce((a, b) => a + b.voted, 0);
    return result;
}
console.log(getVotedSum(voters));


/*  
Task 3

Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
*/
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
function getProductSum(arr) {
    let sum = arr.reduce((a, b) => a + b.price, 0);
    return sum;
}
console.log(getProductSum(wishlist));



/*  
Task 4

У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.
*/
const clientOrders = [
    { name: 'Petya Ivanov', orders: ['Tesla Model S', 'Fancy hacky Sack', 'Gold fidgit spinner', '4 carat diamond ring'] },
    { name: 'Ivan Ivanov', orders: ['Gold fidgit spinner', '4 carat diamond ring'] },
    { name: 'Evgen Budanov', orders: ['Tesla Model S'] },
    { name: 'Olga Mulatova', orders: ['Fancy hacky Sack', 'Gold fidgit spinner'] },
];
const clientOrdersTotal = clientOrders.map((elem) => {
    const container = {};

    container.name = elem.name;
    container.totalOrders = elem.orders.length;

    return container;
});
console.log(clientOrdersTotal);



/*  
Task 5

Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
*/
const clientInfo = [
    { name: 'Petya Ivanov', age: 12 },
    { name: 'Petya Ivanov 2', age: 22 },
    { name: 'Petya Ivanov 3', age: 32 },
    { name: 'Petya Ivanov 4', age: 56 },
    { name: 'Petya Ivanov 5', age: 42 },
    { name: 'Petya Ivanov 6', age: 5 },
    { name: 'Petya Ivanov 7', age: 2 },
    { name: 'Petya Ivanov 8', age: 1 },
    { name: 'Petya Ivanov 9', age: 1 },
];
let countAdultsClient = 0;
let countYoungClient = 0;
clientInfo.forEach((elem) => {
    elem.age > 18 ? countAdultsClient += 1 : countYoungClient += 1;
});
console.log(countAdultsClient);
console.log(countYoungClient);



/*  
Task 6

Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.
*/
const clientInfo2 = [
    { name: 'Petya Ivanov', age: 12 },
    { name: 'Petya Ivanov 2', age: 22 },
    { name: 'Petya Ivanov 3', age: 32 },
    { name: 'Petya Ivanov 4', age: 56 },
    { name: 'Petya Ivanov 5', age: 42 },
    { name: 'Petya Ivanov 6', age: 5 },
    { name: 'Petya Ivanov 7', age: 2 },
    { name: 'Petya Ivanov 8', age: 1 },
    { name: 'Petya Ivanov 9', age: 1 },
];

const clientOverThirtyYears = clientInfo2.filter(client => client.age > 30).map((client) => {
    return client;
});
console.log(clientOverThirtyYears);