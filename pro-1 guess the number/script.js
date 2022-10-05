'use strict';

// function to generate the random number
function generateRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomNumber = generateRandomInt(20)
console.log(randomNumber);

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
        console.log(typeof guessNumber);
    } else {
        document.querySelector('.message ').textContent = 'No Number Entered!! ⛔'
    }
}

// creating the click event when the button is pressed
document.querySelector('.check').addEventListener('click', guess);