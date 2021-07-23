
/*
================================================================================

  "Product" page

================================================================================
*/

import Swiper from 'swiper';

const ProductPage = (() => {
  const initSliders = function() {
    var galleryMain = new Swiper('.product-slider-main', {
      slidesPerView: 1,
      spaceBetween: 30,  
      loop: true,
      loopedSlides: 50,
      thumbs: galleryThumbs,
      pagination: {
        el: '.product-pagination',
      },
    });
  
    var galleryThumbs = new Swiper('.product-slider-thumbs', {
      slidesPerView: 'auto',
      spaceBetween: 20,  
      slideToClickedSlide: true,
      loopedSlides: 50,
      loop: true,
      thumbs: galleryMain,
      breakpoints: {
        769: {
          direction: 'vertical',
        }
      },
    });

    galleryMain.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryMain;

    var galleryMain = new Swiper('.related-slider', {
      spaceBetween: 40,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        601: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }
    });
  };

  const init = function() {
    if (document.querySelector('.product-slide__image', '.product-thumbs__image')) {
      initSliders();
    }
  };

  return {
    init: init
  };

})();

export default ProductPage;

