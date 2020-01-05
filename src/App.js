import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ScrollToTop from './components/common/scrollToTop';
import Header from './components/header';
import Home from './routes/home';
import Product from './routes/product';
import Products from './routes/products';
import Cart from './routes/cart';
import SuccessfulOrder from './routes/successfulOrder';
import NotFound from './routes/notFound';
import Footer from './components/footer';
import useWindowSize from './hooks/useWindowSize';
import { CartProvider } from './context/cartContext';
import { breakpoints } from './config.json';

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

      <CartProvider>
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
            <Route exact path='/' component={Home}></Route>
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
            <Route path='/successful-order' component={SuccessfulOrder}></Route>
            <Route path='/not-found' component={NotFound}></Route>
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </main>
      </CartProvider>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(App);
