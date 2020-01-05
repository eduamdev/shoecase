import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';
import { useCartState } from '../context/cartContext';
import { NumberUtils } from '../utils';

const ShoppingBagProduct = () => {
  const { products, isCartEmpty } = useCartState();

  return (
    products &&
    !isCartEmpty &&
    products.map((product, index) => {
      const { slug, name, quantity, price } = product;

      return (
        <Link key={index} to={`/products/${slug}`}>
          <div className='flex flex-wrap justify-between items-center py-5 border-t border-b border-gray-200'>
            <Image name={slug} type='shoppingBag'></Image>
            <span className='w-1/2 uppercase tracking-wide'>
              {name}{' '}
              {quantity > 1 ? (
                <span className='block text-sm tracking-wide'>
                  ({parseInt(quantity)})
                </span>
              ) : null}
            </span>
            <span className=''>
              $
              {NumberUtils.formatCurrency(
                parseFloat(price) * parseInt(quantity),
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
