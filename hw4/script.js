// task 1 - Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
const body = document.querySelector('body');

const cars = [
    {
        title: "BMW",
        price: "40000",
        count: "15"
    },
    {
        title: "Toyota",
        price: "20000",
        count: "13"
    },
    {
        title: "Ford",
        price: "30000",
        count: "20"
    },
    {
        title: "Chevrolet",
        price: "60000",
        count: "9"
    },
    {
        title: "Volkswagen",
        price: "30000",
        count: "13"
    },
];

const ul = document.createElement('ul');
let sumPriceCar  = 0;
let sumPriceCars = 0;
let sumCountCars = 0;

for (let i = 0; i < cars.length; i++) {
    const li = document.createElement('li');
    ul.append(li);

    sumPriceCar  = +cars[i].count * +cars[i].price;
    sumPriceCars += sumPriceCar;
    sumCountCars += +cars[i].count;

    li.innerHTML = '<b> Name </b> - ' + cars[i].title + ';<br> <b> Price </b> - ' + cars[i].price + ';<br> <b> Count </b> - ' + cars[i].count + ';<br> <b> Total cost of all ' + cars[i].title + ' cars </b> - ' + sumPriceCar + ';<br>';
}

const liSum = document.createElement('li');

liSum.append('Total cost of all cars - ', sumPriceCars, '; Total number of cars - ', sumCountCars);
ul.append(liSum);
body.append(ul);

// task 2 - Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):
const companyFounders = [
    {
        fullName: "Bill Gates",
        position: "Founder Microsoft",
        salary: "1000",
    },
    {
        fullName: "Steve Jobs",
        position: "Founder Apple",
        salary: "1200",
    },
    {
        fullName: "Larry Page",
        position: "Founder Google",
        salary: "1100",
    },
    {
        fullName: "Mark Zuckeberg",
        position: "Founder Facebook",
        salary: "1300",
    },
];

const table = document.createElement('table'); 
const thead = document.createElement('thead'); 
const tbody = document.createElement('tbody'); 

table.append(thead, tbody);
body.appendChild(table);

function createTableTheadTitles(theadTrList) {
    const tr = document.createElement('tr');
    thead.append(tr);

    for (let i = 0; i < theadTrList.length; i++) {
        const th = document.createElement('th');
    
        th.append(theadTrList[i]);
        tr.append(th);
    }
}
createTableTheadTitles(['No.', 'Price', 'Position', 'Salary']);

function createTableBodyContent(theadTdList) {
        
    for (let i = 0; i < theadTdList.length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.append(i + 1);
        tr.append(td);

        for (key in theadTdList[i]) {
            const td = document.createElement('td');

            if (key === 'salary') {
                theadTdList[i][key] = '$' + theadTdList[i][key];
            }

            td.append(theadTdList[i][key]);
            tr.append(td);
        }

        tbody.append(tr);
    }
}
createTableBodyContent(companyFounders);