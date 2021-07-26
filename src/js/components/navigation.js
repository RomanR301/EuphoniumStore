/*
================================================================================

  "Navigation" component

================================================================================
*/

// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// const Navigation = (() => {
//   const toggleMobileNavigation = function() {
//     const navElem = document.querySelector('.nav');

//     if (!navElem.classList.contains('js-open')) {
//       disableBodyScroll(navElem);
//       navElem.classList.add('js-open');
//     } else {
//       enableBodyScroll(navElem);
//       navElem.classList.remove('js-open');
//     }
//   };

//   const toggleMobileDropdown = function() {
//     const linkElem = this;

//     if (!linkElem.classList.contains('js-open')) {
//       linkElem.classList.add('js-open');
//     } else {
//       linkElem.classList.remove('js-open');
//     }
//   };

//   const togglePageOverlay = function() {
//     const bodyElem = document.body;

//     if (!bodyElem.classList.contains('js-overlay')) {
//       bodyElem.classList.add('js-overlay');
//     } else {
//       bodyElem.classList.remove('js-overlay');
//     }
//   };

//   const initEventListeners = function() {
//     if (document.querySelector('.nav')) {
//       const hamburgerBtn = document.getElementsByClassName('header__hamburger-btn');
//       document.querySelectorAll('.header__hamburger-btn').forEach(item => {
//         item.addEventListener('click', event => {
//           toggleMobileNavigation();
//         })
//       })

//     }

    
//   };


//   const init = function() {
//     initEventListeners();
//   };

//   return {
//     init: init
//   };

// })();

// export default Navigation;



import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Navigation = (() => {
 


  const initEventListeners = function() {
    const menu = document.querySelector('.menu');
    const menuSection = menu.querySelector('.menu-section');
    const menuArrow = menu.querySelector('.menu-mobile-arrow');
    const menuClosed = menu.querySelector('.menu-mobile-close');
    const menuTrigger = document.querySelector('.menu-mobile-trigger');
    const menuOverlay = document.querySelector('.overlay');
    let subMenu;
    
    menuSection.addEventListener('click', (e) => {
       if (!menu.classList.contains('active')) {
          return;
       }
       if (e.target.closest('.menu-item-has-children')) {
          const hasChildren = e.target.closest('.menu-item-has-children');
          showSubMenu(hasChildren);
       }
    });
    
    menuArrow.addEventListener('click', () => {
       hideSubMenu();
    });
    
    menuTrigger.addEventListener('click', () => {
       toggleMenu();
    });
    
    menuClosed.addEventListener('click', () => {
       toggleMenu();
    });
    
    menuOverlay.addEventListener('click', () => {
       toggleMenu();
    });
    
    // Show & Hide Toggle Menu Function
    function toggleMenu() {
       menu.classList.toggle('active');
       menuOverlay.classList.toggle('active');
    }
    
    // Show the Mobile Side Menu Function
    function showSubMenu(hasChildren) {
       subMenu = hasChildren.querySelector('.menu-subs');
       subMenu.classList.add('active');
       subMenu.style.animation = 'slideLeft 0.5s ease forwards';
       const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
       menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
       menu.querySelector('.menu-mobile-header').classList.add('active');
    }
    
    // Hide the Mobile Side Menu Function
    function hideSubMenu() {
       subMenu.style.animation = 'slideRight 0.5s ease forwards';
       setTimeout(() => {
          subMenu.classList.remove('active');
       }, 300);
    
       menu.querySelector('.menu-mobile-title').innerHTML = 'categories';
       menu.querySelector('.menu-mobile-header').classList.remove('active');
    }
    
    // Windows Screen Resizes Function
    window.onresize = function () {
       if (this.innerWidth > 991) {
          if (menu.classList.contains('active')) {
             toggleMenu();
          }
       }
    };
    
  };


  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Navigation;



