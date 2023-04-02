/*  
Task 2

Создать страницу на свободную тему. Все данные нужно брать по API, которые можете взять из  https://jsonplaceholder.typicode.com/


Помимо этого нужно добавить все соответствующие стили для красивого отображения элементов, а так же обязательно ваша страница должна быть адаптивной.
*/

const usersCintainer = document.querySelector('.users-container'); 

async function getUser() {
    const contentResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const contentData = await contentResponse.json();

    return contentData;
}

function createUserCard(userName, userEmail) {
    let userCol                 = document.createElement('div');
    let userCard                = document.createElement('div');
    let userCardHeaderContainer = document.createElement('div');
    let userCardHeaderText      = document.createElement('h5');
    let userCardList            = document.createElement('ul');
    let userCardItem            = document.createElement('li');

    userCol.setAttribute('class', 'col-sm-6 col-lg-3');
    userCard.setAttribute('class', 'card mb-4');
    userCardHeaderContainer.setAttribute('class', 'card-body');
    userCardHeaderText.setAttribute('class', 'card-title mb-0');
    userCardList.setAttribute('class', 'list-group list-group-flush');
    userCardItem.setAttribute('class', 'list-group-item');

    usersCintainer.appendChild(userCol);
    userCol.appendChild(userCard);
    userCard.appendChild(userCardHeaderContainer);
    userCardHeaderContainer.appendChild(userCardHeaderText);
    userCard.appendChild(userCardList);
    userCardList.appendChild(userCardItem);

    userCardHeaderText.innerHTML = userName;
    userCardItem.innerHTML = userEmail;
}

getUser()
    .then(data => {
        data.forEach(user => {
            createUserCard(user.name, user.email);
        });
    })
    .catch(error => console.error(error));