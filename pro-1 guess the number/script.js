'use strict';

// function to generate the random number
function generateRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const secretNumber = generateRandomInt(20);
document.querySelector(".highscore").textContent = localStorage.getItem('highScore');
/** 
// for changing the  number in the box 
document.querySelector('.number').textContent = 11;

// side note message 
document.querySelector('.message ').textContent = '🎉 correct Number!';
// for score selector 
document.querySelector(".score").textContent = '19';

// for the input value 
document.querySelector(".guess").value = 16;
*/



/** creating the click event function  */
const guess = function checkTheGuess() {
    console.log('button is clicked');
    const guessNumber = Number(document.querySelector('.guess').value);
    if (!!guessNumber) {
        if (guessNumber > secretNumber) {
            document.querySelector('.message ').textContent = 'Entered Number greater than guess Number';
            document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1;
        } else if (guessNumber < secretNumber) {
            document.querySelector('.message ').textContent = 'Entered Number less than guess Number';
            document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1;
        } else if (guessNumber === secretNumber) {
            document.querySelector('.message ').textContent = '🎉 correct Number!';

            const highScore = Number(document.querySelector(".score").textContent);
            localStorage.setItem('highScore', highScore);
            document.querySelector(".highscore").textContent = localStorage.getItem('highScore');
        }
    } else {
        document.querySelector('.message').textContent = 'No Number Entered!! ⛔'
    }
}

// creating the click event when the button is pressed
document.querySelector('.check').addEventListener('click', guess);