let navMain = document.querySelector('.main-nav');
let navMainList = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMainList.classList.contains('main-nav__list--closed')) {
    navMainList.classList.remove('main-nav__list--closed');
    navMainList.classList.add('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMainList.classList.add('main-nav__list--closed');
    navMainList.classList.remove('main-nav__list--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});
