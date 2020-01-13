import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ScrollToTop from './components/common/scrollToTop';
import Backdrop from './components/backdrop';
import Header from './components/header';
import Footer from './components/footer';
import Home from './routes/home';
import Product from './routes/product';
import Products from './routes/products';
import Cart from './routes/cart';
import SuccessfulOrder from './routes/successfulOrder';
import NotFound from './routes/notFound';
import useWindowSize from './hooks/useWindowSize';
import { CartProvider } from './context/cartContext';
import { FiltersProvider } from './context/filtersContext';

function App({ history }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areFiltersShowing, setAreFiltersShowing] = useState(false);
  const [isShoppingBagModalShowing, setIsShoppingBagModalShowing] = useState(
    false
  );
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  const viewportSize = useWindowSize();

  useEffect(() =>
    history.listen(() => {
      reset();
    })
  );

  function reset() {
    hideModals();
    setSearchQuery('');
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setAreFiltersShowing(false);
  }

  function toggleFilters() {
    setAreFiltersShowing(!areFiltersShowing);
    setIsMenuOpen(false);
  }

  function handleShoppingBagClick() {
    setIsShoppingBagModalShowing(!isShoppingBagModalShowing);
  }

  function hideModals() {
    setIsMenuOpen(false);
    setAreFiltersShowing(false);
    setIsShoppingBagModalShowing(false);
  }

  return (
    <div className='App h-screen w-screen max-h-full max-w-full font-global'>
      <Backdrop
        viewportSize={viewportSize}
        areFiltersShowing={areFiltersShowing}
        hideModals={hideModals}
        isMenuOpen={isMenuOpen}
        isShoppingBagModalShowing={isShoppingBagModalShowing}
        handleShoppingBagClick={handleShoppingBagClick}
      ></Backdrop>
      <CartProvider>
        <FiltersProvider>
          <Header
            isMenuOpen={isMenuOpen}
            handleMenuClick={toggleMenu}
            isShoppingBagModalShowing={isShoppingBagModalShowing}
            handleShoppingBagClick={handleShoppingBagClick}
            viewportSize={viewportSize}
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          ></Header>
          <main>
            <ScrollToTop />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route
                exact
                path='/search/:query'
                render={props => (
                  <Products
                    {...props}
                    areFiltersShowing={areFiltersShowing}
                    handleFiltersClick={toggleFilters}
                  />
                )}
              ></Route>
              <Route exact path='/products/:id' component={Product}></Route>
              <Route
                path='/men'
                exact
                render={props => (
                  <Products
                    {...props}
                    genre={'men'}
                    areFiltersShowing={areFiltersShowing}
                    handleFiltersClick={toggleFilters}
                  />
                )}
              ></Route>
              <Route
                path='/women'
                exact
                render={props => (
                  <Products
                    {...props}
                    genre={'women'}
                    areFiltersShowing={areFiltersShowing}
                    handleFiltersClick={toggleFilters}
                  />
                )}
              ></Route>
              <Route path='/cart' component={Cart}></Route>
              <Route
                path='/successful-order'
                component={SuccessfulOrder}
              ></Route>
              <Route path='/not-found' component={NotFound}></Route>
              <Redirect to='/not-found'></Redirect>
            </Switch>
          </main>
        </FiltersProvider>
      </CartProvider>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(App);
