// 1) Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”.
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

// 2)	Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) получить все посты пользователя.Эти данные функция должна возвращать.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта 

// {
// 	user: {name, email},
// 	posts: [...]
// }

let userId = 6;

async function getUserWithPosts() {
    try {
        const getUserWithPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const resultId = await getUserWithPosts.json();

        const getPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const resultPost = await getPost.json();

        if (getUserWithPosts.status !== 200) {
            throw new Error('Такого пользователя нет');
        }

        const obj = { user: { name: resultId.name, email: resultId.email }, posts: resultPost }

        return obj;
    } catch (e) {
        return e;
    }
}
// getUserWithPosts();
// console.log(getUserWithPosts());


// Создать функцию, которая получает данные о пользователе и  добавляет div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру.

{/* <div class=”user-container”>
	<div class=”user”>
		<p>Имя пользователя</p>
		<p>Почта пользователя</p>
	</div>
	<div class=”posts”>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		<div class=”item”>
			<p>Название поста</p>
			<p>Текст поста</p>
		</div>
		….….
	</div>
</div> */}

// console.log(getUserWithPosts());
// getUserWithPosts().then((value) => {
//     // console.log(value);
// });
// console.log(getUserWithPosts())


const container = document.querySelector('.container');
async function getDataUsers() {
    const data = await getUserWithPosts();
    console.log(getUserWithPosts());
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    const userBox = document.createElement('div');
    userBox.classList.add('user');

    const userName = document.createElement('p');
    userName.textContent = data.user.name;

    const userEmail = document.createElement('p');
    userEmail.textContent = data.user.email;

    const postBox = document.createElement('div');
    postBox.classList.add('posts');

    data.posts.forEach(element => {
        const postItem = document.createElement('div');
        postItem.classList.add('item');
        postItem.style.marginBottom = '15px';
        postItem.style.borderBottom = '1px solid #ddd';

        const postTitle = document.createElement('h3');
        postTitle.textContent = element.title;

        const postContent = document.createElement('p');
        postContent.textContent = element.body;

        postItem.append(postTitle, postContent);
        postBox.append(postItem);
    });

    container.append(userContainer);
    userContainer.append(userBox, postBox);
    userBox.append(userName, userEmail);
}
getDataUsers();

// 4)	Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. При нажатии на стрелку в лево должен отправиться запрос на получение данных про пользователя с меньшим id, а при нажатии на кпопку в право данные про следующего пользователя.

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.onclick = () => {
    if (userId > 1) {
        container.innerHTML = '';
        userId--;
        console.log(userId);
        getDataUsers();
    }
}
nextBtn.onclick = () => {
    if (userId > 1) {
        container.innerHTML = '';
        userId++;
        console.log(userId);
        getDataUsers();
    }
}