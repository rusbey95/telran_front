const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');

let firstOperand = '';
let secondOperand = '';
let currenOperation = null;
let isAppending = false;

function resetCalculator() {
    display.innerHTML = '0';
    firstOperand = '';
    secondOperand = '';
    currenOperation = null;
    isAppending = false;
}
resetCalculator();

function addToDislapy(number) {
    if(!isAppending) {
        display.innerHTML = '';
        isAppending = true;
    }
    display.innerText += number;
}

function operate(operation, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function calculate() {
    if (currenOperation === null) {
        return;
    }
    if (currenOperation === '/' && display.textContent === '0') {
        alert('нельзя делить на 0');
        resetCalculator();
        return;
    }
    secondOperand = display.textContent;
    display.innerText = operate(currenOperation, firstOperand, secondOperand);
    firstOperand = display.textContent;
    secondOperand = '';
    currenOperation = null;
}

function addOperation(operation) {
    if(currenOperation !== null) {
        calculate();
    }
    firstOperand = display.textContent;
    currenOperation = operation;
    isAppending = false;
}

btns.forEach((button) => {
    button.onclick = () => {
        if(button.classList.contains('equals')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            resetCalculator();
        } else if (button.classList.contains('operator')) {
            addOperation(button.textContent);
        } else {
            addToDislapy(button.textContent);
        }
    };
});

document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key === '.') {
        addToDislapy(e.key);
    } else if (e.key === 'Escape') {
        resetCalculator();
    } else if (e.key === 'Backspace') {
        display.innerText = display.textContent.slice(0, length - 1);
        if (display.textContent === '') {
            display.innerText = 0;
        }
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        addOperation(e.key);
    }
});