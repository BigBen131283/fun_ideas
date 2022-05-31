import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centerSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        mofifier:1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});