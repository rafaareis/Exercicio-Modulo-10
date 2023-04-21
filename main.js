$(document).ready(function() {

    $('.menu').click(function () {
        $('nav').slideToggle();
    })

    $('.menu').on('click', '#menu-situation',function(e) {
        console.log('cliquei');
        if($(this).hasClass('off')){
            $(this).removeClass('off');
            $(this).addClass('on');
            $('.menu-hamburger').css({display: "none"});
            $('.menu-closed').css({display: "block"});
        } else {
            $(this).removeClass('on');
            $(this).addClass('off');
            $('.menu-hamburger').css({display: "block"});
            $('.menu-closed').css({display: "none"});

        }
    })

    $('.off').click(function() {

    })

    $('.on').click(function() {

    })

    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
    });

    $('#promo-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
    });

    $('#lanc-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
    });
});