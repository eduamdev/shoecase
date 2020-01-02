import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ navLinks, isMenuOpen, size }) => {
  return size === 'md+' ? (
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
                className='uppercase py-4 lg:py-6 font-medium text-sm text-gray-800 tracking-wider px-2 border-b-2 border-transparent hover:border-gray-400'
                activeClassName='border-b-2 border-black'
              >
                {link.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  ) : (
    <nav
      className={`w-full border-t border-b border-gray-300 ${
        isMenuOpen ? 'visible' : 'h-0 invisible'
      }
          `}
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
  );
};

export default Nav;
