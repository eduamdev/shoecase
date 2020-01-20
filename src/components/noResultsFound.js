import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';

const NoResultsFound = () => {
  return (
    <div className='w-full pt-16 pb-6'>
      <p className='capitalize text-center text-sm font-light tracking-wider leading-loose mb-4'>
        no results found
      </p>
      <h2 className='capitalize font-bold text-center text-lg tracking-wide leading-loose mb-4'>
        discover new arrivals:
      </h2>
      <Link
        to='/men'
        className='block capitalize text-center underline tracking-wider leading-relaxed font-light mb-2'
      >
        men's shoes
      </Link>
      <Link
        to='/women'
        className='block capitalize text-center underline tracking-wide leading-relaxed font-light mb-8'
      >
        women's shoes
      </Link>
      <Image
        name='no-results'
        className='w-full max-w-md lg:max-w-5xl mx-auto md:h-auto object-cover px-3 md:px-6 lg:px-12'
      ></Image>
    </div>
  );
};

export default NoResultsFound;
