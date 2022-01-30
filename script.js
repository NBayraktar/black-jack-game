let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11
  } else {
    return randomNum;
  }
}

startGame = () => {
  renderGame();
}

function renderGame() {
  cardsEl.innerHTML = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += `${cards[i]} `;

  }
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
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}