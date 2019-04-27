const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");
const menu = document.querySelector(".navi");
const mleko = document.querySelector(".mleko");
const kontakt = document.querySelector(".kontakt");
const menuS1 = document.querySelector(".item_1");
const menuS2 = document.querySelector(".item_2");
const menuS3 = document.querySelector(".item_3");
const menuS4 = document.querySelector(".item_4");


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

$('.item1').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.item_1').offset().top - 200
    })
})

$('.item2').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.item_2').offset().top - 250
    })
})

$('.item3').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.item_3').offset().top - 250
    })
})

$('.item4').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.item_4').offset().top - 250
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