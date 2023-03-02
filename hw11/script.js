/*  
Task 1

Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.
*/

const minusBtn   = document.querySelector('.counter-minus');
const plusBtn    = document.querySelector('.counter-plus');
const counterNum = document.querySelector('.counter-number');

let currentNum = localStorage.getItem('counter');
minusBtn.onclick = () => {
    localStorage.setItem('counter', --currentNum);
    changeNumber();
}
plusBtn.onclick = () => {
    localStorage.setItem('counter', ++currentNum);
    changeNumber();
}

function changeNumber() {
    if (currentNum == null) {
        counterNum.innerHTML = 0;
    } else {
        counterNum.innerHTML = currentNum;
    }
}

counterNum.onload = changeNumber();