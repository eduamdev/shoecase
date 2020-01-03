import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';
import { NumberUtils } from '../utils';

const ShoppingBagProduct = ({ products }) => {
  return (
    products &&
    products.map(product => (
      <Link key={product._id} to={`/products/${product.slug}`}>
        <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
          <Image name={product.slug} type='shoppingBag'></Image>
          <span className='w-1/2 uppercase'>{product.name}</span>
          <span className=''>
            ${NumberUtils.formatCurrency(product.price, 2)}
          </span>
        </div>
      </Link>
    ))
  );
};

export default ShoppingBagProduct;
