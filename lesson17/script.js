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
function updateList(arr) {
    list.innerHTML = '';
    arr.forEach((product) => {
        let item = document.createElement('li');
        item.innerHTML = `${product.name} - ${product.price}`;
        list.append(item);
    });
}

// записываем в LocalStorage
function writeLocalStorage(key, value) {
    let stringObj = JSON.stringify(value);
    localStorage.setItem(key, stringObj);
}

// получаем из LocalStorage
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('obj'));
}

//обработчик отправки формы
form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = parseFloat(priceInput.value);
    newProduct(nameValue, priceValue);
    nameInput.value = '';
    priceInput.value = '';
    updateList(products);
    writeLocalStorage('obj', products);
    // if (getLocalStorage == null) {
    //     writeLocalStorage('obj', products);
    // } else {

    // }
    console.log(products.length);
};


// Доработать форму, которую делали на занятии:
// -Реализовать чтение массива с товарами при загрузке страницы. Если соответствующего ключа в localStorage нет мы используем пустой массив с товарами. 
function checkLocalStorage() {
    if (getLocalStorage() !== null) {
        updateList(getLocalStorage());
    }
}