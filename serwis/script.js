const menu = document.querySelector(".navi");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");

const nav1 = document.querySelector(".lcd");
const nav2 = document.querySelector(".dotyk");
const nav3 = document.querySelector(".złącza");
const nav4 = document.querySelector(".zalane");
const nav5 = document.querySelector(".android");
const nav6 = document.querySelector(".buzzer");
const nav7 = document.querySelector(".microfon");
const nav8 = document.querySelector(".data");

const front = document.querySelector(".front");

const of1 = document.querySelector(".of1");
const of2 = document.querySelector(".of2");
const of3 = document.querySelector(".of3");
const of4 = document.querySelector(".of4");
const of5 = document.querySelector(".of5");
const of6 = document.querySelector(".of6");
const of7 = document.querySelector(".of7");
const of8 = document.querySelector(".of8");


open.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.remove("active")
    close.classList.add("active")
    front.classList.add("active")
    front.classList.remove("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

close.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav1.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.add("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav2.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.add("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav3.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.add("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav4.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.add("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav5.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.add("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav6.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.add("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
})

nav7.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.add("active")
    of8.classList.remove("active")
})

nav8.addEventListener("click", function () {
    menu.classList.toggle("active")
    open.classList.add("active")
    close.classList.remove("active")
    front.classList.add("none")
    front.classList.remove("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.add("active")
})