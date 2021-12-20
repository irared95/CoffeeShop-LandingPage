document.addEventListener('DOMContentLoaded', function() {

    $('.products__slider--js').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: false,
        // prevArrow: '<div class="products__arrow-prev products__arrow"><img src="./image/arrow-green-left.svg" alt="arrow"></div>',
        // nextArrow: '<div class="products__arrow-next products__arrow"><img src="./image/arrow-green-right.svg" alt="arrow"></div>',

        // responsive: [{
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 500,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});