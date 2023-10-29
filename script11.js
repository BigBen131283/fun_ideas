import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centerSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 25,
        stretch: 15,
        depth: 100,
        mofifier:2,
        slideShadows: true,
    },
  slidesPerView: 5,
  spaceBetween: 50,
});