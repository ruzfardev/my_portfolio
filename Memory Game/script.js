"use strict";
const cards = document.querySelectorAll(".card");
const timer = document.querySelector(".timer");
const moves = document.querySelector(".moves");
const overlay = document.querySelector(".overlay-window");
const winningWindow = document.querySelector(".winning-window");
const gameOver = document.querySelector(".game-over-window");

const tookMin = document.querySelector(".took-min");
const tookMoves = document.querySelector(".took-moves");
const tookSec = document.querySelector(".took-sec");

// var let
let counter = 0;
let movCounter = 0;
let matchedCards = 0;
let score = 0;

// timer
const timerFn = function () {
  const minute = String(Math.floor(counter / 60)).padStart(2, 0);
  const sec = String(counter % 60).padStart(2, 0);
  timer.textContent = `${minute}:${sec}`;

  if (matchedCards === cards.length / 2 && counter < 60) {
    clearInterval(timerFn);
    winningWindow.classList.add("visible");
    tookMin.textContent = minute;
    tookMoves.textContent = movCounter;
    tookSec.textContent = sec;
  } else if (counter > 60) {
    clearInterval(timerFn);
    gameOver.classList.add("visible");
  } else {
    counter++;
  }
};

// mov counter
const movesCounter = function () {
  movCounter++;
  moves.textContent = movCounter;
};

// overlay
overlay.addEventListener("click", function () {
  overlay.classList.remove("visible");
  document.querySelector(".game-info").classList.remove("hidden");
  cards.forEach((card) => {
    card.classList.add("game-active");
  });
  setInterval(timerFn, 1000);
});

// Game functionality
let flipped = false;
let firstCard, secondCard;
let lockBoard = false;

const flippedCard = function () {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.toggle("flip");

  if (!flipped) {
    // first click
    flipped = true;
    firstCard = this;
    return;
  }
  // second click
  secondCard = this;

  checkForMatch();
};

const checkForMatch = function () {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unFlipcard();
};

const disableCards = function () {
  firstCard.removeEventListener("click", flippedCard);
  secondCard.removeEventListener("click", flippedCard);
  resetBoard();
  movesCounter();
  matchedCards++;
};

const unFlipcard = function () {
  lockBoard = true;
  movesCounter();
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
};
const resetBoard = function () {
  [flipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

// Shuffle cards
const shuffle = function () {
  cards.forEach((card) => {
    let randomNum = Math.floor(Math.random() * 16);
    card.style.order = randomNum;
  });
};
shuffle();

/// Init
const init = function (e) {
  console.log(e);
  if (e.target.classList.contains("btn")) {
    counter = 0;
    matchedCards = 0;
    movCounter = -1;
    winningWindow.classList.remove("visible");
    gameOver.classList.remove("visible");
    cards.forEach((card) => {
      card.classList.remove("flip");
      setTimeout(() => {
        shuffle();
        card.addEventListener("click", flippedCard);
      }, 500);
    });
    movesCounter();
  }
};

winningWindow.addEventListener("click", init);
gameOver.addEventListener("click", init);
cards.forEach((card) => card.addEventListener("click", flippedCard));
