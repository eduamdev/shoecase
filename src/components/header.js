import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgMenu } from '../icons/menu.svg';
import { ReactComponent as SvgClose } from '../icons/close.svg';
import { ReactComponent as SvgUser } from '../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../icons/magnifier.svg';

const Header = ({ isMenuOpen, handleClick }) => {
  const navClasses = 'w-full border-t border-b border-gray-300';
  const searchClasses = 'h-12 px-4 py-2';

  return (
    <header>
      {/* Small devices */}
      <section className='relative w-full bg-white z-30 md:hidden border-b border-gray-300'>
        <article className='flex items-center w-full h-12 px-4 py-2 '>
          <div className='flex flex-wrap  items-center justify-between w-full '>
            <button
              className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
              onClick={handleClick}
            >
              {isMenuOpen ? (
                <SvgClose className='h-4 w-4'></SvgClose>
              ) : (
                <SvgMenu className='h-4 w-4'></SvgMenu>
              )}
            </button>
            <Link to='/' className='font-bold uppercase text-center'>
              shoecase
            </Link>
            <div className='flex'>
              <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
                <SvgUser className='h-4 w-4'></SvgUser>
              </button>
              <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'>
                <SvgShoppingBag className='h-4 w-4'></SvgShoppingBag>
              </button>
            </div>
          </div>
        </article>
        <nav
          className={
            isMenuOpen ? `${navClasses} visible` : `${navClasses} h-0 invisible`
          }
        >
          <ul className='w-full h-full px-4'>
            <li className='flex flex-wrap items-center w-full h-16 border-b border-gray-300'>
              <Link to='/men' className='w-full py-4 uppercase'>
                men
              </Link>
            </li>
            <li className='flex flex-wrap items-center w-full h-16'>
              <Link to='/women' className='w-full py-4 uppercase '>
                women
              </Link>
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
              <SvgMagnifier className='h-4 w-4 absolute'></SvgMagnifier>
            </div>
          </div>
        </article>
      </section>

      {/* Medium+ devices */}
      <section className='w-full bg-white hidden md:flex md:flex-1 md:px-4 xl:px-8 border-b border-gray-300'>
        <article className='flex flex-wrap items-center w-1/2'>
          <Link
            to='/'
            className='font-bold uppercase text-center text-xl mr-20'
          >
            shoecase
          </Link>
          <nav className=''>
            <ul className='flex flex-wrap items-stretch w-40'>
              <li className='flex flex-wrap items-center h-full border-b border-transparent hover:border-black px-2 mr-4'>
                <Link className='uppercase py-4' to='/men'>
                  men
                </Link>
              </li>
              <li className='flex flex-wrap items-center h-full border-b border-transparent hover:border-black px-2'>
                <Link className='uppercase py-4' to='/women'>
                  women
                </Link>
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
            <SvgMagnifier className='h-4 w-4 absolute'></SvgMagnifier>
          </div>
          <div className='flex'>
            <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 mr-4'>
              <SvgUser className='h-4 w-4'></SvgUser>
            </button>
            <button className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'>
              <SvgShoppingBag className='h-4 w-4'></SvgShoppingBag>
            </button>
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;
