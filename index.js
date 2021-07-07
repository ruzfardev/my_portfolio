"use strict";
const cells = Array.from(document.querySelectorAll(".cell"));
const displayPlayer = document.querySelector(".display-player");
const currentplayer = document.querySelector(".current-player");
const winningPlayer = document.querySelector(".winning-player");
const btnNew = document.querySelector(".btn--new");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let isGameActive = true;
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const selectWinnerBoxes = function (a1, a2, a3) {
  a1.classList.add("win");
  a2.classList.add("win");
  a3.classList.add("win");
};

const selectWinner = function () {
  const box1 = document.getElementById("cell1");
  const box2 = document.getElementById("cell2");
  const box3 = document.getElementById("cell3");
  const box4 = document.getElementById("cell4");
  const box5 = document.getElementById("cell5");
  const box6 = document.getElementById("cell6");
  const box7 = document.getElementById("cell7");
  const box8 = document.getElementById("cell8");
  const box9 = document.getElementById("cell9");

  if (
    box1.innerText !== "" &&
    box1.innerText === box2.innerText &&
    box1.innerText === box3.innerText
  )
    selectWinnerBoxes(box1, box2, box3);
  if (
    box4.innerText !== "" &&
    box4.innerText === box5.innerText &&
    box4.innerText === box6.innerText
  )
    selectWinnerBoxes(box4, box5, box6);
  if (
    box7.innerText !== "" &&
    box7.innerText === box8.innerText &&
    box7.innerText === box9.innerText
  )
    selectWinnerBoxes(box7, box8, box9);
  if (
    box1.innerText !== "" &&
    box1.innerText === box4.innerText &&
    box1.innerText === box7.innerText
  )
    selectWinnerBoxes(box1, box4, box7);
  if (
    box2.innerText !== "" &&
    box2.innerText === box5.innerText &&
    box2.innerText === box8.innerText
  )
    selectWinnerBoxes(box2, box5, box8);
  if (
    box3.innerText !== "" &&
    box3.innerText === box6.innerText &&
    box3.innerText === box9.innerText
  )
    selectWinnerBoxes(box3, box6, box9);
  if (
    box1.innerText !== "" &&
    box1.innerText === box2.innerText &&
    box1.innerText === box3.innerText
  )
    selectWinnerBoxes(box1, box2, box3);
  if (
    box3.innerText !== "" &&
    box3.innerText === box5.innerText &&
    box3.innerText === box7.innerText
  )
    selectWinnerBoxes(box3, box5, box7);
  if (
    box1.innerText !== "" &&
    box1.innerText === box5.innerText &&
    box1.innerText === box9.innerText
  )
    selectWinnerBoxes(box1, box5, box9);
};
const checkWinner = function () {
  let endGame = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      endGame = true;
      currentplayer.classList.add("hidden");
      console.table(a);
      console.table(b);
      console.table(c);
      break;
    }
  }
  if (endGame) {
    announce(currentPlayer === "X" ? "PLAYERX_WON" : "PLAYERO_WON");
    winningPlayer.classList.remove("hidden");
    isGameActive = false;
    return;
  }
  if (!board.includes("")) announce("TIE");
};

const classRemover = function () {
  winningPlayer.classList.remove("turn-X");
  winningPlayer.classList.remove("turn-O");
  winningPlayer.classList.remove("hidden");
  winningPlayer.classList.remove("draw");
};

const announce = (type) => {
  switch (type) {
    case "PLAYERO_WON":
      classRemover();
      winningPlayer.innerText = "Player-O won ⭕";
      winningPlayer.classList.add("turn-O");
      break;
    case "PLAYERX_WON":
      classRemover();
      winningPlayer.innerText = "Player-X won ❌";
      winningPlayer.classList.add("turn-X");
      break;
    case "TIE":
      classRemover();
      currentplayer.classList.add("hidden");
      winningPlayer.textContent = "Draw 🤝";
      winningPlayer.classList.add("draw");
      console.log("Draw");
  }
};

const userAction = function (cell, index) {
  if (isValidAction(cell) && isGameActive) {
    cell.innerText = currentPlayer;
    cell.classList.add(`turn-${currentPlayer}`);
    init(index);
    checkWinner();
    selectWinner();
    changePlayer();
  }
};

const isValidAction = function (cell) {
  if (cell.innerText === "X" || cell.innerText === "O") {
    return false;
  } else {
    return true;
  }
};

const init = function (index) {
  board[index] = currentPlayer;
};

const changePlayer = function () {
  displayPlayer.classList.remove(`turn-${currentPlayer}`);
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  displayPlayer.innerText = currentPlayer;
  displayPlayer.classList.add(`turn-${currentPlayer}`);
};

const restart = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("win");
  }
  currentplayer.classList.remove("hidden");
  classRemover();
  winningPlayer.classList.add("hidden");
  board = ["", "", "", "", "", "", ""];
  isGameActive = true;
  if (currentPlayer === "O") {
    changePlayer();
  }
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("turn-X");
    cell.classList.remove("turn-O");
  });
};

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => userAction(cell, index));
});
btnNew.addEventListener("click", restart);
