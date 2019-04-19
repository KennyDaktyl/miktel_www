const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");
const menu = document.querySelector(".navi");
const mleko = document.querySelector(".mleko");
const kontakt = document.querySelector(".kontakt");

// var a = $('.navi').height() + 20;

open.addEventListener("click", function () {
    open.classList.remove("active")
    close.classList.add("active")
    menu.classList.add("active")
    mleko.classList.add("active")
})

close.addEventListener("click", function () {
    open.classList.add("active")
    close.classList.remove("active")
    menu.classList.remove("active")
    mleko.classList.remove("active")
})

kontakt.addEventListener("click", function () {
    open.classList.add("active")
    close.classList.remove("active")
    menu.classList.remove("active")
    mleko.classList.remove("active")

})

$('.kontakt').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.danetele').offset().top
    })
})

const slideList = [{
        img: "img/klucze+mieszkaniowe+duzy+wybor.jpg",
        text: "Klucze mieszkaniowe"
    },
    {
        img: "img/urzadzenia+do+kluczy+i+immobilizerow.jpg",
        text: "Immobilizery"
    },
    {
        img: "img/wymiana+obudowy+klucze+samochodowe.jpg",
        text: "Naprawiamy - Testujemy"
    },
    {
        img: "img/wymiana+obudowy+klucze+samochodowe+3.jpg",
        text: "Zmieniamy obudowy"
    },
    {
        img: "img/dociecie+grota+klucz+samochowy+2.jpg",
        text: "Docinamy groty"
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]; //Zamiana node listy na tablice aby wywołac dodatki :)

//Interfejs 
const time = 3500;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot =>
        dot.classList.contains('active'));
    dots[activeDot].classList.remove('active')
    dots[active].classList.add('active')
}

const changeSilde = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
setInterval(changeSilde, time)