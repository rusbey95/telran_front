const body       = document.querySelector('body');
const products   = document.querySelector('.products');
const form       = document.querySelector('form');
const button     = document.querySelector('button');
const inputTitle = document.querySelector('#product-title');
const inputPrice = document.querySelector('#product-price');

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
    let div = document.createElement('div');
    let h3  = document.createElement('h3');
    let p   = document.createElement('p');

    h3.innerText = title;
    p.innerText  = price;
    div.classList.add('product-item');

    div.append(h3, p);
    products.append(div);
}

function newProducts() {
    products.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        createNode(products[i].title, products[i].price)
    }
}