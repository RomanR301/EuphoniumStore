/*
================================================================================

  "Navigation" component

================================================================================
*/

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Navigation = (() => {
  const toggleMobileNavigation = function() {
    const navElem = document.querySelector('.nav');

    if (!navElem.classList.contains('js-open')) {
      disableBodyScroll(navElem);
      navElem.classList.add('js-open');
    } else {
      enableBodyScroll(navElem);
      navElem.classList.remove('js-open');
    }
  };

  const toggleMobileDropdown = function() {
    const linkElem = this;

    if (!linkElem.classList.contains('js-open')) {
      linkElem.classList.add('js-open');
    } else {
      linkElem.classList.remove('js-open');
    }
  };

  const togglePageOverlay = function() {
    const bodyElem = document.body;

    if (!bodyElem.classList.contains('js-overlay')) {
      bodyElem.classList.add('js-overlay');
    } else {
      bodyElem.classList.remove('js-overlay');
    }
  };

  const initEventListeners = function() {
    if (document.querySelector('.nav')) {
      const hamburgerBtn = document.getElementsByClassName('header__hamburger-btn');
    //   const itemsList = document.querySelectorAll('.nav__item--dropdown');
    //   const linksList = document.querySelectorAll('.nav__link--dropdown');

      document.querySelectorAll('.header__hamburger-btn').forEach(item => {
        item.addEventListener('click', event => {
          toggleMobileNavigation();
        })
      })

    //   Array.from(linksList, (link) => {
    //     link.addEventListener('click', toggleMobileDropdown);
    //   });

    //   Array.from(itemsList, (item) => {
    //     item.addEventListener('mouseenter', togglePageOverlay);
    //     item.addEventListener('mouseleave', togglePageOverlay);
    //   });
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Navigation;
