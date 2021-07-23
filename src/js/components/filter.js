
/*
================================================================================

  "Filter" component

================================================================================
*/

const Filter = (() => {
  const toggleSection = function() {
    const toggleBtnElem = this;
    const sectionElem = toggleBtnElem.closest('.category-dropdown');

    if (!sectionElem.classList.contains('js-open')) {
      sectionElem.classList.add('js-open');
    } else {
      sectionElem.classList.remove('js-open');
    }
  };

  const expandSection = function() {
    const headerElem = this;
    const sectionElem = headerElem.closest('.category-dropdown');

    if (!sectionElem.classList.contains('js-expanded')) {
      sectionElem.classList.add('js-expanded');
    } else {
      sectionElem.classList.remove('js-expanded');
    }
  };

  const initEventListeners = function() {
    if (document.querySelector('.category-filter')) {
      const toggleBtnList = document.querySelectorAll('.category-dropdown__trigger');
      const moreBtnList = document.querySelectorAll('.filter-section__more-btn');

      Array.from(toggleBtnList, (btn) => {
        btn.addEventListener('click', toggleSection);
      });

      Array.from(moreBtnList, (btn) => {
        btn.addEventListener('click', expandSection);
      });
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Filter;
