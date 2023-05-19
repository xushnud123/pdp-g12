1. Hyperlinks

   # Redirect new HTML fil

   # Go to section

2. `<video width="320" height="240" controls> <source src="movie.mp4" type="video/mp4">Your browser does not support the video tag. </video>` attributes: `loop, autoplay, controls`

FINISH:

3. Tables `table,tr, th ,td, thead, tbody`

4. Containers: `<div></div>` and `<span></span>`
   <!-- todo: Block-level element har doim yangi qatordan boshlanadi va butun bo'sh joyni oladi. -->
   <!-- todo: Inline element content kengligicha egallaydi holos -->

5. Semantic elementlar

   # article

    <!--* Misollar: forum posti, jurnal yoki gazeta maqolasi yoki blog yozuvi, mahsulot kartasi, foydalanuvchi tomonidan yuborilgan sharh, interaktiv vidjet yoki gadjet yoki boshqa har qanday mustaqil tarkib elementi. -->

   # figure

      <!-- `<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption> </figure> -->

   # mark

   # time `<time datetime="2023-05-17 17:00">17-may 2023 yil 17:00</time>`

   # header

   # main

   # aside

   # section

6. CSS

   # Inline

   # Internal

   # External

   FINISH:

7. Normalize css
   `https://necolas.github.io/normalize.css/`

8. ## Selectors

   # Type `body {}`

   # Id `#product{}`

   # Class `.product{}`

   # Attribute

   # > `a[href="https://www.google.com"]{}`

   # > `a[href*="google"]{}`

   # > `a[href^="https"]{}`

   # > `a[href$="com"]{}`

   # > `a[href^="https"][href$="com"]{}`

<!-- Eslatmalar -->

9.  ## Relational selectors

    # `#product p` <!--todo: product id lik element ichidagi barcha p elementlariga tasir qiladi-->

    # `#product > p` <!--todo: product id lik element ichidagi tog'ridan-to'g'ri bolasi bo'lgan p elementlariga tasir qiladi-->

    # `#product + p` <!--todo: product id lik elementdan keyin kelgan p elementiga tasir qiladi.Element bilan p o'rtasida boshqa element bo'lsa tasir qilmaydi-->

    # `#product ~ p` <!--todo: product id lik elementdan keyin kelgan p elementlariga tasir qiladi-->

    FINISH:

10. ## Pseudo class Selectors

    # `first-child` <!-- todo: tag turidan qatiy nazar birinchi elementni oladi -->

    # `first-of-type` <!-- todo: harxil turdagi tag larning birinchisini oladi -->

    # `last-child` <!-- todo: tag turidan qatiy nazar oxirgisini oladi -->

    # `last-of-type` <!-- todo: harxil turdagi tag larning oxirgisini oladi -->

    # `:nth-child(odd)` <!-- todo: barcha toq o'rindagi elementlarni oladi -->

    # `:nth-child(even)` <!-- todo: barcha juft o'rindagi elementlarni oladi -->

    # `:nth-child(3n)` <!-- todo: n karrali qilib formula yozishimiz ham mumkin -->

    # `:not` <!-- todo: keraksiz elemntlarni chiqarib qolganlariga style berish uchun-->

    # `:visited` <!-- todo: kirilgan linklarga style berish uchun -->

    # `:link` <!-- todo: kirilmagan linklarga style berish uchun -->

    # `:hover` <!-- todo: sichqonchani link ustiga etganda style berish uchun -->

    # `:focus` <!-- todo: tab bilan bosilganda style berish uchun -->

    # `:active` <!--todo:: :active CSS psevdo-sinfi foydalanuvchi tomonidan faollashtirilayotgan elementni (masalan, tugma) ifodalaydi. Sichqonchadan foydalanganda "faollashtirish" odatda foydalanuvchi sichqonchaning asosiy tugmachasini bosganida boshlanadi. -->

11. ## Pseudo-element Selectors

    # `::first-letter` <!-- todo: ::first-letter CSS psevdoelementi blok-darajali elementning birinchi qatorining birinchi harfiga uslublarni qo'llaydi, lekin faqat boshqa kontent (masalan, tasvirlar yoki qator jadvallar) bo'lmasa. -->

    # `::first-line` <!-- todo: birinchi qatorga style berish uchun-->

    # `::selection` <!--todo: ::selection CSS psevdo-elementi hujjatning foydalanuvchi tomonidan ta'kidlangan qismiga uslublarni qo'llaydi (masalan, matn bo'ylab sichqonchani bosish va sudrab borish). -->

    # `::before, ::after`

12. ## Selector specificity

    # `Css: !important` > `id` > `class` > `selector`

13. ## Inheritance

14. ## Color

    # `RGB`, `RGBA`, `rgb(i,i,i)`

    # `HEX`, `#iiiiii`

15. ## Gradients

    # `background: linear-gradient(dodgerblue, deeppink)`

    # `background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);`

    # `to right`

    # `to left`

    # `to bottom`

    # `to top`,

    # ` bottom right` kombinatsiyalari

    # `45deg`

    # `background: linear-gradient(dodgerblue, 30% deeppink);`

    # `background: radial-gradient(dodgerblue, deeppink);`

    # `background: radial-gradient(circle,dodgerblue, deeppink);`

    # `background: radial-gradient(circle at top left,dodgerblue, deeppink);`

16. # Soyalar: box-shadow `box-shadow:4px 4px 30px grey`

17. # Chegaralar: border `border: 1px solid red;` , border-radius

18. # `<button type=""></button>`

# CSS SHAPES `css-tricks`

# `ul>li*5{item $}`

# `list-style none`
