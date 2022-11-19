$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 600,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  });
              