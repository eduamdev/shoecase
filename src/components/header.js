import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './common/icon';
import BadgeCounter from './common/badgeCounter';
import SearchBox from './common/searchBox';
import IconButton from './iconButton';
import IconLink from './iconLink';
import ShoppingBag from './shoppingBag';
import Notice from './notice';
import { breakpoints, navLinks } from '../config.json';

const Header = ({
  isMenuOpen,
  handleMenuClick,
  isShoppingBagOpen,
  handleShoppingBagClick,
  viewportSize
}) => {
  const [isNoticeShowing, setIsNoticeShowing] = useState(true);

  function handleNoticeCloseClick() {
    setIsNoticeShowing(false);
  }

  function renderHeader() {
    return (
      <>
        {/* Small devices */}
        <section className='relative bg-white w-full bg-white z-30 md:hidden border-b border-gray-300'>
          <article className='flex items-center w-full h-12 px-4 py-2 '>
            <div className='flex flex-wrap  items-center justify-between w-full '>
              <IconButton
                focusable
                icon={isMenuOpen ? <Icon type='close' /> : <Icon type='menu' />}
                onClick={handleMenuClick}
              />
              <Link
                to='/'
                className='font-bold uppercase text-center tracking-wider'
              >
                shoecase
              </Link>
              <div className='flex flex-wrap justify-between w-20'>
                <IconButton focusable icon={<Icon type='user' />} />
                <IconLink
                  to='/cart'
                  focusable
                  icon={<Icon type='shoppingBag' />}
                >
                  <BadgeCounter count={0}></BadgeCounter>
                </IconLink>
              </div>
            </div>
          </article>
          <nav
            className={
              isMenuOpen
                ? `w-full border-t border-b border-gray-300 visible`
                : `w-full border-t border-b border-gray-300 h-0 invisible`
            }
          >
            <ul className='w-full h-full px-4'>
              {navLinks &&
                navLinks.map(link => (
                  <li
                    key={link.label}
                    className='flex flex-wrap items-center w-full h-16 border-b border-gray-300'
                  >
                    <NavLink to={link.url} className='w-full py-4 uppercase'>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
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
            <Link
              to='/'
              className='font-bold uppercase text-xl mr-20 tracking-wider'
            >
              shoecase
            </Link>
            <nav>
              <ul className='flex flex-wrap items-stretch w-40 '>
                {navLinks &&
                  navLinks.map(link => (
                    <li
                      key={link.label}
                      className='flex flex-wrap items-center h-full mr-4'
                    >
                      <NavLink
                        to={link.url}
                        exact
                        className='uppercase py-4 lg:py-6 font-medium text-sm text-gray-800 tracking-wider px-2 border-b-2 border-transparent hover:border-gray-400 '
                        activeClassName='border-b-2 border-black'
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </nav>
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
                onClick={handleShoppingBagClick}
              >
                <BadgeCounter
                  count={0}
                  style={{ marginTop: '-3.5px', marginLeft: '8px' }}
                ></BadgeCounter>
              </IconButton>
            </div>
          </article>
        </section>
      </>
    );
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
      <header>{renderHeader()}</header>
      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <ShoppingBag onClick={handleShoppingBagClick}></ShoppingBag>
      )}
    </>
  );
};

export default Header;
