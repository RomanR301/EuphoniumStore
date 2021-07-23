
/*
================================================================================

  "Cart Popup" component

================================================================================
*/

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Cart = (() => {
  const recalculateBodyHeight = function() {
    const cartPopupElem = document.querySelector('.cart-popup');
    const headerElem = cartPopupElem.querySelector('.cart-popup__header');
    const bodyElem = cartPopupElem.querySelector('.cart-popup__body');
    const footerElem = cartPopupElem.querySelector('.cart-popup__footer');

    const viewportHeight = document.documentElement.clientHeight;
    const headerHeight = headerElem.scrollHeight;
    const footerHeight = footerElem.scrollHeight;

    bodyElem.style.height = `${viewportHeight - (headerHeight + footerHeight)}px`;
  };

  const toggleCart = function() {
    const cartPopupElem = document.querySelector('.cart-popup');
    const bodyElem = cartPopupElem.querySelector('.cart-popup__body');

    if (!cartPopupElem.classList.contains('js-open')) {
      disableBodyScroll(bodyElem);
      recalculateBodyHeight();
      cartPopupElem.classList.add('js-open');
    } else {
      enableBodyScroll(bodyElem);
      cartPopupElem.classList.remove('js-open');
    }
  };

  const initEventListeners = function() {
    if (document.querySelector('.cart-popup')) {
      const openCartPopupBtn = document.querySelector('.header__cart-btn');
      const closeCartPopupBtn = document.querySelector('.cart-popup__close-btn');

      openCartPopupBtn.addEventListener('click', toggleCart);
      closeCartPopupBtn.addEventListener('click', toggleCart);

      window.addEventListener('resize', recalculateBodyHeight);
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Cart;
