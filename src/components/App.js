import React, { useState, useEffect } from 'react';
import Header from './header';
import Home from './home';
import Cart from './cart';
import Products from './products';
import Product from './product';
import Footer from './footer';
import ScrollToTop from './common/scrollToTop';
import SuccessfulOrder from './successfulOrder';
import NotFound from './notFound';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { breakpoints } from '../config.json';

function App({ history }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areFiltersShowing, setAreFiltersShowing] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  const viewportSize = useWindowSize();

  useEffect(() =>
    history.listen(() => {
      hideModals();
    })
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setAreFiltersShowing(false);
  }

  function toggleFilters() {
    setAreFiltersShowing(!areFiltersShowing);
    setIsMenuOpen(false);
  }

  function handleShoppingBagClick() {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  }

  function hideModals() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (areFiltersShowing) {
      setAreFiltersShowing(false);
    }
    if (isShoppingBagOpen) {
      setIsShoppingBagOpen(false);
    }
  }

  return (
    <div className='App h-screen w-screen max-h-full max-w-full font-global'>
      {/* Backdrop under filters */}
      {areFiltersShowing && (
        <span
          onClick={hideModals}
          className='fixed top-0 left-0 h-screen w-screen max-h-full max-w-full bg-black opacity-75 z-10'
        ></span>
      )}
      {/* Backdrop under menu */}
      {isMenuOpen && viewportSize.width < breakpoints.md && (
        <span
          onClick={hideModals}
          className='fixed top-0 left-0 h-screen w-screen max-h-full max-w-full bg-black opacity-75 z-30'
        ></span>
      )}
      {/* Backdrop under shopping bag */}
      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <span
          onClick={handleShoppingBagClick}
          className='fixed top-0 left-0 h-screen w-screen max-h-full max-w-full bg-black opacity-75 z-40'
        ></span>
      )}
      <div className='relative w-full text-center bg-red-100 border-b border-gray-300 py-2 text-sm text-gray-800 font-light tracking-wider z-30'>
        Free shipping worldwide!
      </div>
      <Header
        isMenuOpen={isMenuOpen}
        handleMenuClick={toggleMenu}
        isShoppingBagOpen={isShoppingBagOpen}
        handleShoppingBagClick={handleShoppingBagClick}
        viewportSize={viewportSize}
      ></Header>
      <main>
        <ScrollToTop />
        <Switch>
          <Route path='/men/:id' component={Product}></Route>
          <Route
            path='/men'
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
          <Route path='/successful-order' component={SuccessfulOrder}></Route>
          <Route path='/' exact component={Home}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect to='/not-found'></Redirect>
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(App);
