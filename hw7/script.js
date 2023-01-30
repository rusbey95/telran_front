const body       = document.querySelector('body');
const products   = document.querySelector('.products');
const form       = document.querySelector('form');
const button     = document.querySelector('button');
const inputTitle = document.querySelector('#product-title');
const inputPrice = document.querySelector('#product-price');
const productSumButton = document.querySelector('.show-products-sum');

let ul     = document.createElement('ul');
let sumBox = document.createElement('div');
ul.classList.add('products-list');

const productArr = [];

form.onsubmit = (e) => {
    e.preventDefault();

    productArr.push({
        title: inputTitle.value, 
        price: inputPrice.value
    });

    newProducts();
    
    inputTitle.value = '', 
    inputPrice.value = ''
}

function createNode(title, price) {
    let h3  = document.createElement('h3');
    let p   = document.createElement('p');
    let li  = document.createElement('li');
    li.classList.add('products-item');

    h3.innerText = title;
    p.innerText  = price;

    li.append(h3, p);
    ul.append(li);
    products.append(ul);
}

function newProducts() {
    ul.innerHTML = '';
    for (let i = 0; i < productArr.length; i++) {
        createNode(productArr[i].title, productArr[i].price)
    }
}

// task 1 - К сегодняшней форме добавьте кнопку. При клике на кнопку с помощью alert выводите итоговую сумму всех товаров.
function showProductSum() {
    let productSum = 0;

    for (let i = 0; i < productArr.length; i++) {
        productSum += +productArr[i].price;
    }

    sumBox.innerText = productSum;
    products.append(sumBox);
}

productSumButton.addEventListener('click', function() {
    sumBox.innerHTML = '';
    showProductSum();
});

// task 2 -  Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться(вместо букв звезодчки, либо точки), а при повторном нажатии должен появиться обратно.
const inputPassword = document.querySelector('#user-password');
const buttonShowPassword = document.querySelector('.show-password');
buttonShowPassword.addEventListener('click', function() {
    console.log(inputPassword.length);
});