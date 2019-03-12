const menu = document.querySelector(".menuicon");

const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");
const nawi = document.querySelector(".nawigacja");
const mleko = document.querySelector(".mleko");
const sklep = document.querySelector(".sklep");
const strona2 = document.querySelector(".secendpage");
const strona3 = document.querySelector(".thirdpage");
const strona4 = document.querySelector(".blogowo");
const strona5 = document.querySelector(".danetele");

menu.addEventListener("click", function () {
    open.classList.toggle("active")
    close.classList.toggle("active")
    nawi.classList.toggle("active")
    mleko.classList.toggle("active")
    sklep.classList.toggle("active")
    strona2.classList.toggle("active")
    strona3.classList.toggle("active")
    strona4.classList.toggle("active")
    strona5.classList.toggle("active")

})