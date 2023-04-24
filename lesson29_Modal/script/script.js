const modalOpenBtn = document.querySelector('#open-modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

function openModal() {
    modal.classList.add('open');
}
function closeModal() {
    modal.classList.remove('open');
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});