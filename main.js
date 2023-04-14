$(document).ready(function() {

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle();
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