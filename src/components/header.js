import React, { useState } from 'react';
import Icon from './common/icon';
import BadgeCounter from './common/badgeCounter';
import SearchBox from './searchBox';
import LogoLink from './logoLink';
import IconButton from './iconButton';
import IconLink from './iconLink';
import Nav from './nav';
import ShoppingBag from './shoppingBag';
import Notice from './notice';
import { breakpoints, navLinks } from '../config.json';
import { useCart } from '../context/cartContext';

const Header = ({
  isMenuOpen,
  handleMenuClick,
  isShoppingBagOpen,
  handleShoppingBagClick,
  viewportSize
}) => {
  const [isNoticeShowing, setIsNoticeShowing] = useState(true);
  const [cartState] = useCart();

  function handleNoticeCloseClick() {
    setIsNoticeShowing(false);
  }

  return (
    <>
      {isNoticeShowing && (
        <Notice text='Free shipping worldwide!' hide={isMenuOpen}>
          <IconButton
            style={{ position: 'unset' }}
            icon={
              <Icon type='close' className='absolute w-3 h-3 right-0 top-0' />
            }
            onClick={handleNoticeCloseClick}
          />
        </Notice>
      )}
      <header>
        {/* Small devices */}
        <section className='relative bg-white w-full bg-white z-30 md:hidden border-b border-gray-300'>
          <article className='flex items-center w-full h-12 px-4 py-2 '>
            <div className='flex flex-wrap  items-center justify-between w-full '>
              <IconButton
                focusable
                icon={isMenuOpen ? <Icon type='close' /> : <Icon type='menu' />}
                onClick={handleMenuClick}
              />
              <LogoLink to='/'>shoecase</LogoLink>
              <div className='flex flex-wrap justify-between w-20'>
                <IconButton focusable icon={<Icon type='user' />} />
                <IconLink
                  to='/cart'
                  focusable
                  icon={<Icon type='shoppingBag' />}
                >
                  <BadgeCounter count={cartState.totalProducts}></BadgeCounter>
                </IconLink>
              </div>
            </div>
          </article>
          <Nav navLinks={navLinks} isMenuOpen={isMenuOpen}></Nav>
          <article
            className={isMenuOpen ? 'px-4 pt-2 pb-4 hidden' : 'px-4 pt-2 pb-4'}
          >
            <div className='flex flex-wrap items-center justify-between w-full'>
              <SearchBox
                icon={<Icon type='magnifier' className='h-4 w-4 absolute' />}
                placeholder='Products...'
              />
            </div>
          </article>
        </section>

        {/* Medium+ devices */}
        <section className='relative bg-white w-full hidden md:flex md:flex-1 md:px-6 lg:px-12 border-b border-gray-300 z-30'>
          <article className='flex flex-wrap items-center w-1/2 '>
            <LogoLink to='/'>shoecase</LogoLink>
            <Nav navLinks={navLinks} isMenuOpen={isMenuOpen} size='md+'></Nav>
          </article>
          <article className='flex flex-wrap items-center justify-end w-1/2'>
            <SearchBox
              icon={<Icon type='magnifier' className='h-4 w-4 absolute' />}
              placeholder='Products...'
            />
            <div className='flex flex-wrap justify-between w-20'>
              <IconButton focusable icon={<Icon type='user' />} />
              <IconButton
                focusable
                icon={<Icon type='shoppingBag' />}
                onClick={
                  cartState.totalProducts > 0
                    ? handleShoppingBagClick
                    : undefined
                }
              >
                <BadgeCounter
                  count={cartState.totalProducts}
                  style={{ marginTop: '-3.5px', marginLeft: '8px' }}
                ></BadgeCounter>
              </IconButton>
            </div>
          </article>
        </section>
      </header>
      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <ShoppingBag
          {...cartState}
          onClick={handleShoppingBagClick}
        ></ShoppingBag>
      )}
    </>
  );
};

export default Header;
