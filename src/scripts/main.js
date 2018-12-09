// Main
$(document).ready(function() {
    // --------HOME1--------
    $('.home1 .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    $('.home_6 .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: false,
        // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    $('.home-clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            990: {
                items: 6,
            }
        }
    });
});