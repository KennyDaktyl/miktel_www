const kats = [...document.querySelectorAll('.kat ul')]


const bt1 = document.querySelector(".menuJeden");
const bt2 = document.querySelector(".menuDwa");
const bt3 = document.querySelector(".menuTrzy");
const bt4 = document.querySelector(".menuCztery");

const pod4 = document.querySelector(".menuCztery ul");

let active = 0;

const changeKat = () => {
    const activeKate = kats.findIndex(Kate =>
        Kate.classList.contains('active'));
    kats[activeKate].classList.remove('active')
    kats[active].classList.add('active')
}

// changeKat()

bt1.addEventListener("click", function () {
    const activeKate = kats.findIndex(Kate =>
        Kate.classList.contains('active'));
    if (activeKate === -1) {
        kats[0].classList.toggle('active');
    }
    kats[activeKate].classList.remove('active')
})

bt2.addEventListener("click", function () {
    const activeKate = kats.findIndex(Kate =>
        Kate.classList.contains('active'));
    if (activeKate === -1) {
        kats[1].classList.toggle('active');
    }
    kats[activeKate].classList.remove('active')
})

bt3.addEventListener("click", function () {
    const activeKate = kats.findIndex(Kate =>
        Kate.classList.contains('active'));
    if (activeKate === -1) {
        kats[2].classList.toggle('active');
    }
    kats[activeKate].classList.remove('active')
})

bt4.addEventListener("mouseover", function () {
    const activeKate = kats.findIndex(Kate =>
        Kate.classList.contains('active'));
    if (activeKate === -1) {
        kats[3].classList.toggle('active');
    }
    kats[activeKate].classList.remove('active')
    pod4.classList.toggle('active')
})



pod4.addEventListener("mouseout", function () {
    pod4.classList.remove('active')

})