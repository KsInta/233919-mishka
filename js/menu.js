var main_nav = document.querySelector('.main-nav');

var main_menu = document.querySelector('.main-nav__list');
var user_menu = document.querySelector('.user-block__list');

var menu_button = document.querySelector('.main-nav__toggle');

main_nav.classList.remove('no-js');

menu_button.addEventListener('click', function(event) {
  main_nav.classList.toggle('main-nav--opened');
});
