var order_rabbit = document.querySelector('#rabbit');
var order_laundry_basket = document.querySelector('#laundry-basket');
var order_toy_basket = document.querySelector('#toy-basket');
var popup_order = document.querySelector('.form--popup');

var overlay = document.querySelector('.overlay');

order_rabbit.addEventListener('click', function(event) {
  event.preventDefault();
  popup_order.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

order_laundry_basket.addEventListener('click', function(event) {
  event.preventDefault();
  popup_order.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

order_toy_basket.addEventListener('click', function(event) {
  event.preventDefault();
  popup_order.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

overlay.addEventListener('click', function(event) {
  popup_order.classList.remove('form--popup-display');
  overlay.classList.remove('overlay--display');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    popup_order.classList.remove('form--popup-display');
    overlay.classList.remove('overlay--display');
  }
});
