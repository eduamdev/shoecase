import React from 'react';
import { useCartState } from '../context/cartContext';
import { NumberUtils } from '../utils';

const ShoppingBagTotal = () => {
  const { totalPrice } = useCartState();

  return (
    <div className='flex flex-wrap justify-between items-center py-12 border-t border-gray-200'>
      <span className='font-bold text-xl uppercase'>total</span>
      <span className='font-bold text-xl'>
        $ {NumberUtils.formatCurrency(totalPrice, 2)}
      </span>
    </div>
  );
};

export default ShoppingBagTotal;
