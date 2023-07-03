// let age = 23;
// let name = "Xushnudbek";
// let hasDriversLicense = false;
// let a;
// let b = null;
// // const age = undefined; ❌
// console.log(typeof b, b);

// # Math Operators
// -, +, *, / , %, **

// console.log(2 ** 3);

// # Assignment Operators
// ++
// let a = 1;

// a = a + 1;
// a--;

// console.log("a = ", a--);

// # Comparison Operators:

// console.log(9 >= 9);

// let x = (y = 25 - 10 - 5);

// console.log(x, y);

// * Coding challenge #1

// const markMassaData1 = 78;
// const markHeightData1 = 1.69;

// const johnMassaData1 = 92;
// const johnHeightData1 = 1.95;

// const markBmiData1 = markMassaData1 / markHeightData1 ** 2;
// const johnBmiData1 = johnMassaData1 / johnHeightData1 ** 2;

// console.log("Mark BMI Data1 = ", markBmiData1);
// console.log("John BMI Data1 = ", johnBmiData1);

// if (markBmiData1 > johnBmiData1) {
//   console.log(markBmiData1 > johnBmiData1);
//   console.log("Markning🧍 BMI Johnning🧍‍♂️ BMI dan katta.");
// } else {
//   console.log(markBmiData1 > johnBmiData1);
//   console.log("Johnning🧍‍♂️ BMI Markning🧍 BMI dan katta.");
// }

// # String and Template literals
// const name = "A'lo";

// const name = "A'lo";
// const age = 23;
// const name = "Xushnudbek";
// const xushnud = `Men ismim ${name}.Yoshim ${age} da`;
// console.log(xushnud);

// # Taking Decisions if else Statements

// const counter = prompt("Qiymat kiriting");

// console.log(typeof counter, counter);
// // console.log(typeof counter, counter);
// if (counter !== 10) console.log("rost", counter);
// else console.log("yolgon", 10);

// 0 ... 1999 20asr
// 2000 ... 21 asr

// if (Number < 0 || typeof counter === "string") {
//   alert("Siz yaroqsiz qiymat kiritdizgiz❓");
// }

// console.log("23" > "0");

// 1 = true;
// 0 = false

// let m = 2 + 3 + 4 + "5";
// console.log(m);

// let k = "10" - "4" - "3" - 2 + "5";
// console.log(k);

// # Booleanga aylanadigan qiymatlar

// 0, "", undefined, null, false, NaN

// falsy
// console.log(
//   Boolean(0),
//   Boolean(""),
//   Boolean(undefined),
//   Boolean(null),
//   Boolean(NaN)
// );

// truthy

// console.log(true == "Xushnudbek");

// const s = Number(prompt("qiymat kiriting"));
// if (s == 18) {
//   console.log(
//     `${s} qiymatimiz (loose equality) orqali tekshirilganda teng bo'ldi`
//   );
// }
// if (s === 18) {
//   console.log(
//     `${s} qiymatimiz (strict equality) orqali tekshirilganda teng bo'ldi`
//   );
// }

// const favorite = prompt("Sevimli 😍 raqamingizni kiriting 👇");
// if ((favorite !== 7 || favorite !== 10) && !(typeof favorite === "string")) {
//   console.log(`${favorite} `);
// }
// if (favorite == 7) {
//   console.log("Demak siz Ronaldo ni muhlisisiz!🥳");
// }
// if (Number(favorite) === 10) {
//   console.log("Demak siz Messini ni muhlisisiz!🥳");
// }
// if (favorite) {
//   console.log("Raqam kiritmadingiz❓");
// }
