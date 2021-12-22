document.addEventListener('DOMContentLoaded', function() {

    $('.products__slider--js').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: false,
    });

    //slider reviews
    $('.reviews__slider--js').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: true,
        dots: true,
        dotsClass: 'dots reviews__dots',
        prevArrow: '<div class="reviews__arrow-prev reviews__arrow">' +
                '<svg xmlns="http://www.w3.org/2000/svg" stroke="white"  width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                '\t<g clip-path="url(#clip0_1_180)">\n' +
                '\t\t<path d="M23 12H5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t\t<path d="M12 19L5 12L12 5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t</g>\n' +
                '\t<defs>\n' +
                '\t\t<clipPath id="clip0_1_180">\n' +
                '\t\t\t<rect width="24" height="24" fill="white" transform="translate(24 24) rotate(180)"/>\n' +
                '\t\t</clipPath>\n' +
                '\t</defs>\n' +
                '</svg>' +
            '</div>',
        nextArrow: '<div class="reviews__arrow-next reviews__arrow">' +
                '<svg xmlns="http://www.w3.org/2000/svg" stroke="white" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                '\t<path d="M1 12.0001L19 12.0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t<path d="M12 5.00012L19 12.0001L12 19.0001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>' +
            '</div>',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});

