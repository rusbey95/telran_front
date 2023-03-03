const form = document.querySelector('#product-form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const list = document.querySelector('#product-list');


//массив с продуктами
const products = [];

//функция для добваления продукта в массив
function newProduct(name, price) {
    products.push({name: name, price: price});
}

//функция для обновления пунктов в списке
function updateList() {
    list.innerHtml = '';
    products.forEach((product) => {
        let item = document.createElement('li');
        item.innerHTML = `${product.name} - ${product.price}`;
        list.append(item);
    });
}

function writeLocalStorage(key, value) {
    let stringObj = JSON.stringify(value);
    localStorage.setItem(key, stringObj);
}

//обработчик отправки формы
form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = parseFloat(priceInput.value);
    newProduct(nameValue, priceValue);
    nameInput.value = '';
    priceInput.value = '';
    updateList();
    writeLocalStorage('obj', products);
};