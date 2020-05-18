const $ = require('jquery');

module.exports = function () {
  const menu = document.querySelector('.header-navigation__list-wrap'),
      menuItem = document.querySelectorAll('.header-navigation-item'),
      hamburger = document.querySelector('.header__burger-button'),
      socialMenu = document.querySelector('.header-socials__list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list-wrap--active');
    socialMenu.classList.toggle('header-socials__list--active');
    document.body.classList.toggle('lock');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list-wrap--active');
      socialMenu.classList.toggle('header-socials__list--active');
    })
  });
}
