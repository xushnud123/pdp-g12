"use strict";

// # dom and variable
// * main
const main = document.querySelector("main");

// * first player variables
const playerOne = document.querySelector(".player--0");
const scoreOne = document.getElementById("score--0");
const currentOne = document.getElementById("current--0");

// * second player variables
const playerTwo = document.querySelector(".player--1");
const scoreTwo = document.getElementById("score--1");
const currentTwo = document.getElementById("current--1");

// * clickable variables
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// * img variable
const rollImage = document.querySelector(".dice");

// * counterValue
let counterValue = 0;
// * active player
let activePlayer = true;
// * player array
let currentOneScore = 0;
let currentTwoScore = 0;

// # Functions
// * random number functions
const randomNumber = () => Math.trunc(Math.random() * 6) + 1;

// * active o'yinchini o'zgartiruvchi funksiya
const activeHandler = function (act) {
  if (act) {
    playerOne.classList.add("player--active");
    playerTwo.classList.remove("player--active");
  } else {
    playerOne.classList.remove("player--active");
    playerTwo.classList.add("player--active");
  }
};

// * dom dagi current-scoreni yangilash uchun ishlatiladi
const countHandler = (currentRoll, act) => {
  console.log(currentRoll, act);
  if (act) {
    // ! ikkinchi o'yinchini 0 ga qaytarish
    currentTwoScore = 0;
    currentTwo.innerHTML = currentTwoScore;

    // ! birinchi o'yinchini hisoblash
    currentOneScore += currentRoll !== 1 && currentRoll;
    currentOne.innerHTML = currentOneScore;
  } else {
    // ! birinchi o'yinchini 0 ga qaytarish
    currentOneScore = 0;
    currentOne.innerHTML = currentOneScore;

    // ! ikkinchi o'yinchini hisoblash
    currentTwoScore += currentRoll !== 1 && currentRoll;
    currentTwo.innerHTML = currentTwoScore;
  }
};

//  # Event handler

// * event when roll is pressed
btnRoll.addEventListener("click", () => {
  // * random
  const activeRandomNumber = randomNumber();

  // * hidden olib tashlash
  rollImage.classList.remove("hidden");

  // * active o'yinchi almashtirish
  activeRandomNumber === 1 && (activePlayer = !activePlayer);
  activeHandler(activePlayer);

  // * imgni almashtirish
  rollImage.src = `images/dice-${activeRandomNumber}.png`;

  // * current score
  countHandler(activeRandomNumber, activePlayer);
});
