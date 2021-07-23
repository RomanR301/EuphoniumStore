
/*
================================================================================

  "Products Slider component"

================================================================================
*/

import Swiper from 'swiper';

const ProductsSlider = (() => {
  const toggleTab = function() {
    const tabElem = this;
    const tabsParentElem = tabElem.closest('.tabs');
    const tabName = tabElem.dataset.tab;
    const activeTabElem = tabsParentElem.querySelector('.tabs__btn.js-active');
    const activeTabName = activeTabElem.dataset.tab;

    const contentElem = document.querySelector('.tabs-content__wrapper[data-tab="' + tabName + '"]');
    const activeContentElem = document.querySelector('.tabs-content__wrapper[data-tab="' + activeTabName + '"].js-active');

    const contentSliderElem = contentElem.querySelector('.products-slider__container');

    activeTabElem.classList.remove('js-active');
    activeContentElem.classList.remove('js-active');

    tabElem.classList.add('js-active');
    contentElem.classList.add('js-active');

    initSlider(contentSliderElem);
  };

  const initSlider = function(slider) {
    const productsSliderElem = slider.closest('.products-slider');
    const prevNavBtnElem = productsSliderElem.querySelector('.slider-nav__btn--prev');
    const nextNavBtnElem = productsSliderElem.querySelector('.slider-nav__btn--next');

    new Swiper(slider, {
      speed: 500,
      spaceBetween: 10,
      slidesPerView: 2,
      navigation: {
        prevEl: prevNavBtnElem,
        nextEl: nextNavBtnElem,
        disabledClass: 'js-disabled'
      },
      breakpoints: {
        375: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        560: {
          spaceBetween: 15,
          slidesPerView: 3
        },
        640: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 4
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 4
        }
      }
    });
  };

  const initEventListeners = function() {
    if (document.querySelector('.products-slider')) {
      if (document.querySelector('.tabs')) {
        const tabsList = document.querySelectorAll('.tabs__btn');
        const activeSlider = document.querySelector('.tabs-content__wrapper.js-active .products-slider__container');

        Array.from(tabsList, (tab) => {
          tab.addEventListener('click', toggleTab);
        });

        initSlider(activeSlider);
      } else {
        const slider = document.querySelector('.products-slider__container');

        initSlider(slider);
      }
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default ProductsSlider;
