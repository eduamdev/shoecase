import React from 'react';
import Image from './common/image';

const ShoppingBagProduct = () => {
  return (
    <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
      <Image name='batcombe-lord' type='shoppingBag'></Image>
      <span className='w-1/2 uppercase'>batcombe lord</span>
      <span className=''>$1,680.00</span>
    </div>
  );
};

export default ShoppingBagProduct;
