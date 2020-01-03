import React from 'react';

const ShoppingBagTotal = ({ totalPrice }) => {
  return (
    <div className='flex flex-wrap justify-between items-center py-12 border-t border-gray-200'>
      <span className='font-bold text-xl uppercase'>total</span>
      <span className='font-bold text-xl'>$ {totalPrice}</span>
    </div>
  );
};

export default ShoppingBagTotal;
