import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './common/icon';
import Image from './common/image';
import IconButton from './iconButton';
import MainButton from './mainButton';

const ShoppingBag = ({ ...rest }) => {
  return (
    <div
      className='z-50 fixed top-0 right-0 h-screen bg-white w-2/6 px-4 md:px-6 lg:px-12 py-12 shadow-2xl'
      style={{ minWidth: '600px' }}
    >
      <IconButton
        icon={<Icon type='close' />}
        {...rest}
        position='absolute top-0 right-0 mr-10 mt-6'
      />
      <h1 className='uppercase text-2xl font-bold tracking-wide mb-8'>
        your shopping bag <span className='ml-2 text-base font-light'>(1)</span>
      </h1>
      <div className='w-full'>
        <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
          <Image name='batcombe-lord' type='shoppingBag'></Image>
          <span className='w-1/2 uppercase'>batcombe lord</span>
          <span className=''>$1,680.00</span>
        </div>
        <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
          <Image name='batcombe-lord' type='shoppingBag'></Image>
          <span className='w-1/2 uppercase'>batcombe lord</span>
          <span className=''>$1,680.00</span>
        </div>
        <div className='flex flex-wrap justify-between items-center py-12 border-t border-gray-200'>
          <span className='font-bold text-xl uppercase'>total</span>
          <span className='font-bold text-xl'>$1,680.00</span>
        </div>
        <Link to='/cart'>
          <MainButton hoverable>View your Shopping Bag</MainButton>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBag;
