import React from 'react';
import CartShoppingBag from './cartShoppingBag';
import CartPaymentDetails from './cartPaymentDetails';

const Cart = () => {
  return (
    <div className='flex flex-wrap bg-gray-200 lg:items-stretch'>
      <CartShoppingBag></CartShoppingBag>
      <CartPaymentDetails></CartPaymentDetails>
    </div>
  );
};

export default Cart;
