import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import Icon from './common/icon';
import image from '../images/products/batcombe-lord.jpg';

const ShoppingBag = ({ handleClick }) => {
  return (
    <div
      className='z-50 fixed top-0 right-0 h-screen bg-white w-2/6 px-10 py-12 shadow-2xl'
      style={{ minWidth: '600px' }}
    >
      <button
        onClick={handleClick}
        className='active:shadow-outline focus:outline-none focus:shadow-outline p-2 absolute top-0 right-0 mr-10 mt-6'
      >
        <Icon type='close'></Icon>
      </button>
      <h1 className='uppercase text-2xl font-bold tracking-wide mb-8'>
        your shopping bag <span className='ml-2 text-base font-light'>(1)</span>
      </h1>
      <div className='w-full'>
        <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
          <Img src={image} className='h-24 object-cover'></Img>
          <p className='w-1/2 uppercase'>batcombe lord</p>
          <p className=''>$1,680.00</p>
        </div>
        <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
          <Img src={image} className='h-24 object-cover'></Img>
          <p className='w-1/2 uppercase'>batcombe lord</p>
          <p className=''>$1,680.00</p>
        </div>
        <div className='flex flex-wrap justify-between items-center py-12 border-t border-gray-200'>
          <p className='font-bold text-xl uppercase'>total</p>
          <p className='font-bold text-xl'>$1,680.00</p>
        </div>
        <Link
          to='/cart'
          className='block w-full bg-black tracking-wider font-light text-base text-white text-center py-5 rounded-sm shadow-md'
        >
          View your Shopping Bag
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBag;
