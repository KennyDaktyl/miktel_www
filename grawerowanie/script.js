//WYSWIETLANIE OFERTY



const artykul = document.querySelector(".glowny");
const bt1 = document.querySelector(".item1");
const bt2 = document.querySelector(".item2");
const bt3 = document.querySelector(".item3");
const bt4 = document.querySelector(".item4");
const bt5 = document.querySelector(".item5");
const bt6 = document.querySelector(".item6");

const foto = document.querySelector(".fotoFront")

const mleko = document.querySelector(".mleko");
const menuGraw = document.querySelector(".grawMenu");
const menuGraw2 = document.querySelector(".ciecieMenu");
const menuGraw3 = document.querySelector(".znakMenu");
const menuGraw4 = document.querySelector(".prodMenu");
const menuGraw5 = document.querySelector(".keysMenu");
const menuGraw6 = document.querySelector(".kontMenu");

const of0 = document.querySelector(".glowny");
const of1 = document.querySelector(".imienne");


const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-window-close");
const menu = document.querySelector(".menu");

const down = document.querySelector(".down1");
const up = document.querySelector(".up1");
const down2 = document.querySelector(".down2");
const up2 = document.querySelector(".up2");
const down3 = document.querySelector(".down3");
const up3 = document.querySelector(".up3");
const down4 = document.querySelector(".down4");
const up4 = document.querySelector(".up4");
const down5 = document.querySelector(".down5");
const up5 = document.querySelector(".up5");
const down6 = document.querySelector(".down6");
const up6 = document.querySelector(".up6");

const Art11 = document.querySelector(".Arty11");
const Art12 = document.querySelector(".Arty12");
const Art13 = document.querySelector(".Arty13");
const Art14 = document.querySelector(".Arty14");
const Art15 = document.querySelector(".Arty15");
const Art16 = document.querySelector(".Arty16");
const Art18 = document.querySelector(".Arty18");

const menuMale = document.querySelector(".menuMale");
const tab = document.querySelector(".tab");
const tapp = document.querySelector(".tapp");
const niesm = document.querySelector(".niesm");
const zdj = document.querySelector(".zdjecia");
const brelok = document.querySelector(".brelok");
const wood = document.querySelector(".wood");
const glass = document.querySelector(".glass");

const Art21 = document.querySelector(".Arty21");
const Art22 = document.querySelector(".Arty22");
const Art23 = document.querySelector(".Arty23");

const menuMale2 = document.querySelector(".menuMale2");
const pleksi = document.querySelector(".pleksi");
const lami = document.querySelector(".lami");
const sklejka = document.querySelector(".sklejka");

const menuMale3 = document.querySelector(".menuMale3");
const Art31 = document.querySelector(".Arty31");
const Art32 = document.querySelector(".Arty32");
const noze = document.querySelector(".noze");
const zegarki = document.querySelector(".zegarki");

const menuMale4 = document.querySelector(".menuMale4");
const Art41 = document.querySelector(".Arty41");
const Art42 = document.querySelector(".Arty42");
const Art43 = document.querySelector(".Arty43");
const Art44 = document.querySelector(".Arty44");
const Art45 = document.querySelector(".Arty45");
const Art46 = document.querySelector(".Arty46");
const Art47 = document.querySelector(".Arty47");
const Art48 = document.querySelector(".Arty48");
const Art49 = document.querySelector(".Arty49");
const Art40 = document.querySelector(".Arty40");
const Art401 = document.querySelector(".Arty401");
const Art402 = document.querySelector(".Arty402");
const Art403 = document.querySelector(".Arty403");
const certy = document.querySelector(".certy");
const logotypy = document.querySelector(".logotypy");
const hotel = document.querySelector(".hotel");
const pen = document.querySelector(".pen");
const Ident = document.querySelector(".Ident");
const Kubki = document.querySelector(".Kubki");
const logofirmowe = document.querySelector(".logof");
const medals = document.querySelector(".medals");
const gift = document.querySelector(".gift");
const dead = document.querySelector(".dead");
const info = document.querySelector(".info");
const prezes = document.querySelector(".prezes");
const korona = document.querySelector(".korona");



open.addEventListener("click", function () {
    $('.fa-bars').on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    // var d = $('.logo').height();
    // $('.grawery').css('margin-top', 0)

    mleko.classList.toggle("active")

    open.classList.remove("active")
    close.classList.add("active")
    menu.classList.add("active")
    menuMale.classList.remove("active")
    menuMale2.classList.remove("active")
    menuMale3.classList.remove("active")
    menuMale4.classList.remove("active")

    closeKat()
    // closemenuMale()
    // closemenuMale2()
    of0.classList.add("active")
    of0.classList.remove("none")

    changeArt()
    foto.classList.remove("none")
})

$(open).on('click', function () {
    $('.fotoglowne').css('margin-top', 0)
})

close.addEventListener("click", function () {
    var b = $('.logo').height();
    $('.fotoFront').css('margin-top', b);


    $('.fa-window-close').on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    mleko.classList.toggle("active")

    open.classList.add("active")
    close.classList.remove("active")
    menu.classList.remove("active")


    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")
    // menuGraw.classList.remove("active")
    // menuGraw2.classList.remove("active")
    // menuGraw3.classList.remove("active")
    // menuGraw4.classList.remove("active")
    // menuGraw5.classList.remove("active")
    // menuGraw6.classList.remove("active")
    closeKat()
    of0.classList.remove("active")

    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', 20 + $('.logo').height());  
})

bt1.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.toggle("active")
    up.classList.toggle("active")

    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 1;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale()

    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

down.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.toggle("active")
    up.classList.toggle("active")

    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 1;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale()
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

up.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.toggle("active")
    up.classList.toggle("active")
    menuGraw.classList.remove("active")


    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

bt2.addEventListener("click", function () {
    // of0.classList.add("none") 
    down.classList.add("active")
    up.classList.remove("active")

    up2.classList.toggle("active")
    down2.classList.toggle("active")

    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")


    indx = 3;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale2()
})

down2.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.add("active")
    up.classList.remove("active")

    up2.classList.toggle("active")
    down2.classList.toggle("active")

    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 3;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale2()
})

up2.addEventListener("click", function () {
    // of0.classList.add("none")
    down2.classList.toggle("active")
    up2.classList.toggle("active")
    // menuGraw.classList.toggle("active")
    menuGraw2.classList.remove("active")
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

bt3.addEventListener("click", function () {
    // of0.classList.add("none") 
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")

    up3.classList.toggle("active")
    down3.classList.toggle("active")

    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 5;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale3()

    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

down3.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")

    up3.classList.toggle("active")
    down3.classList.toggle("active")

    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 5;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale3()
})

up3.addEventListener("click", function () {
    // of0.classList.add("none")
    down3.classList.toggle("active")
    up3.classList.toggle("active")
    // menuGraw.classList.toggle("active")
    menuGraw3.classList.remove("active")
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

bt4.addEventListener("click", function () {
    // of0.classList.add("none") 
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")

    up4.classList.toggle("active")
    down4.classList.toggle("active")

    up5.classList.remove("active")
    down5.classList.add("active")
    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 7;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale4()
})

down4.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.toggle("active")
    down4.classList.toggle("active")

    indx = 7;
    changeKat()
    menuKats[indx].classList.toggle('active')
    closemenuMale4()
})

up4.addEventListener("click", function () {
    // of0.classList.add("none")
    down4.classList.toggle("active")
    up4.classList.toggle("active")
    // menuGraw.classList.toggle("active")
    menuGraw4.classList.remove("active")
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

bt5.addEventListener("click", function () {
    // of0.classList.add("none") 
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")

    up5.classList.toggle("active")
    down5.classList.toggle("active")

    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 9;
    changeKat()
    menuKats[indx].classList.toggle('active')
})

down5.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")

    up5.classList.toggle("active")
    down5.classList.toggle("active")

    up6.classList.remove("active")
    down6.classList.add("active")

    indx = 9;
    changeKat()
    menuKats[indx].classList.toggle('active')
})

up5.addEventListener("click", function () {
    // of0.classList.add("none")
    down5.classList.toggle("active")
    up5.classList.toggle("active")
    // menuGraw.classList.toggle("active")
    menuGraw5.classList.remove("active")
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

bt6.addEventListener("click", function () {
    // of0.classList.add("none") 
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")

    up6.classList.toggle("active")
    down6.classList.toggle("active")

    indx = 11;
    changeKat()
    menuKats[indx].classList.toggle('active')
})

down6.addEventListener("click", function () {
    // of0.classList.add("none")
    down.classList.add("active")
    up.classList.remove("active")
    up2.classList.remove("active")
    down2.classList.add("active")
    up3.classList.remove("active")
    down3.classList.add("active")
    up4.classList.remove("active")
    down4.classList.add("active")
    up5.classList.remove("active")
    down5.classList.add("active")

    up6.classList.toggle("active")
    down6.classList.toggle("active")


    indx = 11;
    changeKat()
    menuKats[indx].classList.toggle('active')
})

up6.addEventListener("click", function () {
    // of0.classList.add("none")
    down6.classList.toggle("active")
    up6.classList.toggle("active")
    // menuGraw.classList.toggle("active")
    menuGraw6.classList.remove("active")
    // var b = $('.menu').height() + $('.logo').height();
    // $('.glowny').css('margin-top', b + 80);
})

Art11.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art11).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    artykulyList[0].classList.add('active')
    tab.classList.add("active")

    akytwneNow = 0;
    changemenuMale()
})

Art12.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art12).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[1].classList.add('active')
    tapp.classList.add("active")
    akytwneNow = 1;
    changemenuMale()
})

Art13.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art13).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[2].classList.add('active')
    niesm.classList.add("active")
    akytwneNow = 2;
    changemenuMale()
})

Art14.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art13).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[3].classList.add('active')
    brelok.classList.add("active")
    akytwneNow = 3;
    changemenuMale()
})

Art15.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art13).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[4].classList.add('active')
    zdj.classList.add("active")
    akytwneNow = 4;
    changemenuMale()

})
Art16.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art13).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[5].classList.add('active')
    wood.classList.add("active")

    akytwneNow = 5;
    changemenuMale()
})

Art18.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art13).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")
    // artykulyList[0].classList.remove('active')
    artykulyList[6].classList.add('active')
    glass.classList.add("active")

    akytwneNow = 6;
    changemenuMale()
})

tab.addEventListener("click", function () {
    changeArt()
    artykulyList[0].classList.add('active')
    akytwneNow = 0;
    changemenuMale()
})

tapp.addEventListener("click", function () {
    changeArt()
    artykulyList[1].classList.add('active')
    akytwneNow = 1;
    changemenuMale()
})

niesm.addEventListener("click", function () {
    changeArt()
    artykulyList[2].classList.add('active')
    akytwneNow = 2;
    changemenuMale()
})

brelok.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[3].classList.add('active')
    akytwneNow = 3;
    changemenuMale()
})

zdj.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[4].classList.add('active')
    akytwneNow = 4;
    changemenuMale()
})

wood.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[5].classList.add('active')
    akytwneNow = 5;
    changemenuMale()
})

glass.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[6].classList.add('active')
    akytwneNow = 6;
    changemenuMale()
})


Art21.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art21).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale2.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[7].classList.add('active')
    pleksi.classList.add("active")

    akytwneNow = 0;
    changemenuMale2()
})

Art22.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art21).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale2.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[8].classList.add('active')
    pleksi.classList.add("active")

    akytwneNow = 1;
    changemenuMale2()
})

Art23.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art21).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale2.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[9].classList.add('active')
    pleksi.classList.add("active")

    akytwneNow = 2;
    changemenuMale2()
})

pleksi.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[7].classList.add('active')
    akytwneNow = 0;
    changemenuMale2()
})

lami.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[8].classList.add('active')
    akytwneNow = 1;
    changemenuMale2()
})

sklejka.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[9].classList.add('active')
    akytwneNow = 2;
    changemenuMale2()
})

Art31.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art31).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale3.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[10].classList.add('active')
    noze.classList.add("active")

    akytwneNow = 0;
    changemenuMale3()
})
Art32.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art32).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")
    menuMale3.classList.add("active")
    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[11].classList.add('active')
    zegarki.classList.add("active")

    akytwneNow = 0;
    changemenuMale3()
})

noze.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[10].classList.add('active')
    akytwneNow = 0;
    changemenuMale3()
})

zegarki.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[11].classList.add('active')
    akytwneNow = 1;
    changemenuMale3()
})

Art41.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[12].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 0;
    changemenuMale4()
})

$(Art41).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

certy.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[12].classList.add('active')
    akytwneNow = 0;
    changemenuMale4()
})

Art42.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[13].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 1;
    changemenuMale4()
})

$(Art42).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})
logotypy.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[13].classList.add('active')
    akytwneNow = 1;
    changemenuMale4()
})

Art43.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[14].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 2;
    changemenuMale4()
})

$(Art43).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

hotel.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[14].classList.add('active')
    akytwneNow = 2;
    changemenuMale4()
})

Art44.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[15].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 3;
    changemenuMale4()
})

$(Art44).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})


pen.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[15].classList.add('active')
    akytwneNow = 3;
    changemenuMale4()
})


Art45.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);


    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[16].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 4;
    changemenuMale4()
})

$(Art45).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})


Ident.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[16].classList.add('active')
    akytwneNow = 4;
    changemenuMale4()
})

Art46.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[17].classList.add('active')
    certy.classList.add("active")

    akytwneNow = 5;
    changemenuMale4()
})

$(Art46).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

Kubki.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[17].classList.add('active')
    akytwneNow = 5;
    changemenuMale4()
})

Art47.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[18].classList.add('active')
    logofirmowe.classList.add("active")

    akytwneNow = 6;
    changemenuMale4()
})

$(Art47).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

logofirmowe.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[18].classList.add('active')
    akytwneNow = 6;
    changemenuMale4()
})

Art48.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);



    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[19].classList.add('active')
    medals.classList.add("active")

    akytwneNow = 7;
    changemenuMale4()
})

$(Art48).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

medals.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[19].classList.add('active')
    akytwneNow = 7;
    changemenuMale4()
})

Art49.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);

    $(Art49).on('click', function () {
        $('body,html').animate({
            scrollTop: "0px"
        })
    })

    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[20].classList.add('active')
    gift.classList.add("active")

    akytwneNow = 8;
    changemenuMale4()
})

$(Art49).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

gift.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[20].classList.add('active')
    akytwneNow = 8;
    changemenuMale4()
})

Art402.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);

    // $(Art402).on('click', function () {
    //     $('body,html').animate({
    //         scrollTop: "0px"
    //     })
    // })

    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[23].classList.add('active')
    prezes.classList.add("active")

    akytwneNow = 11;
    changemenuMale4()
})

$(Art402).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

prezes.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[23].classList.add('active')
    akytwneNow = 11;
    changemenuMale4()
})

Art403.addEventListener("click", function () {
    var b = $('.logo').height() + $('.menuMale4').height();
    $('.fotoglowne').css('margin-top', b + 15);

    menu.classList.remove("active")

    menuMale4.classList.add("active")

    mleko.classList.remove("active")
    open.classList.add("active")
    close.classList.remove("active")
    foto.classList.add("none")

    artykulyList[24].classList.add('active')
    korona.classList.add("active")

    akytwneNow = 12;
    changemenuMale4()
})

$(Art403).on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})

korona.addEventListener("click", function () {
    foto.classList.add("none")
    changeArt()
    artykulyList[24].classList.add('active')
    akytwneNow = 12;
    changemenuMale4()
})
//Slider

const slideList = [{
        img: "img/grawerowanie+front+1.jpg",
        text: "Ozdabiamy prezenty"
    },
    {
        img: "img/grawerowanie+front+2.jpg",
        text: "Laserowe grawerowanie"
    },
    {
        img: "img/grawerowanie+front+3.jpg",
        text: "Grawer w drewnie"
    },
    {
        img: "img/znakowanie+w+stali+5.jpg",
        text: "Znakujemy w stali"
    },
    {
        img: "img/grawer+zabawa+edukacyjna+na+sklejce.jpg",
        text: "Tworzymy różne cuda"
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

// const itemsGraw = [...document.querySelectorAll('.grawMenu h1')];
const artykulyList = [...document.querySelectorAll('.artykuly div')];
// const activeArt = artykulyList.findIndex(el => artykulyList.classList.contains('active'));

const changeArt = () => {
    const activKat = artykulyList.findIndex(Art =>
        Art.classList.contains('active'));
    if (activKat !== -1) {
        artykulyList[activKat].classList.remove('active')
    }
}

const menuKats = [...document.querySelectorAll('.menu section')];
// const indx = 0;

const changeKat = () => {
    const activMenu = menuKats.findIndex(menuKat =>
        menuKat.classList.contains('active'));
    if (activMenu !== -1 & activMenu !== indx) {
        menuKats[activMenu].classList.remove('active')
    }
}

const closeKat = () => {
    const activMenu2 = menuKats.findIndex(ckecKat =>
        ckecKat.classList.contains('active'));
    menuKats[activMenu2].classList.remove('active')
}

const menuMaleKats = [...document.querySelectorAll('.menuMale i')];

// const akytwneNow = 0

const changemenuMale = () => {
    const activMenuMale = menuMaleKats.findIndex(menuMaleKat =>
        menuMaleKat.classList.contains('active'));
    menuMaleKats[activMenuMale].classList.remove('active')
    menuMaleKats[akytwneNow].classList.add('active')
}

const closemenuMale = () => {
    const activMenuMale12 = menuMaleKats.findIndex(menuMaleKat12 =>
        menuMaleKat12.classList.contains('active'));
    menuMaleKats[activMenuMale12].classList.remove('active')
}


const menuMaleKats2 = [...document.querySelectorAll('.menuMale2 i')];

const changemenuMale2 = () => {
    const activMenuMale2 = menuMaleKats2.findIndex(menuMaleKat2 =>
        menuMaleKat2.classList.contains('active'));
    menuMaleKats2[activMenuMale2].classList.remove('active')
    menuMaleKats2[akytwneNow].classList.add('active')
}

const closemenuMale2 = () => {
    const activMenuMale22 = menuMaleKats2.findIndex(menuMaleKat21 =>
        menuMaleKat21.classList.contains('active'));
    menuMaleKats2[activMenuMale22].classList.remove('active')
}

const menuMaleKats3 = [...document.querySelectorAll('.menuMale3 i')];

const changemenuMale3 = () => {
    const activMenuMale3 = menuMaleKats3.findIndex(menuMaleKat3 =>
        menuMaleKat3.classList.contains('active'));
    menuMaleKats3[activMenuMale3].classList.remove('active')
    menuMaleKats3[akytwneNow].classList.add('active')
}

const closemenuMale3 = () => {
    const activMenuMale33 = menuMaleKats3.findIndex(menuMaleKat31 =>
        menuMaleKat31.classList.contains('active'));
    menuMaleKats3[activMenuMale33].classList.remove('active')
}

const menuMaleKats4 = [...document.querySelectorAll('.menuMale4 i')];

const changemenuMale4 = () => {
    const activMenuMale4 = menuMaleKats4.findIndex(menuMaleKat4 =>
        menuMaleKat4.classList.contains('active'));
    menuMaleKats4[activMenuMale4].classList.remove('active')
    menuMaleKats4[akytwneNow].classList.add('active')
}

const closemenuMale4 = () => {
    const activMenuMale44 = menuMaleKats4.findIndex(menuMaleKat41 =>
        menuMaleKat41.classList.contains('active'));
    menuMaleKats4[activMenuMale44].classList.remove('active')
}

// const maleMenuList = [...document.querySelectorAll('.menuMale span')];

// maleMenuList[0].classList.add('active')

// const wyborMenu = () => {
// const activeMleko = rozmycie.findIndex(Art =>
//     rozmycie.classList.contains('active'));
//     if (activeArtykul === -1) {
//         dots[1].classList.add('active')
//     }
//     rozmycie[activeDot].classList.remove('active')
//     rozmycie[2].classList.add('active')
// }

//SCROLLOWANIE PO WYBORZE


// $('.item1').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.imienne').offset().top
//     })
// })


$('.fa-bars').on('click', function () {
    $('body,html').animate({
        scrollTop: "0px"
    })
})


// $('.item2').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.firmowe').offset().top
//     })
// })

// $('.item3').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.zlogiem').offset().top
//     })
// })

// $('.item4').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.duze').offset().top
//     })
// })

// $('.item5').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.mouse').offset().top
//     })
// })


// $('.item6').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.circle').offset().top
//     })
// })

// $('.item7').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.kwadratowe').offset().top
//     })
// })

// $('.item8').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.stemple').offset().top
//     })
// })

// $('.item9').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.datowniki').offset().top
//     })
// })

// $('.fa-bars').on('click', function () {
//     $('body,html').animate({
//         scrollTop: $('.glowny').offset().top
//     })
// })




// //Margin top dla artukułow

// // const heightTyt = document.querySelector(".tytul");
// const marTopMain = document.querySelector(".logo");

// var a = $('.logo').height();
// $('.of').css('margin-top', a + 10);

// var a = $('.logo').height();
// $('.glowny').css('margin-top', a + 10);