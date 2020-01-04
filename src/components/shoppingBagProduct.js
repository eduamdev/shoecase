import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';
import { NumberUtils } from '../utils';

const ShoppingBagProduct = ({ products, isCartEmpty }) => {
  return (
    products &&
    !isCartEmpty &&
    products.map((product, index) => {
      return (
        <Link key={index} to={`/products/${product.slug}`}>
          <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
            <Image name={product.slug} type='shoppingBag'></Image>
            <span className='w-1/2 uppercase tracking-wide'>
              {product.name}{' '}
              {product.quantity > 1 ? (
                <span className='block text-sm tracking-wide'>
                  ({parseInt(product.quantity)})
                </span>
              ) : null}
            </span>
            <span className=''>
              $
              {NumberUtils.formatCurrency(
                parseFloat(product.price) * parseInt(product.quantity),
                2
              )}
            </span>
          </div>
        </Link>
      );
    })
  );
};

export default ShoppingBagProduct;
