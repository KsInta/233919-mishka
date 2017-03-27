var main_nav = document.querySelector('.main-nav');

var main_menu = document.querySelector('.main-nav__list');
var user_menu = document.querySelector('.user-block__list');

var menu_condition = document.querySelector('.main-nav__toggle');

main_nav.classList.remove('main-nav--nojs');
main_nav.classList.add('main-nav--closed');

menu_condition.addEventListener("click", function(event) {
  if (main_nav.classList.contains('main-nav--closed')) {
    main_nav.classList.remove('main-nav--closed');
    main_nav.classList.add('main-nav--opened');
  } else {
    main_nav.classList.remove('main-nav--opened');
    main_nav.classList.add('main-nav--closed');
  }
});





