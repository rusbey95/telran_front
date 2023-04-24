const modalOpenBtn = document.querySelector('.product__view-more');
const modalCloseBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none'; 
        console.log('working');
    }, 2000); 
}

modalOpenBtn.onclick = () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
    modal.style.display = 'flex'; 
}

modalCloseBtn.onclick = (e) => {
    closeModal();
}

window.onclick = (e) => {
    if (e.target === modal) {
        closeModal();
    }
}