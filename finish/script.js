"use strict";
const again = document.querySelector(".again");
const check = document.querySelector(".check");
const secret = document.querySelector(".number");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".message");
let scoreNumber = 20;
let highScoreNumber = 0;
let secretNumber;

// * Random function
const secretRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

// * Start coding
const startCoding = () => {
  secret.textContent = "?";
  score.textContent = scoreNumber;
  secretNumber = secretRandomNumber();
  guess.value = "";
};

// * Decrement
const scoreDecrement = () => {
  scoreNumber--;
  score.textContent = scoreNumber;
};

// * style
const styleHandler = (color, width) => {
  document.querySelector("body").style.backgroundColor = color;
  secret.style.width = `${width}rem`;
};

// * message
const messageHandler = (content) => {
  message.textContent = content;
};

// * highScore
const highScoreHandler = (value) => {
  value > highScoreNumber && (highScoreNumber = value);
  highScore.textContent = highScoreNumber;
};

startCoding();

check.addEventListener("click", () => {
  const guessValue = Number(guess.value);

  if (guessValue) {
    if (scoreNumber > 1) {
      if (guessValue === secretNumber) {
        secret.textContent = secretNumber;
        check.disabled = true;
        messageHandler("🎉 Barakalla 👏 siz sirli raqamni topdingiz");
        scoreDecrement();
        styleHandler("#60b347", 30);
        highScoreHandler(scoreNumber);
      } else if (guessValue > secretNumber) {
        messageHandler("📈 Kiritilgan son sirli raqamdan katta");
        scoreDecrement();
      } else {
        messageHandler("📉 Kiritilgan son sirli raqamdan kichik");
        scoreDecrement();
      }
    } else {
      score.textContent = scoreNumber;
      messageHandler("🚨 Urinishlaringiz soni maxsimalga yetdi");
    }
  } else {
    messageHandler("Inputni to'ldiring ✍️");
  }
});

again.addEventListener("click", () => {
  messageHandler("Start guessing...");
  check.disabled = false;
  scoreNumber = 20;
  startCoding();
  styleHandler("#222", 25);
});
