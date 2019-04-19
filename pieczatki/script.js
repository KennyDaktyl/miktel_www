//WYSWIETLANIE OFERTY
const artykul = document.querySelector(".glowny");
const bt1 = document.querySelector(".item1");
const bt11 = document.querySelector(".oferta1");
const bt2 = document.querySelector(".item2");
const bt22 = document.querySelector(".oferta2");
const bt3 = document.querySelector(".item3");
const bt33 = document.querySelector(".oferta3");
const bt4 = document.querySelector(".item4");
const bt44 = document.querySelector(".oferta4");
const bt5 = document.querySelector(".item5");
const bt55 = document.querySelector(".oferta5");
const bt6 = document.querySelector(".item6");
const bt66 = document.querySelector(".oferta6");
const bt7 = document.querySelector(".item7");
const bt77 = document.querySelector(".oferta7");
const bt8 = document.querySelector(".item8");
const bt88 = document.querySelector(".oferta8");
const bt9 = document.querySelector(".item9");
const bt99 = document.querySelector(".oferta9");

const of0 = document.querySelector(".glowny");
const of1 = document.querySelector(".imienne");
const of2 = document.querySelector(".firmowe");
const of3 = document.querySelector(".zlogiem");
const of4 = document.querySelector(".duze");
const of5 = document.querySelector(".mouse");
const of6 = document.querySelector(".circle");
const of7 = document.querySelector(".kwadratowe");
const of8 = document.querySelector(".stemple");
const of9 = document.querySelector(".datowniki");



const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");
const menu = document.querySelector(".lewa");

open.addEventListener("click", function () {
    open.classList.remove("active")
    close.classList.add("active")
    menu.classList.toggle("active")
    of0.classList.add("active")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    var b = $('.lewa').height() + $('.logo').height();
    $('.glowny').css('margin-top', b + 20);
    // $('body,html').animate({
    //     scrollTop: $('.glowny').offset().top
    // })


})

close.addEventListener("click", function () {
    open.classList.add("active")
    close.classList.remove("active")
    menu.classList.remove("active")
    of0.classList.remove("active")
    $('.glowny').css('margin-top', 10 + $('.logo').height());

})

bt1.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.add("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})


bt2.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.add("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt3.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.add("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt4.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.add("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt5.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.add("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt6.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.add("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt7.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.add("active")
    of8.classList.remove("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt8.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.add("active")
    of9.classList.remove("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})

bt9.addEventListener("click", function () {
    // of0.classList.add("none")
    of1.classList.remove("active")
    of2.classList.remove("active")
    of3.classList.remove("active")
    of4.classList.remove("active")
    of5.classList.remove("active")
    of6.classList.remove("active")
    of7.classList.remove("active")
    of8.classList.remove("active")
    of9.classList.add("active")
    menu.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    $('.glowny').css('margin-top', 10);
})




//SCROLLOWANIE PO WYBORZE


$('.item1').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.imienne').offset().top
    })
})

$('.item2').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.firmowe').offset().top
    })
})

$('.item3').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.zlogiem').offset().top
    })
})

$('.item4').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.duze').offset().top
    })
})

$('.item5').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.mouse').offset().top
    })
})


$('.item6').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.circle').offset().top
    })
})

$('.item7').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.kwadratowe').offset().top
    })
})

$('.item8').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.stemple').offset().top
    })
})

$('.item9').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.datowniki').offset().top
    })
})

// $('.fa-bars').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.glowny').offset().top
//     })
// })




// //Margin top dla artukułow

// // const heightTyt = document.querySelector(".tytul");
const marTopMain = document.querySelector(".logo");

var a = $('.logo').height();
$('.of').css('margin-top', a + 10);

// var a = $('.logo').height();
// $('.glowny').css('margin-top', a + 10);