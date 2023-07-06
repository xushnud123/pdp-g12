"use strict";

const check = document.querySelector(".check");

check.addEventListener("click", () =>
  console.log(document.querySelector(".guess").value)
);
