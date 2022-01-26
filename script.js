let firstCard = 12;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
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

function newCard() {
  console.log('Drawing a new card from the deck!');
}