/*  
Task 1

Сделать форму, с помощью которого пользователь отправит id поста, чьи комментарии нужно отрисовывать на странице в виде списка.
Для получения поста =>    https://jsonplaceholder.typicode.com/comments/ 
Для получения комментариев =>    https://jsonplaceholder.typicode.com/posts/ /comments 
*/

const postIdForm        = document.querySelector('#post-id-form');
const postListContainer = document.querySelector('.list-group'); 

async function getPostComments(id) {
    const postCommentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const postCommentsData = await postCommentsResponse.json();

    return postCommentsData;
}

postIdForm.onsubmit = function(e) {
    e.preventDefault();

    let inputPostId = document.querySelector('#postId').value;
    
    getPostComments(inputPostId)
        .then(data => {
            if (data.length !== 0) {
                data.forEach(element => {
                    let postList           = document.createElement('div');
                    let postTitleContainer = document.createElement('div');
                    let postName           = document.createElement('h5');
                    let postId             = document.createElement('small');
                    let postText           = document.createElement('p');
    
                    postTitleContainer.setAttribute('class', 'd-flex w-100 justify-content-between')
                    postList.setAttribute('class', 'list-group-item');
                    postName.setAttribute('class', 'mb-1');
                    postName.setAttribute('style', 'text-transform: uppercase');
                    postId.setAttribute('class', 'text-muted');
                    postText.setAttribute('class', 'mb-0');

                    postListContainer.appendChild(postList);
                    postList.appendChild(postTitleContainer);
                    postTitleContainer.appendChild(postName);
                    postTitleContainer.appendChild(postId);
                    postList.appendChild(postText);
                    
                    postName.innerHTML = element.name;
                    postId.innerHTML = `id - ${element.id}`;
                    postText.innerHTML = element.body;
                });
            } else {
                throw new Error (`Элемента с селектором ${inputPostId} нет в документе`);
            }
        })
        .catch(error => {
            let errorText = document.createElement('p');
            errorText.setAttribute('class', 'text-danger');
            postListContainer.appendChild(errorText);

            errorText.innerHTML = error;
        });

}