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
    if (Number(document.querySelector(".score").textContent) > 0) {
        const guessNumber = document.querySelector('.guess').value;
        if (guessNumber && guessNumber >= 0) {
            // when the guess number is too high
            if (guessNumber > secretNumber) {
                document.querySelector('.message ').textContent = 'too High !!';
                document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1;
            }
            // when guess number is too low 
            else if (guessNumber < secretNumber) {
                document.querySelector('.message ').textContent = 'too less !!';
                document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1;
            }
            // when player guess the number 
            else if (guessNumber == secretNumber) {
                document.querySelector('.message ').textContent = '🎉 correct Number!';
                document.body.setAttribute('class', 'green-cls');
                document.querySelector('.number').textContent = guessNumber;
                if (Number(document.querySelector(".score").textContent) > Number(localStorage.getItem('highScore'))) {
                    const highScore = Number(document.querySelector(".score").textContent);
                    localStorage.setItem('highScore', highScore);
                    document.querySelector(".highscore").textContent = localStorage.getItem('highScore');
                }
            }
        } else {
            document.querySelector('.message').textContent = 'No Number Entered!! ⛔'
        }
    } else {
        document.querySelector('.message').textContent = 'you Lost the game';
    }
}

// creating the click event when the button is pressed
document.querySelector('.check').addEventListener('click', guess);


// function for refreshing the html page 
const refresh = () => {
    location.reload()
}

// on again click button
document.querySelector("#again-btn").addEventListener('click', refresh);
