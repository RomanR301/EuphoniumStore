
/*
================================================================================

  "Category" page

================================================================================
*/

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const CategoryPage = (() => {
  const toggleFilters = function() {
    const sidebarElem = document.querySelector('.category-filter');

    if(!sidebarElem.classList.contains('js-open')) {
      disableBodyScroll(sidebarElem);
      sidebarElem.classList.add('js-open');
    } else {
      enableBodyScroll(sidebarElem);
      sidebarElem.classList.remove('js-open');
    }

  };

  const initEventListeners = function() {
    if (document.querySelector('.category')) {
      const openBtnElem = document.querySelector('.category-subheader__filters-btn');
      const closeBtnElem = document.querySelector('.filter__close-btn');

      openBtnElem.addEventListener('click', toggleFilters);
      closeBtnElem.addEventListener('click', toggleFilters);
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default CategoryPage;
