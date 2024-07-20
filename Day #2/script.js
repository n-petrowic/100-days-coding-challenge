"use strict";

const number = document.querySelector(".hide-num");
const checkBtn = document.querySelector(".btn-check");
const guess = document.querySelector(".input-num");
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".play-again");
const highscoreMessage = document.querySelector(".high-score");

// generates random secret number
let secretNumber = Math.trunc(Math.random() * 30) + 1;

// tracking the score
let score = 30;
let highscore = 0;

// displaying the message
const displayMessage = function (message) {
  message.textContent = message;
};

checkBtn.addEventListener("click", function () {
  // converting guess to number
  const guessValue = Number(guess.value);

  // game logic
  // when there is no input
  if (!guess.value) {
    message.textContent = "No Number 🚫";

    // when player wins
  } else if (guessValue === secretNumber) {
    // displays the secret number
    number.textContent = guessValue;

    displayMessage("Correct Number ✅");
    message.style.color = "#60b347";
    container.style.boxShadow = `0 0 10px #60b347, 0 15px 50px #60b347,
    0 15px 150px #60b347`;
    number.style.backgroundColor = "#60b347";

    // highscore logic
    if (score > highscore) {
      highscore = score;
      highscoreMessage.textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? "Too High ⬆️" : "Too Low ⬇️");

      // decreasing score by 1
      score--;
      // display score
      scoreMessage.textContent = score;
    } else {
      displayMessage("Game Over 💥");
      message.style.color = "#b9041c";
      container.style.boxShadow = `0 0 10px #b9041c, 0 15px 50px #b9041c,
      0 15px 150px #b9041c`;
      number.style.backgroundColor = "#b9041c";
      scoreMessage.textContent = 0;
    }
  }
});

// resets the game

resetBtn.addEventListener("click", () => {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displayMessage("Start Guessing...");
  message.style.color = "#fff";
  container.style.boxShadow = `0 0 10px rgba(255, 0, 102, 0.5), 0 15px 50px rgba(255, 0, 102, 0.5),
    0 15px 150px rgba(255, 0, 102, 0.5)`;
  number.style.backgroundColor = "#ff0066";
  scoreMessage.textContent = score;
  number.textContent = "?";
  guess.value = "";
});
