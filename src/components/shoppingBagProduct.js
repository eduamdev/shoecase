import React from 'react';
import Image from './common/image';

const ShoppingBagProduct = ({ products }) => {
  return products.map(product => (
    <div
      key={product._id}
      className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'
    >
      <Image name={product.slug} type='shoppingBag'></Image>
      <span className='w-1/2 uppercase'>{product.name}</span>
      <span className=''>${product.price}</span>
    </div>
  ));
};

export default ShoppingBagProduct;
