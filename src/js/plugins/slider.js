const slick = require('slick-carousel');
const $ = require('jquery');
const tabs = require('./tabs.js');

$(document).ready(function(){

  $(".promo-slider").on('init afterChange', function(event, slick, currentSlide = 0){
    let slider = slick.$slides[currentSlide]
    $("#cp").text(currentSlide + 1);
    tabs(slider)
  });

  $('.promo-slider').slick({
    arrows: true,
    infinite: false,
    dots: false,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  });

});




