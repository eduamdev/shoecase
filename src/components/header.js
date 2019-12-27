import React from 'react';
import Img from 'react-image';
import { Link, NavLink } from 'react-router-dom';
import { breakpoints } from '../config.json';
import { ReactComponent as SvgMenu } from '../icons/menu.svg';
import { ReactComponent as SvgClose } from '../icons/close.svg';
import { ReactComponent as SvgUser } from '../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../icons/magnifier.svg';
import image from '../images/products/batcombe-lord.jpg';

const Header = ({
  isMenuOpen,
  handleMenuClick,
  isShoppingBagOpen,
  handleShoppingBagClick,
  viewportSize
}) => {
  const navClasses = 'w-full border-t border-b border-gray-300';
  const searchClasses = 'h-12 px-4 py-2';
  const iconClasses = 'h-4 w-4';

  return (
    <>
      <header>
        {/* Small devices */}
        <section className='relative bg-white w-full bg-white z-30 md:hidden border-b border-gray-300'>
          <article className='flex items-center w-full h-12 px-4 py-2 '>
            <div className='flex flex-wrap  items-center justify-between w-full '>
              <button
                className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
                onClick={handleMenuClick}
              >
                {isMenuOpen ? (
                  <SvgClose className={iconClasses}></SvgClose>
                ) : (
                  <SvgMenu className={iconClasses}></SvgMenu>
                )}
              </button>
              <Link to='/' className='font-bold uppercase text-center'>
                shoecase
              </Link>
              <div className='flex'>
                <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
                  <SvgUser className={iconClasses}></SvgUser>
                </button>
                <Link
                  to='/cart'
                  className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
                >
                  <SvgShoppingBag className={iconClasses}></SvgShoppingBag>
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
              <li className='flex flex-wrap items-center w-full h-16 border-b border-gray-300'>
                <NavLink to='/men' className='w-full py-4 uppercase'>
                  men
                </NavLink>
              </li>
              <li className='flex flex-wrap items-center w-full h-16'>
                <NavLink to='/women' className='w-full py-4 uppercase '>
                  women
                </NavLink>
              </li>
            </ul>
          </nav>
          <article
            className={isMenuOpen ? `${searchClasses} hidden` : searchClasses}
          >
            <div className='flex flex-wrap items-center justify-between w-full'>
              <div className='flex items-center w-full h-8 relative bg-gray-200 py-2 px-4 rounded-sm'>
                <input
                  className='ml-8 w-full border-none bg-transparent outline-none text-sm tracking-wide'
                  placeholder='Products...'
                  type='text'
                />
                <SvgMagnifier
                  className={`${iconClasses} absolute`}
                ></SvgMagnifier>
              </div>
            </div>
          </article>
        </section>

        {/* Medium+ devices */}
        <section className='relative bg-white w-full hidden md:flex md:flex-1 md:px-4 xl:px-8 border-b border-gray-300 z-30'>
          <article className='flex flex-wrap items-center w-1/2'>
            <Link
              to='/'
              className='font-bold uppercase text-center text-xl mr-20'
            >
              shoecase
            </Link>
            <nav className=''>
              <ul className='flex flex-wrap items-stretch w-40 '>
                <li className='flex flex-wrap items-center h-full mr-4'>
                  <NavLink
                    className='uppercase py-4 font-medium text-sm text-gray-800 tracking-wider px-2 border-b border-transparent hover:border-black'
                    activeClassName='border-b border-black'
                    exact
                    to='/men'
                  >
                    men
                  </NavLink>
                </li>
                <li className='flex flex-wrap items-center h-full'>
                  <NavLink
                    className='uppercase py-4 font-medium text-sm text-gray-800 tracking-wider px-2 border-b border-transparent hover:border-black'
                    activeClassName='border-b border-black'
                    exact
                    to='/women'
                  >
                    women
                  </NavLink>
                </li>
              </ul>
            </nav>
          </article>
          <article className='flex flex-wrap items-center justify-end w-1/2'>
            <div className='flex items-center md:w-48 lg:w-64 xl:w-72 h-8 relative bg-gray-200 py-2 px-4 rounded-sm mr-8'>
              <input
                className='ml-8 w-full border-none bg-transparent outline-none text-sm tracking-wide'
                placeholder='Products...'
                type='text'
              />
              <SvgMagnifier
                className={`${iconClasses} absolute`}
              ></SvgMagnifier>
            </div>
            <div className='flex'>
              <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
                <SvgUser className={iconClasses}></SvgUser>
              </button>
              <button
                onClick={handleShoppingBagClick}
                className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
              >
                <SvgShoppingBag className={iconClasses}></SvgShoppingBag>
              </button>
            </div>
          </article>
        </section>
      </header>

      {/* Modal */}
      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <div
          className='z-50 fixed top-0 right-0 h-screen bg-white w-2/6 px-10 py-12 shadow-2xl'
          style={{ minWidth: '600px' }}
        >
          <button
            onClick={handleShoppingBagClick}
            className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 absolute top-0 right-0 mr-10 mt-6'
          >
            <SvgClose className={iconClasses}></SvgClose>
          </button>
          <h1 className='uppercase text-2xl font-bold tracking-wide mb-8'>
            your shopping bag{' '}
            <span className='ml-2 text-base font-light'>(1)</span>
          </h1>
          <div className='w-full'>
            <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-300'>
              <Img src={image} className='h-24 object-cover'></Img>
              <p className='w-1/2 uppercase'>batcombe lord</p>
              <p className=''>$1,680.00</p>
            </div>
            <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-300'>
              <Img src={image} className='h-24 object-cover'></Img>
              <p className='w-1/2 uppercase'>batcombe lord</p>
              <p className=''>$1,680.00</p>
            </div>
            <div className='flex flex-wrap justify-between items-center py-12 border-t border-gray-300'>
              <p className='font-bold text-xl uppercase'>total</p>
              <p className='font-bold text-xl'>$1,680.00</p>
            </div>
            <button className='w-full bg-black tracking-wider font-light text-base text-white text-center py-5 rounded-sm shadow-md'>
              View your Shopping Bag
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
