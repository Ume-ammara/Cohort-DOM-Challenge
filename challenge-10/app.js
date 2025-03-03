const movesDisplay = document.getElementById("moves");
const timeDisplay = document.getElementById("time");
const gameContainer = document.querySelector(".game-container");

let emojies = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
let flippedCards = [...emojies, ...emojies]; 

let moves = 0;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let timer;
let seconds = 0;
let gameStarted = false;

function restartGame() {
  gameContainer.innerHTML = ""; 
  moves = 0;
  matchedPairs = 0;
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  seconds = 0;
  gameStarted = false;
  clearInterval(timer);
  timeDisplay.textContent = "Time: 0s";
  movesDisplay.textContent = "Moves: 0";

  // Shuffle cards
  flippedCards.sort(() => Math.random() - 0.5);

  flippedCards.forEach((emoji) => {
    // Create card
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji; 

    // Create front and back
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = "?";

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.textContent = emoji;

    // Append front and back to card
    card.appendChild(cardFront);
    card.appendChild(cardBack);

    // Click event to flip card
    card.addEventListener("click", flipCard);

    gameContainer.appendChild(card);
  });
}

function flipCard() {
  if (!gameStarted) startTimer(); 

  if (lockBoard || this === firstCard) return; 
  
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  movesDisplay.textContent = `Moves: ${moves}`;

  checkMatch();
}

function checkMatch() {
  lockBoard = true; 

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    matchedPairs++;
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetTurn();
    if (matchedPairs === emojies.length) endGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 1000);
  }
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function startTimer() {
  gameStarted = true;
  timer = setInterval(() => {
    seconds++;
    timeDisplay.textContent = `Time: ${seconds}s`;
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  setTimeout(() => {
    alert(`You won in ${moves} moves and ${seconds} seconds!`);
  }, 500);
}

