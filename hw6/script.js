const body = document.querySelector('body');
// first level
// task 1 - Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

const divFirstTask = document.createElement('div');
const p            = document.createElement('p');
const button       = document.createElement('button');

p.innerText        = 'Lorem ipsum dollar';
button.innerText   = 'Button';

body.appendChild(divFirstTask);
divFirstTask.append(p, button);

p.style.fontSize             = '18px';
button.style.border          = '1px solid #d0d0d0';
button.style.backgroundColor = '#fff';
button.style.fontSize        = '16px';
button.style.padding         = '10px 20px';
button.style.cursor          = 'pointer';

button.onmouseover = () => {
    button.style.backgroundColor = '#ddd';
};
button.onmouseout = () => {
    button.style.backgroundColor = '#fff';
}

button.onclick = () => {
    if (p.style.display === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}

// task 2 - Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
const colors = ['blue', 'red', 'purple', 'green'];

const ul = document.createElement('ul');
body.appendChild(ul);
for (let i = 0; i < colors.length; i++) {
    let li       = document.createElement('li');
    li.innerText = colors[i];
    ul.appendChild(li);

    li.style.fontSize     = '16px';
    li.style.marginBottom = '10px';

    li.onmouseover = () => {
        body.style.backgroundColor = colors[i];
    }
    li.onmouseout = () => {
        body.style.backgroundColor = '#fff'
    }
}

// task 3 - Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.
const myFavoriteFilms = [
    {
        name: 'Taxi',
        description: 'Taxi is a 1998 French action comedy film starring Samy Naceri, Frédéric Diefenthal and Marion Cotillard, written by Luc Besson and directed by Gérard Pirès.',
    },
    {
        name: 'Home alone',
        description: 'Home Alone is a 1990 American Christmas comedy film directed by Chris Columbus and written and produced by John Hughes. The first film in the Home Alone.',
    },
    {
        name: 'Avatar',
        description: 'Avatar is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana',
    },
];

for (film in myFavoriteFilms) {
    let div               = document.createElement('div');
    let title             = document.createElement('h3');
    let description       = document.createElement('p');
    title.innerText       = myFavoriteFilms[film].name;
    description.innerText = myFavoriteFilms[film].description;

    title.onclick = () => {
        div.append(description);
    }

    div.append(title);
    body.append(div);
}

// second level
// task 4 - Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// task 5 - Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку, сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.
const keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

const ulKeyboard = document.createElement('ul');
ulKeyboard.classList.add('keyboard');
for (let i = 0; i < keyboard.length; i++) {
    let liKeyboard = document.createElement('li');
    liKeyboard.innerText = keyboard[i];
    if (liKeyboard.innerText === 'a') {
        liKeyboard.style.marginLeft = '12px';
    }

    ulKeyboard.append(liKeyboard);
    body.append(ulKeyboard);

    window.addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key === keyboard[i]) {
            liKeyboard.classList.add('active');
        } else {
            liKeyboard.classList.remove('active');
        }
    });
}


