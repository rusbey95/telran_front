// const heading = document.querySelector('.test-box');
// console.log(heading);

// console.log(document);
// console.dir(document);

// const last_li = document.querySelector('li:last-child');
// console.log(last_li);

// const allLi = document.querySelectorAll('li');
// console.log(allLi);

// const h3 = document.querySelector('h3');

// h3.innerHTML = '<i>New title</i>';
// h3.innerText = '<i>New title 2</i>';
// h3.textContent = '<i>New title 3</i>';

// const secondParagraph = document.querySelector('p:nth-child(2)');
// secondParagraph.innerHTML = '<b>Hello</b>'
// console.log(secondParagraph);

const firstFiveImg = document.querySelectorAll('.pictures img');
// for (let i = 0; i < firstFiveImg.length; i++) {
//     if (i <= 4) {
//         firstFiveImg[i].setAttribute('src', 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
//     }
// }
for (let i = 0; i < firstFiveImg.length; i++) {
    if (firstFiveImg[i].getAttribute('alt') === '1') {
        firstFiveImg[i].setAttribute('src', 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
    }
}

// console.log(firstFiveImg.length);

// Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. Печатать все эти адреса в третьем параграфе вместо контента, который сейчас там.

// const links = document.querySelectorAll('a');
// const linksHref = [];
// for (let i = 0; i < links.length; i++) {
//     linksHref.push(links[i].getAttribute('href'));
// }
// console.log(linksHref);

// const therdParagraph = document.querySelector('.box p:nth-child(3)');
// therdParagraph.innerText = linksHref;
// console.log(therdParagraph);

// const rainbow = document.querySelectorAll('.rainbow li');
// for (let li of rainbow) {
//     li.style.background = li.innerHTML;
// }
const root = document.getElementById('root');
// const h2 = document.createElement('h2');

// h2.innerText = 'Heading creared in JS';

// console.log(h2);
// root.appendChild(h2);

//Создать множество параграфов с числами от 1 до 10
// for (let i = 1; i <= 10; i++) {
//     root.appendChild(document.createElement('p')).innerText = i;
// }

// Написать цикл, который проходится по массиву строчек, для каждого создает параграф и добавляет в root

// const string = ['Html', 'Css', 'JavaScript', 'Python', 'C#', 'Ruby', 'Java'];
// for (let key of string) {
//     root.appendChild(document.createElement('p')).innerText = key;
// }

// const ol = document.createElement('ol')
// root.appendChild(ol)

// for (let str of strings) {
//     const li = document.createElement('li')
//     li.innerText = str

//     ol.appendChild(li)
// }