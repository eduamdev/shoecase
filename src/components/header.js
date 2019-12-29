import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './common/icon';
import SearchBox from './common/searchBox';
import ShoppingBag from './shoppingBag';
import { breakpoints, navLinks } from '../config.json';

const Header = ({
  isMenuOpen,
  handleMenuClick,
  isShoppingBagOpen,
  handleShoppingBagClick,
  viewportSize
}) => {
  const navClasses = 'w-full border-t border-b border-gray-300';
  const searchClasses = 'h-12 px-4 py-2';

  function renderHeader() {
    return (
      <>
        {/* Small devices */}
        <section className='relative bg-white w-full bg-white z-30 md:hidden border-b border-gray-300'>
          <article className='flex items-center w-full h-12 px-4 py-2 '>
            <div className='flex flex-wrap  items-center justify-between w-full '>
              <button
                className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
                onClick={handleMenuClick}
              >
                {isMenuOpen ? (
                  <Icon type='close'></Icon>
                ) : (
                  <Icon type='menu'></Icon>
                )}
              </button>
              <Link
                to='/'
                className='font-bold uppercase text-center tracking-wider'
              >
                shoecase
              </Link>
              <div className='flex'>
                <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
                  <Icon type='user'></Icon>
                </button>
                <Link
                  to='/cart'
                  className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
                >
                  <Icon type='shoppingBag'></Icon>
                </Link>
              </div>
            </div>
          </article>
          <nav
            className={
              isMenuOpen
                ? `${navClasses} visible`
                : `${navClasses} h-0 invisible`
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
            className={isMenuOpen ? `${searchClasses} hidden` : searchClasses}
          >
            <div className='flex flex-wrap items-center justify-between w-full'>
              <div className='flex items-center w-full h-8 relative bg-gray-200 py-2 px-4 rounded-sm'>
                <SearchBox placeholder='Products...'></SearchBox>
                <Icon type='magnifier' classes='h-4 w-4 absolute'></Icon>
              </div>
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
                        className='uppercase py-4 lg:py-6 font-medium text-sm text-gray-800 tracking-wider px-2 border-b-2 border-transparent '
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
            <div className='flex items-center md:w-56 lg:w-84 xl:w-108 h-8 lg:h-10 relative bg-gray-200 py-2 px-4 rounded-sm mr-8'>
              <SearchBox placeholder='Products...'></SearchBox>
              <Icon type='magnifier' classes='h-4 w-4 absolute'></Icon>
            </div>
            <div className='flex'>
              <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
                <Icon type='user'></Icon>
              </button>
              <button
                onClick={handleShoppingBagClick}
                className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
              >
                <Icon type='shoppingBag'></Icon>
              </button>
            </div>
          </article>
        </section>
      </>
    );
  }

  return (
    <>
      <header>{renderHeader()}</header>

      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <ShoppingBag handleClick={handleShoppingBagClick}></ShoppingBag>
      )}
    </>
  );
};

export default Header;
