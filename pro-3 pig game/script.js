'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentPlayer = player0;
let current = current0El;
let currentScore = 0;
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function switchPlayer(){
    currentPlayer = currentPlayer === player0 ? player1 : player0;
    current = current === current0El ? current1El : current0El;
}

// rolling dice functionality 
btnRoll.addEventListener('click', function () {

    //1. generating the random dice roll
    const dice = Math.trunc(Math.random()*6)+1;
    // 2. display the dice
    diceEl.classList.remove('hidden')
    diceEl.setAttribute('src', `dice-${dice}.png`);
    // 3. check if rolled 1: if true, switch to next player

    if (dice !== 1) {
        currentScore += dice;
        current.textContent = currentScore;  
    } else {
        // switch the player;
        currentScore = 0;
        currentPlayer.classList.toggle('player--active');
        switchPlayer();
        currentPlayer.classList.toggle('player--active');
    }
});


btnHold.addEventListener('click', function () {
    // 1. add the current score to the active player.
    // 2. check the score is >=100  if >100 finish the game.
    // 3. switch to the next player. 
});



