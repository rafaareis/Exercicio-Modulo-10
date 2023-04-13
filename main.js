$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
    });

    $('#promo-carousel').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
    });
});