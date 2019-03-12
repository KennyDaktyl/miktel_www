//WYSWIETLANIE OFERTY
const bt0 = document.querySelector(".motto");
const bt1 = document.querySelector(".nowe");
const bt11 = document.querySelector(".oferta1");
const bt2 = document.querySelector(".uzywane");
const bt22 = document.querySelector(".oferta2");
const bt3 = document.querySelector(".komisowe");
const bt33 = document.querySelector(".oferta3");
const bt4 = document.querySelector(".seniora");
const bt44 = document.querySelector(".oferta4");
const bt5 = document.querySelector(".solidne");
const bt55 = document.querySelector(".oferta5");
const bt6 = document.querySelector(".klasyczne");
const bt66 = document.querySelector(".oferta6");


const of0 = document.querySelector(".of0");
const of1 = document.querySelector(".of1");
const of2 = document.querySelector(".of2");
const of3 = document.querySelector(".of3");
const of4 = document.querySelector(".of4");
const of5 = document.querySelector(".of5");
const of6 = document.querySelector(".of6");




bt1.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.add("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})


bt11.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.add("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt2.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.add("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
})


bt22.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.add("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt3.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.add("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt33.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.add("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt4.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.add("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt44.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.add("active")
    of5.classList.remove("active")
    of6.classList.remove("active")

})

bt5.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.add("active")
    of6.classList.remove("active")

})

bt55.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.add("active")
    of6.classList.remove("active")

})

bt6.addEventListener("click", function () {
    of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.add("active")

})

bt66.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.add("active")

})


//SCROLLOWANIE PO WYBORZE
$('.nowe').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s1').offset().top - $('.s0').offset().top
    })
})

$('.uzywane').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s2').offset().top - $('.s0').offset().top
    })
})

$('.komisowe').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s3').offset().top - $('.s0').offset().top
    })
})

$('.seniora').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s4').offset().top - $('.s0').offset().top
    })
})

$('.solidne').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s5').offset().top - $('.s0').offset().top
    })
})


$('.klasyczne').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s6').offset().top - $('.s0').offset().top
    })
})

$('.item7').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.s7').offset().top - $('.s0').offset().top
    })
})


//Margin top dla artukułow

// const heightTyt = document.querySelector(".tytul");
// const marTopMain = document.querySelector(".main");

var a = $('.tytul').height();
$('.main').css('margin-top', a);