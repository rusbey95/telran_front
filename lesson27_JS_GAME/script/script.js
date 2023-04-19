const form = document.querySelector('.form');
const input = document.querySelector('#number');
const newGame = document.querySelector('#newGame');
const result = document.querySelector('.result');

let randomNum = Math.floor(Math.random * 100) + 1;
let numberOfAttempts = 0;

function resultMess(message) {
    result.innerHTML = `<h2>${message}</h2>`;
}

form.onsubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(input.value);
    numberOfAttempts++;
    if (answer === randomNum) {
        resultMess(`You win!!! Congratulations. It was the ${numberOfAttempts} try`);
    } else if (numberOfAttempts > 10) {
        resultMess(`You lose((( It was the ${numberOfAttempts} try`);
    } else {
        answer < randomNum ? resultMess(`Your number less then random. It was the ${numberOfAttempts} try`) : resultMess(`Your number more then random. It was the ${numberOfAttempts} try`);
    }
};

newGame.onclick = () => {
    resultMess('');
    input.value = '';
    randomNum = Math.floor(Math.random * 100) + 1;
    numberOfAttempts = 0;
}