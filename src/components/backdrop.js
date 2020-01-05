import React from 'react';
import { breakpoints } from '../config.json';

const Backdrop = ({
  viewportSize,
  areFiltersShowing,
  hideModals,
  isMenuOpen,
  isShoppingBagModalShowing,
  handleShoppingBagClick
}) => {
  return (
    <>
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
      {isShoppingBagModalShowing && viewportSize.width > breakpoints.md && (
        <span
          onClick={handleShoppingBagClick}
          className='fixed top-0 left-0 h-screen w-screen max-h-full max-w-full bg-black opacity-75 z-40'
        ></span>
      )}
    </>
  );
};

export default Backdrop;
