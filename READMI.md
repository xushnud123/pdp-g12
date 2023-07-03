# 1. Activating Strict Mode

> ## "use strict"

        1)
       let hasDriversLicense = false;
       const passTest = true;

       if (passTest) hasDriverLicense = true;
       if (hasDriversLicense) console.log('I can drive :D');

       2)
       const interface = 'Audio';
       const private = 534;

# 2. Functions

> ## 1) Funktsiyalar JavaScript-ning asosiy qurilish blokidir. Funktsiyalar bizga kod blokini `inkapsulyatsiya` qilish va uni bir necha marta qayta ishlatish imkonini beradi.
>
> ## 2) Funktsiyalar JavaScript kodini yanada o'qilishi, tartibga solinishi, qayta ishlatilishi va parvarish qilinishiga imkon beradi.

        function <function-name>(arg1, arg2, arg3,...){
            write function code here
        };

> ## 3) `{} Curly brackets` bu `function body` deb nomlanadi va function tanasi hioblanadi.
>
> ## 4) Example: function

    function logger() {
        console.log("My name is Xushnudbek😎")
    }

    logger()

> ## 5) logger() 👉 / `calling (qo'ng'roq qilish)` / `running (ishlash)` / `invoking (chaqirish)` function
>
> ![alt text](/images/function.png)

> ## 6) Function parameter and arguments and return
>
> ### 1. Parameter
>
> ![alt text](/images/parameter.png)
>
> ### 2. Arguments
>
> ![alt text](/images/parameter.png)

        function market(applesCount,orangeCount){
           const marketLists = `Bozordan ${applesCount}kg apples va ${orangeCount}kg orange olindi.`
           return marketList
        }

        const appleJuice = market(2 (🍎),3 (🍊))

> 1. ### `market(applesCount,orangeCount)` => parameters
>
> 2. ### `market(2,3)` => arguments ( argumentlar o'rni parameterlar bilan mos tushishi kerak )
>
> 3. ### `return` marketList => bu function dan `qiymat` qaytarish hisoblanadi. Function dan `ixtiyoriy` qiymat qaytarishimiz mumkin. `Hamma funksiyalar biror narsani qaytarishi shart emas`.

> ### 3. Return
>
> ![alt text](/images/return.png)

# 3. Function Declarations vs Expressions (Anonymous) vs Arrow function

> ## 1) Function Declarations
>
> ### 1.1) 🚀 Function declarations ni aniqlashdan oldin chaqira olamiz. `Hoisting 1️⃣`
>
> ### 1.2) function calcAge (birthYear) {
>
> const currentDate = new Date().getFullYear()
>
> return currentDate - birthYEar
>
> ### }

> ## 2) Function Expressions (Anonymous)
>
> ### const calcAge = function (birthYear) {
>
> &nbsp;&nbsp;&nbsp;const currentDate = new Date().getFullYear()
>
> &nbsp;&nbsp;&nbsp;return currentDate - birthYEar
>
> ### }

> ## 🤝 Function Declarations and Expressions
>
> ### 1) Muntazam funktsiyalarda `argumentlar majburiydir`. Shuning uchun argumentlarni oddiy funktsiyaga o'tkazganingizda, ularga `arguments kalit` so'zi yordamida kirishingiz mumkin.
>
> ![alt text](/images/arguments.png)

> ## 3) Arrow Function 🏹
>
> ### 1) `Arrow function` bu `Function Expressions` ni qisqaroq varianti lekin `farq qiladigan` hossalari bor.
>
> ### 2) Farqlari: `arguments` va `this` kalit so'zlari mavjud emas.
>
> ### 3) `{} Curly brackets` siz qatorni yozganingizda `automatic return` bo'ladi.

        const calcAge = birthYear => new Date().getFullYear() - birthYear

![alt text](/images/arrow.png)

# 4. `Challange`: Pensiya yoshiga qancha qolganini hisoblash misoli: `yearsUntilRetirement`

# 5. Functions Calling Other Functions

![alt text](/images/f%3Ef.jpeg)

# 6.`Challange`: Pensiya yoshiga qancha qolganini hisoblash. Function name: `yearsUntilRetirement`

> ## 1) Qancha qolganini hisoblash va habar berish.
>
> ## 2) Pensiya yoshiga yetgan bo'lsa habar berish.
>
> ## 3) Pensiya yoshidan o'tgan bo'lsa habar berish.
>
> ## Pensiya yoshi erkaklar: `60`,erkaklar ish staji: `25`, ayollar: `55`, ayollar ish staji: `20` yosh deb olinsin. Erkaklar `25` yil ish stajida `3000000` olishadi, ayollar `20` yil ish stajida `1800000` olishadi.

# 7. Coding Challange #1

# 8.Data Structure. Introduction to Arrays［👋］

> ## 1. What is a data structure?
>
> ### Kompyuter fanida ma'lumotlar strukturasi - bu ma'lumotlarga samarali kirish va o'zgartirish imkonini beradigan tarzda tashkil qilish, boshqarish va saqlash formatidir. Aniqroq qilib aytadigan bo'lsak, ma'lumotlar strukturasi - bu ma'lumotlar qiymatlari, ular orasidagi munosabatlar va ushbu ma'lumotlarga qo'llanilishi mumkin bo'lgan funktsiyalar yoki operatsiyalar to'plami.

> ## 2. Array
>
> ### 1) Massiv - qo'shni xotira joylarida saqlanadigan elementlar to'plami. Har bir elementga uning indeks (pozitsiya) raqami orqali kirish mumkin . Massivlar har doim 0 indeksidan boshlanadi, shuning uchun 4 ta elementdan iborat massivda biz 2-sonli indeks yordamida 3-elementga kirishimiz mumkin.
>
> ### const arr = ['a','b','c','d'] // `literal sintaksis`
>
> ![alt text](/images/array_index.png)
>
> ### 2) Massivning uzunlik xususiyati uning tarkibidagi elementlar soni sifatida aniqlanadi . Agar massiv 4 ta elementdan iborat bo'lsa, massiv uzunligi 4 ga teng deb aytishimiz mumkin. `[].length`
>
> ![alt text](/images/array_length.png)
>
> ### 3) Challange: istalgan arrayni oxirgi index sidagi qiymatni olish `⁉️`
>
> ### 4) Mutatsiyaga uchratish
>
> ![alt text](/images/mutatsiya.png) ![alt text](/images/mutatsiya_console.png)

# 9. Basic Array Operations Methods

> ## 1) Push: `push()` usuli massiv oxiriga bir yoki undan ortiq elementlarni qo'shadi. Va `mutatsiyaga` uchragan arrayning `length` ni qaytaradi.
>
> ![alt text](/images/array-methods/push.png)
>
> ## 2) Unshift: `unshift()` usuli massiv boshiga bir yoki bir nechta elementlarni qo‘shadi va massivning yangi uzunligini qaytaradi. Va `mutatsiyaga` uchragan arrayning `length` ni qaytaradi.
>
> ![alt text](/images/array-methods/unshift.png)
>
> ## 3) Pop: `pop()` usuli massivdan oxirgi elementni olib tashlaydi va shu elementni qaytaradi.
>
> ![alt text](/images/array-methods/pop.png)
>
> ## 4) Shift: `shift()` usuli massivdan birinchi elementni olib tashlaydi va shu elementni qaytaradi.
>
> ![alt text](/images/array-methods/shift.png)
>
> ## 5) IndexOf: indexOf() usuli massiv elementining birinchi paydo bo'lish indeksini yoki topilmasa -1 ni qaytaradi.
>
> ![alt text](/images/array-methods/index-of.png)
>
> ## 6) Includes: `include()` metodi massivda belgilangan element bor yoki yo'qligini tekshiradi.
>
> ![alt text](/images/array-methods/includes.png)

# 10. Coding Challage #2

# 11. Introduction to Objects

> ## 1) Ma'lumotlar turlari bo'limidan ma'lumki , JavaScript-da sakkizta ma'lumotlar turi mavjud. Ulardan ettitasi "ibtidoiy" deb ataladi, chunki ularning qiymatlari faqat bitta narsani o'z ichiga oladi (u qator yoki raqam yoki boshqa narsa).

> ## 2) Bundan farqli o'laroq, ob'ektlar turli xil ma'lumotlar va murakkabroq ob'ektlarning kalitli to'plamlarini saqlash uchun ishlatiladi. JavaScript-da ob'ektlar tilning deyarli barcha tomonlariga kirib boradi. Shuning uchun biz boshqa joyga chuqurroq kirishdan oldin ularni tushunishimiz kerak.

> ## 3) Ob'ektni ixtiyoriy xususiyatlar `{…}` ro'yxati bilan rasm qavslari bilan yaratish mumkin . Xususiyat `"key: value"` juftligi bo'lib, bu erda satr (shuningdek, `"property name"` deb ataladi) va har qanday narsa `value` bo'lishi mumkin
>
> ![alt text](/images/object/key_value.png)

        const xushnud = {
                firstName: "Xushnudbek",
                lastName: "Raimov",
                age: new Date().getFullYear() - 2000,
                job: ["teacher", "frontend developer"],
                friends: ["Nurbek", "Arslon", "Shohzod"],
              };

> ## 4) Ob'ektni imzolangan fayllarga ega kabinet sifatida tasavvur qilishimiz mumkin. Har bir ma'lumot bo'lagi kalit yordamida o'z faylida saqlanadi. Faylni nomi bo'yicha topish yoki faylni qo'shish/o'chirish oson.
>
> ![alt text](/images/object/object.png)
>
> ## 5) Example: Olingan foydalanuvchi ob'ektini `"name"` va `"age"` deb nomlangan ikkita imzolangan faylga ega kabinet sifatida tasavvur qilish mumkin.
>
> ![alt text](/images/object/user.png)

# 12. Dot vs Bracket Notation

        const xushnud = {
        firstName: "Xushnudbek",
        lastName: "Raimov",
        age: new Date().getFullYear() - 2000,
        job: ["teacher", "frontend developer"],
        friends: ["Nurbek", "Arslon", "Shohzod"],
        };

        1) console.log("dot = ", xushnud.age);✅
        2) console.log("bracket = ", xushnud["age"]);✅

        const nameKey = "Name";
        // console.log("dot = ", xushnud.'first' +  nameKey);❌
        console.log("dot = ", xushnud["first" + nameKey]); ✅

![alt text](/images/object/error_dot_no_expressions.png)
![alt text](/images/object/succes_bracket_expressions.png)

> ## 1) Challange: yuqoridagi objectdan dynamic tarzda propertyni qaytarish

        const xushnud = {
        firstName: "Xushnudbek",
        lastName: "Raimov",
        age: new Date().getFullYear() - 2000,
        job: ["teacher", "frontend developer"],
        friends: ["Nurbek", "Arslon", "Shohzod"],
        };

        const interestedIn = prompt(
        "Sizga xushnud objecti dagi qaysi property kerak. Keys  name (Kalit nomlari 🔑): firstName, lastName, age, job, friends."
        );

        if (xushnud[interestedIn]) {
                console.log(xushnud[interestedIn]);
        }
        else {
                console.log("Siz mavjud bo'lmagan kalit so'zdan    foydalandingiz❓. Mana bu kalit nomlarini 🔑 kiritib ko'ring: firstName, lastName, age, job, friends")
        }

> ## 2) Add a property to an object
>
> ### 1. xushnud.location = "Uzbekistan";
>
> ### 2. xushnud["twitter"] = "@Xushnudbek1018";
>
> ## 3) . and [] qaysi biri birinchi bajariladi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
>
> ## 4) Challange: `Mening do'stlarim Arslon, Shoxzods. Mening eng yaxshi do'stim Nurbek.`

![alt text](/images/object/add_property.png)

# 13. Object Methods

> ## 1) Object ichida kelgan har qanday function `method` dep ataladi

        const xushnud = {
             birthYear: 2000,
             hasDriversLicense: false,
             calcAge: function (birthYear) {
                return new Date().getFullYear() - birthYear;
             },
        };
        console.log(xushnud.calcAge(2000)); // 23
        console.log(xushnud["calcAge"](2000)); // 23

> ## 2) `this` kalit so'zi.
>
> ### 1) `this` kalit so'zi `method` ni chaqirayotgan objectga ishora qiladi

        const xushnud = {
             birthYear: 2000,
             hasDriversLicense: false,
             calcAge: function () {
               return new Date().getFullYear() - this.birthYear;
             },
        };
        console.log(xushnud.calcAge(2000));
        console.log(xushnud["calcAge"](2000));

> ### 2) this kalit so'zi orqali objectga property qo'shish

         const xushnud = {
             birthYear: 2000,
             hasDriversLicense: false,
             calcAge: function () {
                this.age = new Date().getFullYear() - this.birthYear;
                return this.age;
             },
        };
        console.log(xushnud.calcAge());
        console.log(xushnud.age);

> ### 3) Challange: object property lardan foydalanib `getSummery` nomli function tuzilishi kerak. U: `Mening ismim Xushnudbek. Hozirda 23 yoshdaman. Men teacher va frontend developer bo'lib ishlayman. Mening haydovchilik guvohnomam bor || ro'q.`

# 14. Coding Challenge #3

# 15. Iteration The for Loop

        console.log(`1 marta ko'tarish 🏋️‍♂️`);
        console.log(`2 marta ko'tarish 🏋️‍♂️`);
        console.log(`3 marta ko'tarish 🏋️‍♂️`);
        console.log(`4 marta ko'tarish 🏋️‍♂️`);
        console.log(`5 marta ko'tarish 🏋️‍♂️`);

## Dasturlashda tsikllar kod blokini takrorlash uchun ishlatiladi.

![alt text](/images/loop/for__loop.png)

> ## 1) `initialExpression` o'zgaruvchilarni ishga tushiradi va/yoki e'lon qiladi va faqat bir marta bajaradi.

> ## 2) `Condition(vaziyat)` baholanadi.
>
> ### 1. Agar shart `false` bo'lsa, for tsikli tugatiladi.
>
> ### 2. Agar shart `true` bo'lsa, for tsikli ichidagi kod bloki bajariladi.

> ## 3) `updateExpression` shart `true` bo'lsa, initialExpression `qiymatini yangilaydi`.

    for (let rep = 1; rep <= 5; rep++){
        console.log(`${rep} marta ko'tarish 🏋️‍♂️`);
    }

# 16. Looping Arrays, Breaking and Continuing

> ## 1) Objectni `length` ga asoslangan holda shartni tekshirish:

      const xushnud = [
          "Xushnudbek",
          "Raimov",
          2023 - 2000,
          ["teacher", "frontend developer"],
          ["Jonas", "Ronaldo", "Arslon"],
        ];

        for (let i = 0; i <= xushnud.length - 1; i++) {
           console.log(xushnud[i], typeof xushnud[i]);
        }

> ## 2) Challange: 👆 yuqoridagi arrayning qiymatlarining type dan yangi array yaratish.` Example: [boolean, string,...]`, index || push
>
> ## 3) Challange: [1991,2007,1969,2020] bu arrayda tug'ilgan yillar ko'rsatilgan. Hozirgi yoshlarni array ko'rinishida chiqarish.
>
> ## 4) Continue: `continue` bu joriy sikl dan keyingisiga o'tkazib yuborish

        const xushnud = [
           "Xushnudbek",
           "Raimov",
           2023 - 2000,
           ["teacher", "frontend developer"],
           ["Jonas", "Ronaldo", "Arslon"],
        ];

        for (let i = 0; i <= xushnud.length - 1; i++) {
           if (typeof xushnud[i] !== "string") continue;
          console.log(xushnud[i], typeof xushnud[i]);
        }

        // Xushnudbek, string
        // Raimov, string

> ## 5) Brea k: `break` bu butun sikldan to'xtatish

        const xushnud = [
           "Xushnudbek",
           "Raimov",
           true,
           2023 - 2000,
           ["teacher", "frontend developer"],
           ["Jonas", "Ronaldo", "Arslon"],
        ];

        for (let i = 0; i <= xushnud.length - 1; i++) {
           if (typeof xushnud[i] === "number") break;
           console.log(xushnud[i], typeof xushnud[i]);
        }

# 17. Looping Backwards and Loops in Loops

> ## 1) Looping Backwards

        const xushnud = [
          "Xushnudbek",
          "Raimov",
          true,
          2023 - 2000,
          ["teacher", "frontend developer"],
          ["Jonas", "Ronaldo", "Arslon"],
        ];

        for (let i = xushnud.length - 1; i >= 0; i--) {
          console.log(xushnud[i]);
        }

> ## 2) Loops in Loops

        for (let m = 1; m <= 3; m++) {
          console.log(`----- ${m} mashq -----`);

          for (let i = 1; i <= 5; i++) {
            console.log(`${i} marta ko'tarish 🏋️‍♂️`);
          }
        }

# 18. The while Loop

       1)  let i = 0;

        while (i <= 5) {
          console.log(`${i} marta ko'tarish 🏋️‍♂️`);
          i++;
        }

## Counter kerak bo'lmaganda while foydali.

        2) let dice = Math.trunc(Math.random() * 6) + 1;

        while (dice !== 6) {
          console.log(`Bizga tushgan raqam ${dice}`);
          dice = Math.trunc(Math.random() \* 6) + 1;
          if (dice === 6) console.log(`6 raqami tushdi o'yin tugadi...`);
        }

# 3?. https://javascript.info/function-basics

# 4?. https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/
