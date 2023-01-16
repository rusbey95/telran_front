
// const last_li = document.querySelector('li:last-child');
// const last_li = document.querySelectorAll('li:last-child');
// getElementsByTagName()
// document.querySelector('.find');
// document.getElementsByTagName('.find');

// const ul = document.querySelector('.test');
// const li = document.createElement('li');
// const li2 = document.createElement('li');

// li.innerHTML = 'Hello World! - 1';
// li2.innerHTML = 'Hello World! - 2';

// ul.append(li, li2);

const body = document.querySelector('body');
// const div  = document.createElement('div');
// const h1   = document.createElement('h1');
// const p    = document.createElement('p');

// h1.innerHTML = 'Bei Ruslan';
// p.innerHTML  = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, architecto voluptates illum asperiores libero consequatur consectetur neque, molestiae totam quod tempora enim. Enim vero pariatur error qui nihil molestiae officia!';

// body.append(div);
// div.append(h1, p);

// ссылка на картинку и статью
// const pictureLink = prompt('Please provide picture link');
// const postLink = prompt('Please provide article link');

// const img = document.createElement('img');
// img.setAttribute('src', pictureLink);

// const a = document.createElement('a');
// a.setAttribute('href', postLink);
// a.setAttribute('target', '_blank');

// const body = document.querySelector('body');
// body.append(a);
// a.append(img);

// const links = [
//     {
//         title: 'Google',
//         link: 'https://google.com/'
//     },
//     {
//         title: 'Yahoo!',
//         link: 'https://yahoo.com/'
//     },
//     {
//         title: 'Baidu',
//         link: 'https://baidu.com/'
//     },
//     {
//         title: 'Yandex(dzen)',
//         link: 'https://dzen.ru/'
//     },
//     {
//         title: 'Bing',
//         link: 'https://bing.com/'
//     }
// ]

// const root = document.createElement('div');
// for (let i = 0; i < links.length; i++) {
//     let link = document.createElement('a');
//     link.setAttribute('href', links[i].link);
//     link.innerText = links[i].title;

//     const br = document.createElement('br');
//     root.append(link, br);
// }

// body.append(root); 

// const cars = [
//     {
//         brand: 'BMW',
//         model: 'X5',
//         price: '20345',
//         count: '12',
//     },
//     {
//         brand: 'Audi',
//         model: 'a3',
//         price: '22345',
//         count: '123',
//     },
//     {
//         brand: 'BMW',
//         model: 'X5',
//         price: '20345',
//         count: '2',
//     },
//     {
//         brand: 'Toyota',
//         model: 'yaris',
//         price: '10000',
//         count: '142',
//     },
//     {
//         brand: 'BMW',
//         model: 'X3',
//         price: '40345',
//         count: '5',
//     },
// ]
// for (let i = 0; i < cars.length; i++) {
//     const ol = document.createElement('ol');

//     const brand = document.createElement('li');
//     brand.innerText = 'brand - ' + cars[i].brand;
    
//     const model = document.createElement('li');
//     model.innerText = 'model - ' + cars[i].model;

//     const price = document.createElement('li');
//     price.innerText = 'price - ' + cars[i].price;

//     const count = document.createElement('li');
//     count.innerText = 'count - ' + cars[i].count;

//     ol.append(brand, model, price, count);
//     body.append(ol); 
// }

const dogs = [
    {
      breed: "beagle",
      age: 4,
    },
    {
      breed: "labrador",
      age: 6,
    },
    {
      breed: "yorkie",
      age: 2,
    },
];
for (let i = 0; i < dogs.length; i++) {
    let string = document.createElement('p');

    let aboutDog = `${dogs[i].breed}'s age is ${dogs[i].age}`;
    string.innerText = aboutDog;
    body.append(string);
}