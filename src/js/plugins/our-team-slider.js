const slick = require('slick-carousel');
const $ = require('jquery');

$(document).ready(function(){

  $('.our-team__slider').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]

  });

});
