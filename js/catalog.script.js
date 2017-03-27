var order_rabbit = document.querySelector('#rabbit');
var popup_rabbit = document.querySelector('.form--popup-rabbit');
var order_laundry_basket = document.querySelector('#laundry-basket');
var popup_laundry_basket = document.querySelector('.form--popup-laundry-basket');
var order_toy_basket = document.querySelector('#toy-basket');
var popup_toy_basket = document.querySelector('.form--popup-toy-basket');

var overlay = document.querySelector('.overlay');

order_rabbit.addEventListener("click", function(event) {
  event.preventDefault();
  popup_rabbit.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

order_laundry_basket.addEventListener("click", function(event) {
  event.preventDefault();
  popup_laundry_basket.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

order_toy_basket.addEventListener("click", function(event) {
  event.preventDefault();
  popup_toy_basket.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

overlay.addEventListener("click", function(event) {
  popup_rabbit.classList.remove('form--popup-display');
  popup_laundry_basket.classList.remove('form--popup-display');
  popup_toy_basket.classList.remove('form--popup-display');
  overlay.classList.remove('overlay--display');
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup_rabbit.classList.remove('form--popup-display');
    popup_laundry_basket.classList.remove('form--popup-display');
    popup_toy_basket.classList.remove('form--popup-display');
    overlay.classList.remove('overlay--display');
  }
});
