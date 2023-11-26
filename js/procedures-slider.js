const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination__btn',
    bulletActiveClass: 'swiper-pagination__btn_active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-btn.next',
    prevEl: '.carousel-btn.prev',
  },
});
