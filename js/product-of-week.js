var order_product_of_week = document.querySelector('#product-of-week');
var popup_product_of_week = document.querySelector('.form--popup-product-of-week');

var overlay = document.querySelector('.overlay');

order_product_of_week.addEventListener("click", function(event) {
  event.preventDefault();
  popup_product_of_week.classList.add('form--popup-display');
  overlay.classList.add('overlay--display');
});

overlay.addEventListener('click', function(event) {
  popup_product_of_week.classList.remove('form--popup-display');
  overlay.classList.remove('overlay--display');
})

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    popup_product_of_week.classList.remove('form--popup-display');
    overlay.classList.remove('overlay--display');
  }
});
