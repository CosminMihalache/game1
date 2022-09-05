'use strict';
let dice = 0;
let player1Status = true;
let score0 = 0;
let score1 = 0;
let target0 = 0;
let target1 = 0;
let win = false;
let diceImg = document.querySelector('img');

console.log(document.querySelector('.player--0').classList);
// let player0 = document.querySelector('.player--0');
// let player1 = document.querySelector('.player--1');
document.querySelector('#current--0').textContent = score0;
document.querySelector('#current--1').textContent = score1;
// let current0 = document.querySelector('.current--0').textContent;
// let current1 = document.querySelector('.current--1').textContent;

let scorePlayer0 = score => {
  document.querySelector('#score--0').textContent = score;
};

let scorePlayer1 = score => {
  document.querySelector('#score--1').textContent = score;
};

function diceGenerator() {
  return Math.floor(Math.random() * 6 + 1);
}
console.log(diceGenerator());

document.querySelector('.btn--roll').addEventListener('click', () => {
  if (!win) {
    dice = diceGenerator();
    switch (dice) {
      case 1:
        diceImg.src = 'dice-1.png';
        break;
      case 2:
        diceImg.src = 'dice-2.png';
        break;
      case 3:
        diceImg.src = 'dice-3.png';
        break;
      case 4:
        diceImg.src = 'dice-4.png';
        break;
      case 5:
        diceImg.src = 'dice-5.png';
        break;
      case 6:
        diceImg.src = 'dice-6.png';
        break;
    }
  }
  console.log(dice);
  addScore();
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (!win) {
    if (player1Status) {
      target0 += score0;
      document.querySelector('#score--0').textContent = target0;

      score0 = 0;
      player1Status = false;
      document.querySelector('#current--0').textContent = score0;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      target1 += score1;
      document.querySelector('#score--1').textContent = target1;
      score1 = 0;
      player1Status = true;
      document.querySelector('#current--1').textContent = score1;
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
  if (target0 >= 100) {
    console.log('win nr 1');
    document.querySelector('.player--0').classList.add('player--winner');
    win = true;
    document.querySelector('#score--0').textContent = target0;
  } else if (target1 >= 100) {
    console.log('win nr 2');
    document.querySelector('.player--1').classList.add('player--winner');
    win = true;
    document.querySelector('#score--1').textContent = target1;
  }
});

function addScore() {
  if (player1Status) {
    if (dice == 1) {
      score0 = 0;
      document.querySelector('#current--0').textContent = score0;
      player1Status = false;

      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
      console.log(document.querySelector('.player--0').classList);
    } else {
      score0 += dice;
      document.querySelector('#current--0').textContent = score0;
    }
  } else {
    if (dice == 1) {
      score1 = 0;
      document.querySelector('#current--1').textContent = score0;
      player1Status = true;

      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    } else {
      score1 += dice;
      document.querySelector('#current--1').textContent = score1;
    }
  }
}

document.querySelector('.btn--new').addEventListener('click', () => {
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  dice = 0;
  score0 = 0;
  score1 = 0;
  target0 = 0;
  target1 = 0;
  win = false;
  document.querySelector('#score--0').textContent = target0;
  document.querySelector('#score--1').textContent = target1;
});
