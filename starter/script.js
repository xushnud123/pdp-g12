"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 20;

const check = document.querySelector(".check");

check.addEventListener("click", () =>
  console.log(document.querySelector(".guess").value)
);
