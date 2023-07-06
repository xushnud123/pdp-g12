// "use strict";
var salom = "hey";

// const xushnud = [
//   "Xushnudbek",
//   "Raimov",
//   true,
//   2023 - 2000,
//   ["teacher", "frontend developer"],
//   ["Jonas", "Ronaldo", "Arslon"],
// ];

// for (let i = xushnud.length - 1; i >= 0; i--) {
//   console.log(xushnud[i]);
// }

// for (let m = 1; m <= 3; m++) {
//   console.log(`----- ${m} mashq -----`);
//   for (let i = 1; i <= 5; i++) {
//     console.log(`${i} marta ko'tarish 🏋️‍♂️`);
//   }
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Bizga tushgan raqam ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`6 raqami tushdi o'yin tugadi...`);
}

console.log(yearsUntilRetirement(1555, "erkak"));
