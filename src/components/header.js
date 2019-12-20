import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgMenu } from '../icons/menu.svg';
import { ReactComponent as SvgClose } from '../icons/close.svg';
import { ReactComponent as SvgUser } from '../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../icons/magnifier.svg';

const Header = ({ isMenuOpen, handleClick }) => {
  const navClasses = 'w-full border-t border-b border-gray-300';
  const searchClasses = 'h-12 px-8 py-2';

  return (
    <header className='relative w-full bg-white border-t border-b border-gray-300 z-30'>
      <section className='flex items-center w-full h-12 px-8 py-2 '>
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
            <SvgUser className='h-4 w-4 mr-6'></SvgUser>
            <SvgShoppingBag className='h-4 w-4'></SvgShoppingBag>
          </div>
        </div>
      </section>
      <nav
        className={
          isMenuOpen ? `${navClasses} visible` : `${navClasses} h-0 invisible`
        }
      >
        <ul className='w-full h-full px-8'>
          <li className='flex flex-wrap items-center w-full h-16 border-b border-gray-300'>
            <Link to='/men' className='w-full py-4'>
              MEN
            </Link>
          </li>
          <li className='flex flex-wrap items-center w-full h-16'>
            <Link to='/women' className='w-full py-4 '>
              WOMEN
            </Link>
          </li>
        </ul>
      </nav>
      <section
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
      </section>
    </header>
  );
};

export default Header;
