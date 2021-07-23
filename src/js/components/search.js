
/*
================================================================================

  "Search" component

================================================================================
*/

const Search = (() => {
  const toggleSearch = function() {
    const dropdownElem = document.querySelector('.search-dropdown');

    dropdownElem.classList.toggle('js-open');
  };

  const initEventListeners = function() {
    if (document.querySelector('.header__search-btn')) {
      const toggleSearchBtn = document.querySelector('.header__search-btn');

      toggleSearchBtn.addEventListener('click', toggleSearch);
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Search;
