require('regenerator-runtime');
const slick = require('slick-carousel');
const $ = require('jquery');

window.addEventListener('DOMContentLoaded', () => {
  let slickIndex = 0;

  $(document).ready(function(){
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
    $(".promo-slider").on('afterChange', function(event, slick, currentSlide){
      $("#cp").text(currentSlide + 1);
       slickIndex = $('.slick-current').attr("data-slick-index")
    });
  });

  const menu = document.querySelector('.header-navigation__list-wrap'),
      menuItem = document.querySelectorAll('.header-navigation-item'),
      hamburger = document.querySelector('.header__burger-button'),
      socialMenu = document.querySelector('.header-socials__list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list-wrap--active');
    socialMenu.classList.toggle('header-socials__list--active');
    $('body').toggleClass('lock');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list-wrap--active');
      socialMenu.classList.toggle('header-socials__list--active');
    })
  });

  const tabs = () => {
    const bindTabs = (triggerSelector, contentSelector, activeSelector) => {
      const trigger = document.querySelectorAll(triggerSelector);
      const content = Array.from(document.querySelectorAll(contentSelector));

      const active = activeSelector;
      const currentTabs = content.findIndex((item, i) => i==slickIndex)
      const currentShowSlide = content[currentTabs]
      const tabsContainer = currentShowSlide.querySelector('.promo-slider__tabs-catalog');
      console.log(currentShowSlide.children)
      const child = [...currentShowSlide.children]

      console.log(child)


      trigger.forEach((item, i) => {
        item.addEventListener('click', (e) => {
          hideTabs();
          e.preventDefault();
          showTabs(i);
        })
      });

      const hideTabs = () => {
        trigger.forEach((item) => {
          item.classList.remove(active);
        });

        child.forEach((item) => {
          item.style.display = 'none';
        })
      };

      const showTabs = (i) => {
        trigger[i].classList.add(active);
        child.forEach((item, g) => {
          if (g == i) {
            item.style.display = 'block'
          }
        } )
      }

      hideTabs();
      showTabs(0)
    };

    bindTabs('.promo-slider___tab', '.promo-slider__tabs-catalog', 'promo-slider___tab--active');
  };

  tabs();

})