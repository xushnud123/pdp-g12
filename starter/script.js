"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// console.log(calcAge(2000));
// console.log(calcAge(2001));

// const age  = 2023 -2000
// # parameters
// function calcAge(birthYear, name) {
//   return 2023 - birthYear;
// }

// # arguments
// console.log(calcAge(2000, "xushnudbek"));

// function market(apples, oranges) {
//   const marketLists = `Bozordan ${apples} kg olma 🍎 va ${oranges} kg apelsin 🍊 olindi.`;
//   return marketLists;
// }
// const app = Number(prompt("Qiynatni kiriting"));
// const orange = Number(prompt("Qiynatni kiriting"));

// console.log(market(app, orange));

// console.log(market(3, 4));

// //  # Function Declarations
// // console.log(calcAge1(2000, name)); ✅
// function calcAge1(birthYear, name) {
//   return 2023 - birthYear;
// }

// // # Expressions (Anonymous)
// // console.log(calcAge2(2000, name)); ❌
// const calcAge2 = function (birthYear, name) {};
// calcAge2();

// // # Arrow function
// // # Agar function body 1 qator iborat bo'lib {} yozilsa kod automatic return bo'ladi
// const calcAge3 = (birthYear) => 2023 - birthYear;

// console.log(calcAge3(2004));

const E = 60;
const A = 55;

function yearsUntilRetirement(birthYear, gender, staj) {
  if (gender === "erkak") {
    const pAge = 2023 - birthYear;
    console.log(pAge);
    return pAge < E
      ? `Sizga ${pAge} yil bor. Erkaklarning pensiya yoshi ${E}.`
      : "Siz pensiya yoshidasiz";
  } else {
    const pAge = 2023 - birthYear;
    console.log(pAge);
    return pAge < A
      ? `Sizga ${pAge} yil bor. Ayollarning pensiya yoshi ${A}.`
      : "Siz pensiya yoshidasiz";
  }
}

console.log(yearsUntilRetirement(1555, "erkak"));
