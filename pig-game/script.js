"use strict";
// * first player variables
const playerOne = document.querySelector(".player--0");
const scoreOne = document.getElementById("score--0");
const currentOne = document.getElementById("current--0");

// * second player variables
const playerTwo = document.querySelector(".player--1");
const scoreTwo = document.getElementById("score--1");
const currentTwo = document.getElementById("current--0");

// * clickable variables
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// * img variable
const rollImage = document.querySelector(".dice");

// * random number functions
const randomNumber = () => Math.trunc(Math.random() * 6) + 1;

// * counterValue
let counterValue = 0;

// * active player
let activePlayer = 0;

// * event when roll is pressed
btnRoll.addEventListener("click", () => {
  const activeRandomNumber = randomNumber();
  rollImage.src = `images/dice-${randomNumber()}.png`;
  console.log(activeRandomNumber);
  activeRandomNumber === 1 ? (activePlayer = 1) : 0;
  console.log(activePlayer);
});
