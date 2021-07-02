"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "green";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📈 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost game 😢");
      document.body.style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
