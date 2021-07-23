
/*
================================================================================

  "Home" page

================================================================================
*/

import Swiper from 'swiper';

const HomePage = (() => {
  const initHeroSlider = function() {
    const sliderElem = document.querySelector('.home-hero-slider');

    new Swiper(sliderElem, {
      slidesPerView: 3,
      navigation: {
        nextEl: '.home-hero-next',
        prevEl: '.home-hero-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 3,
        },
      }
    });
  };

  const initProductsSlider = function() {
    const sliderElem = document.querySelector('.home-products-slider');

    new Swiper(sliderElem, {
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        992: {
          spaceBetween: 40,
        },
      }
    });
  };

  const initProductsSliderSecond = function() {
    const sliderElem = document.querySelector('.home-products-slider-second');

    new Swiper(sliderElem, {
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        992: {
          spaceBetween: 40,
        },
      }
    });
  };

  const initEventListeners = function() {
    if (document.querySelector('.home-hero') || document.querySelector('.home-products')) {
      initHeroSlider();
      initProductsSlider();
      initProductsSliderSecond();
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default HomePage;
