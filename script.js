let firstCard = 5;
let secondCard = 10;
let card = 0;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

startGame = () => {
  renderGame();
}

function renderGame() {
  cardsEl.innerHTML = `Cards: ${firstCard} ${secondCard}`;

  sumEl.innerHTML = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're Out of the game!"
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

newCard = () => {
  card += 5;
  cardsEl.innerHTML += ` ${card}`;
  sumEl.innerHTML = `Sum: ${sum + card} `;
}