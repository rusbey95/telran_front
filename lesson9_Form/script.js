// Form 1
const form       = document.querySelector('.form-add-product');
const button     = document.querySelector('button');
const inputTitle = document.querySelector('#product-title');
const inputPrice = document.querySelector('#product-price');

// Section product
const productsSection = document.querySelector('.product-list');
const h2              = document.createElement('h2');
h2.innerText          = 'No products';
productsSection.append(h2);

// Form 2
const formSearch  = document.querySelector('.form-search-product');
const searchInput = document.querySelector('#search');

// Sort button
const sortBtn        = document.querySelector('#sortPrice');
const sortListSelect = document.querySelector('#sort-list');

let products = [];

form.onsubmit = (e) => {
    e.preventDefault();
    if (!products.length) {
        productsSection.removeChild(h2);
    }

    products.push({
        title: inputTitle.value, 
        price: inputPrice.value
    })

    newProducts();

    inputTitle.value = '', 
    inputPrice.value = ''
}

function createNode(title, price, index) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    let p  = document.createElement('p');

    let redBtn = closeButton();
    li.append(redBtn);
    redBtn.onclick = () => {
        deleteElement(index);
    };

    li.onmouseover = () => {
        redBtn.style.opacity = '1';
    }
    li.onmouseleave = () => {
        redBtn.style.opacity = '0';
    }

    h3.innerText = title;
    p.innerText  = price;
    li.classList.add('products-item');

    li.append(h3, p);
    productsSection.append(li);
}

function newProducts(inputVal) {
    productsSection.innerHTML = '';
    
    products.forEach((elem, i) => {
        if (elem.title === inputVal) {
            console.log('yes')
            productsSection.innerHTML = '';
            createNode(elem.title, elem.price, i);
        } else {
            console.log('no')
            createNode(elem.title, elem.price, i);
        }
    });
}

function closeButton() {
    let btn = document.createElement('button');
    btn.classList.add('close');
    btn.style.opacity = '0';
    return btn;
}

function deleteElement(index) {
    let newProductsArr = [];
    
    //slice
    for (let i = 0; i < products.length; i++) {
        if (index !== i) {
            newProductsArr.push(products[i]);
        }
    }
    products = newProductsArr;
    newProducts();

    if (!products.length) {
        productsSection.append(h2);
    }
}

// Form 2
formSearch.onsubmit = (e) => {
    e.preventDefault();
    newProducts(searchInput.value);
}

// Sort
sortBtn.onclick = () => {
    newProducts();
    if (sortListSelect.value === 'price-bottom') {
        console.log(sortListSelect.value);
        products.sort((a, b) => a.price - b.price);
    } else if (sortListSelect.value === 'price-top') {
        console.log(sortListSelect.value);
        products.sort((a, b) => b.price - a.price );
    } else {
        products;
    }

    console.log(sortListSelect.value);
    // sortListSelect.forEach(elem => {
    //     console.log(elem);
    // });
}
