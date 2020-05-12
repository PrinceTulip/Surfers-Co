require('regenerator-runtime');

window.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.header-navigation__list'),
      menuItem = document.querySelectorAll('.header-navigation-item'),
      hamburger = document.querySelector('.header__burger-button'),
      socialMenu = document.querySelector('.header-socials__list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list--active');
    socialMenu.classList.toggle('header-socials__list--active');
    $('body').toggleClass('lock');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list--active');
      socialMenu.classList.toggle('header-socials__list--active');
    })
  });

})