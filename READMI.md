# 1. Game: Guess My Number

> ## 1) document.querySelector(".message") // `<p class="message">Start guessing...</p>`
>
> ## 2) document.querySelector(".message").textContent // `Start guessing...`

# 2. What's the DOM and DOM Manipulation

> ## 1) Books

> ## 2) 1. getElementById() – select an element by id.
>
> ## 2. getElementsByName() – (input,select ...)select elements by name.
>
> ## 3. getElementsByTagName() – select elements by a tag name.
>
> ## 4. getElementsByClassName() – select elements by one or more class names.
>
> ## 5. querySelector() – select elements by CSS selectors.
>
> ## 2) `textContent` = document.querySelector(".message").textContent = "🎉 Correct number";

        document.querySelector(".number").textContent = 13;
        document.querySelector(".score").textContent = 10;

> ![alt text](/images/textContent.png)
>
> ## `value` = document.querySelector(".guess").value = 20;

        document.querySelector(".guess").value = 20;

> ![alt text](/images/value.png)

# 3. Handling Click Events

> ## element.`addEventListener(event, function(), useCapture)`;
>
> ### 1) `event` : tinglash uchun hodisa turini ko'rsatadigan qator.
>
> ### 2) `function()` : voqea sodir bo'lgandan keyin biz bajarmoqchi bo'lgan funksiya
>
> ### 3) `useCapture` : mantiqiy qiymat sukut bo'yicha "false" ga o'rnatiladi va hodisa tarqalishini boshqarish uchun ishlatiladi, bu erda true qiymati hodisani yozib olish bosqichini va "false" hodisaning ko'pikli bosqichini ko'rsatadi, bu ixtiyoriy parametr

# Game conditions 🎮:

## 1) Kiritilgan qiymatni bo'sh emasligini tekshirish

## 2) Tasodifiy yashirin raqam yaratish

## 3) Kiritilgan qiymat bilan solishtirish

## 4) Noto'g'ri raqamda ballni(score) pasaytirsh

## 5) Imkoniyatlar soni tugaganini bildirish

## 6) O'yinchi yutganidan background-color ni o'zgartirish

## 7) Coding Challenge: O'yinni qayta o'rnatish.

## 8) Highscore: Eng tez topgani.

# https://guess-numbers.netlify.app/
