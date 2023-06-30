# 1. # JavaScript Variables

        ## let, const ✅

        ## var, writing without variables ❌

# 2. # JavaScript Data Types

        ## null - belgilangan , lekin qiymati yo'q o'zgaruvchidir

        ## undefined - mavjud bo'lmagan narsaga ishora qiluvchi o'zgaruvchi va o'zgaruvchi hech narsa sifatida aniqlanmagan.

# 3. # Basic Operators

        ## Math Operators: -,+,/,\*,\*\*,%

        ## Assignment Operators: +=,-=,\*=,++,--

        ## Comparison Operators: >,<,>=,<=

# 4. # Operator precedence

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

        ## example: x = y = 25-10-5
        ## example: a + b / 2

# 5. # Coding Challenge #1

# 6. # String and Template literals

        ## single quotes: '', double quotes= "", backticks= ``

        ## concatenate records by + `"Java" + "Script" = "JavaScript" `, "Mening ismim {Xushnudbek}, men {o'qituvchi} bo'lib ishlayman.{Dasturlash}dagi ish tajribam {2} yildan ortiq"

        ## `${}` template literals

        ## \n multi-line strings

# 7. # Taking Decisions `if else` Statements

        ## if(){} else{}

        ## Misol nomi: car license check

        ## Misol nomi: what century were you born in

# 8. Coding Challenge #2

# 9. Type Conversion

            ## "1999" + 18 = 199918

            ## Number('1999') = 1999

            ## Number('Xushnudbek') = NaN && typeof = number

            ## String('23') = '23'

        # Coercion
            ## "Men " + 23 + " yoshdaman"

            ## "23" - "10" - 3 = 10

            ## "23" - "10" - 'b' = NaN

            ## "23" - "10" + 'b' = 13b

            ## "23" * "2" = 46

            ## "23" / "2" = 11.5

            ## "23" > "3"

> ## 1) Agar qiymatlardan biri satr bo'lsa, boshqa operand satrga aylantiriladi.

> ## 2) Agar qiymatlardan biri raqam bo'lsa, boshqa operand raqamga aylanadi.

> ## 3)Agar qiymatlardan biri mantiqiy bo'lsa, u raqamga aylantiriladi (haqiqat 1 ga, noto'g'ri esa 0 ga aylanadi).

> ## 4)Agar bitta operand ob'ekt, ikkinchisi esa ibtidoiy qiymat bo'lsa, taqqoslashdan oldin ob'ekt ibtidoiy qiymatga aylanadi.

> ## 5)Agar qiymatlardan biri null yoki aniqlanmagan bo'lsa, ikkinchisi ham rostni qaytarish uchun null yoki noaniq bo'lishi kerak. Aks holda u false qaytaradi.

# 10. "Nima chiqishini tahmin qil?" o'yini

        1) let n = "1" + 1
           n = n - 1
           console.log(n) = ?

        2) let m = 2 + 3 + 4 + "5"
           console.log(m) = ?

        3) let k = "10" - "4" - "3" - 2 + "5"
           console.log(k) = ?

# 11. Booleanga aylanadigan qiymatlar

> ## Falsy value
>
> > ### 0, "", undefined, null, false, NaN

> ## Truthy value
>
> > ### {}, "Xushnudbek", [], function(){}

        1) let s
           if(s){
                console.log(`${s} bu rost(true) qiymat sifatida ko'riladi`)
           }
           else{
                console.log(`${s} bu yolg'on(false) qiymat sifatida ko'riladi")
           }

# 12. Equality Operators `==` vs `===`

> ## Double equals (==) name: "loose equality"
>
> > ### 1) 5 == "5" ✅
> >
> > ### 1) true == "Xushnudbek" ❌
> >
> > ### 3) 5 == 'Xushnudbek' ❌

> ## Triple equals (===) name: "strict equality"
>
> > ### 1) 2 === 2 ✅
> >
> > ### 2) 2 === "2" ❌

        1) const s = 18
           if(s == 18){
                console.log(`${s} qiymatimiz (loose equality) orqali tekshirilganda teng bo'ldi`)
           }
           if(s === 18){
                console.log(`${s} qiymatimiz (strict equality) orqali tekshirilganda teng bo'ldi`)
           }

        2) const favorite = prompt("Sevimli 😍 raqamingizni kiriting 👇");
           if (favorite == 7) {
                console.log("Demak siz Ronaldo ni muhlisisiz!🥳");
           }
           if (Number(favorite) === 10) {
                console.log("Demak siz Messini ni muhlisisiz!🥳");
           }
           if(!favorite) {
           console.log("Raqam kiritmadingiz❓");
           }

# 13. Boolean Logic: AND, OR & NOT OPERATORS

        a = 16
        A: Yoshi 20 dan katta yoki teng
        B: Yoshi 30 dan kichik
        Misollar:
        !A = ?
        A AND B = ?
        A OR B = ?
        !A AND B = ?
        A OR !B = ?

# 14. Logical Operators

> ## 1) &&, || , !

        const hasDriversLicense = true
        const hasGoodVision = true

        if(hasDriversLicense && hasGoodVisio){
          console.log("Tabriklaymiz siz mashina hayday olasiz🎉")
        }
        else {
          console.log("Sizga mashina haydashga ruhsat yo'q 🙅‍♂️")
        }

# 15. Coding Challange #3

# 16. The switch Statement

> ### switch(key){
>
> ### case 'name': console.log('name') break;
>
> ### default: console.log('default')
>
> ### }

        1) const key = 'Sunday'
        switch(key){
          case 'Sunday': console.log('Sunday') break;
          case 'Monday': console.log('Monday') break;
          case 'Tuesday': console.log('Tuesday') break;
          case 'Wednesday': console.log('Wednesday') break;
          case 'Thursday': console.log('Thursday') break;
          case 'Friday': console.log('Friday') break;
          case 'Saturday"': console.log('Saturday') break;
          default: console.log('1') break;
        }

        2) 👆 if{} else{} = ?

# 17. Statements and Expressions

> ## 1) Expressions (bu qiymat hosil qiladigan har qanday kod)
>
> > ### 3+4
> >
> > ### 1991
> >
> > ### 'Hello 👋'
> >
> > ### true && false && !false
>
> ## 2) Statements (bu muayyan harakatni bajarish uchun ko'rsatma)
>
> > ### if (23 > 10) {
> >
> > ### const str = 'hello 👋'
> >
> > ### }

     1) ❌
     console.log(`Mening yoshim ${2023-2000}, ${if(23 - 10)
     {
        const str = 'hello'
     }}`)

     2) console.log(`Mening yoshim ${2023 - 2000}, ${const firstName = "Xushnudbek"
     }
     `);

# 18. The Conditional Ternary Operator

> ## Example(misol):
>
> > ### const age = 23
> >
> > ### age >= 18 `?` console.log("Tabriklayman siz haydovchilik guvohnomasini olish yoshidasiz 🎉") `:` console.log(`Kechirasiz sizga ${18 - age} - yil bor 🙅‍♂️`)
>
> ## 2) 👆 if{} else{} = ?

# 19. Coding Challenge #4

6?. # Free: JS Coding Challenger

7?. # https://exercism.org/

8?. # https://the-winter.github.io/codingjs/
