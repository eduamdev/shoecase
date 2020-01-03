import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';
import { NumberUtils } from '../utils';

const ShoppingBagProduct = ({ products }) => {
  return (
    products &&
    products.length > 0 &&
    products.map((product, index) => {
      return (
        <Link key={index} to={`/products/${product.slug}`}>
          <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
            <Image name={product.slug} type='shoppingBag'></Image>
            <span className='w-1/2 uppercase tracking-wide'>
              {product.name}{' '}
              {product.quantity > 1 ? (
                <span className='block text-sm tracking-wide'>
                  ({product.quantity})
                </span>
              ) : null}
            </span>
            <span className=''>
              ${NumberUtils.formatCurrency(product.price * product.quantity, 2)}
            </span>
          </div>
        </Link>
      );
    })
  );
};

export default ShoppingBagProduct;
