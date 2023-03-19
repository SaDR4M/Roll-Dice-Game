// ` icon //
'use strict';
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = document.querySelector('.highscore').textContent;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // when there is no input
//   if (!guess) {
//     displayMessage('No Number ⛔');
//   } // when player win the game
//   else if (guess === secretNumber) {
//     displayMessage('Correct Number 🎉');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '45rem';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } // when player lose the game
//     else {
//       displayMessage('You lost the game 💥');
//       document.querySelector('body').style.backgroundColor = 'red';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = secretNumber;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.score').textContent = score;
//   displayMessage('Start guessing...');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#7a7777';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
// });
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);
// const modalClose = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', openModal);
//   btnCloseModal.addEventListener('click', modalClose);
//   overlay.addEventListener('click', modalClose);
//   document.addEventListener('keydown', function (e) {
//     console.log(e.key);
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//       modalClose();
//     }
//   });
// }
// selecting element
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const swithcPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice button
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(diceEl.src);

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swithcPlayer();
    }
  }
});
// hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      console.log('you win the game');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      swithcPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
