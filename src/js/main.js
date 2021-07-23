
/*
================================================================================

  Main

================================================================================
*/

import Cart from './components/cart';
import Filter from './components/filter';
import Navigation from './components/navigation';
import ProductsSlider from './components/products-slider';
import Search from './components/search';

import CategoryPage from './pages/category-page';
import HomePage from './pages/home-page';
import ProductPage from './pages/product-page';


// Components
Cart.init();
Filter.init();
Navigation.init();
ProductsSlider.init();
Search.init();


// Pages
CategoryPage.init();
HomePage.init();
ProductPage.init();