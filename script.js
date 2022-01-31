'use strict';

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 25;
let highscore1 = 0;
let highscore2 = 0;
let highscore3 = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('#messaggio').textContent = '⛔ No Number!'; //Numero non inserito
  } else if (guess === secretNumber) {
    //Numero indovinato
    document.querySelector('#messaggio').textContent = 'Correct Number! 🎉';
    document.querySelector('.numerosegreto').textContent = secretNumber;
    document.querySelector('header').style.backgroundColor = '#60b347';
    document.querySelector('main').style.backgroundColor = '#60b347';

    if (score > highscore1 && score > highscore2 && score > highscore3) {
      //Classifica punteggi
      highscore1 = score;
      document.querySelector('#highscore1').textContent = highscore1;
    } else if (score < highscore1 && score > highscore2 && score > highscore3) {
      highscore2 = score;
      document.querySelector('#highscore2').textContent = highscore2;
    } else if (score < highscore1 && score < highscore2 && score > highscore3) {
      highscore3 = score;
      document.querySelector('#highscore3').textContent = highscore3;
    }
  } else if (guess === secretNumber + 1) {
    //Ci sei quasi
    if (score > 1) {
      document.querySelector('#messaggio').textContent =
        "📈 A little too high! You're almost there";
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#messaggio').textContent =
        '😓 You lost the game!';
      document.querySelector('#score').textContent = 0;
    }
  } else if (guess === secretNumber - 1) {
    if (score > 1) {
      document.querySelector('#messaggio').textContent =
        "📈 A little too low! You're almost there";
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#messaggio').textContent =
        '😓 You lost the game!';
      document.querySelector('#score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    //troppo alto
    if (score > 1) {
      document.querySelector('#messaggio').textContent = '📈 Too high!';
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#messaggio').textContent =
        '😓 You lost the game!';
      document.querySelector('#score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //troppo basso
    if (score > 1) {
      document.querySelector('#messaggio').textContent = '📉 Too low!';
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      document.querySelector('#messaggio').textContent =
        '😓 You lost the game!';
      document.querySelector('#score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //pulsante again
  score = 25;
  document.querySelector('#messaggio').textContent = 'Start guessing...';
  document.querySelector('#score').textContent = score;
  document.querySelector('header').style.backgroundColor =
    'rgba(0, 0, 0, 0.884)';
  document.querySelector('main').style.backgroundColor = 'rgba(0, 0, 0, 0.884)';
  document.querySelector('.numerosegreto').textContent = '?';
  document.querySelector('.numerosegreto').style.width = '18rem';
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('.guess').value = '';
});

document.querySelector('#itaflag').addEventListener('click', function () {
  //bandierina ita
  document.querySelector('#messaggio').textContent = 'Inizia a indovinare...';
  document.querySelector('.titolo').textContent = 'Indovina il mio numero';
  document.querySelector('.between').textContent = '(Tra 1 e 50)';
  document.querySelector('.again').textContent = 'Riprova';
  document.querySelector('.highscores').textContent = '🥇 Record';
  document.querySelector('.punti').textContent = '💯 Punteggio';
  document.querySelector('.check').textContent = 'Verifica';
});
