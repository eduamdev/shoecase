import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './common/icon';
import IconButton from './iconButton';
import MainButton from './mainButton';
import ShoppingBagProduct from './shoppingBagProduct';
import ShoppingBagTotal from './shoppingBagTotal';
import { NumberUtils } from '../utils';

const ShoppingBag = ({ products, totalProducts, totalPrice, ...rest }) => {
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
        your shopping bag{' '}
        <span className='ml-2 text-base font-light'>({totalProducts})</span>
      </h1>
      <div className='w-full'>
        <ShoppingBagProduct products={products}></ShoppingBagProduct>
        <ShoppingBagTotal
          totalPrice={NumberUtils.formatCurrency(totalPrice, 2)}
        ></ShoppingBagTotal>
        <Link to='/cart'>
          <MainButton hoverable>View your Shopping Bag</MainButton>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBag;
