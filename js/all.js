$(document).ready(function () {

  $(".swiper-slide").click(function (event) {
    event.preventDefault();
  });

  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: 0},400);
  });
  
  $('.dropdown').click(function(event) {
    event.preventDefault();
    $('.dropdown-open').slideToggle(400);
  });
  
const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
  fadeDuration: 300
});

});