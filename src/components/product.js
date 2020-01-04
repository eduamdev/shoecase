import React from 'react';
import FeaturedProducts from './featuredProducts';
import MainButton from './mainButton';
import Image from './common/image';
import { getProductBySlug } from '../services/fakeProductService';
import { useCartDispatch } from '../context/cartContext';
import { NumberUtils } from '../utils';

const Product = ({ match }) => {
  const cartDispatch = useCartDispatch();

  const slug = match.params.id;
  const product = getProductBySlug(slug);
  const { sku, name, price, description, features } = product;

  return (
    <section className='flex flex-wrap'>
      <section className='w-full lg:w-2/3 border-b border-gray-300 py-6'>
        <div className='max-w-sm lg:max-w-lg mx-auto'>
          <Image name={slug} alt={description} type='singleProduct' />
        </div>
      </section>
      <section className='w-full lg:w-1/3  border-l border-gray-300'>
        <article className='w-full border-b border-gray-300 py-12 lg:py-24 px-4 md:px-6 lg:px-12'>
          <span className='text-sm tracking-widest'>{sku}</span>
          <h1 className='text-3xl lg:text-4xl font-extrabold lg:font-bold uppercase tracking-wide lg:tracking-wider'>
            {name}
          </h1>
          <span className='block text-lg lg:text-xl font-bold tracking-wide mt-10 mb-4'>
            $ {NumberUtils.formatCurrency(price, 2)}
          </span>
          <MainButton
            onClick={() =>
              cartDispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload: { ...product, quantity: 1 }
              })
            }
          >
            Place in Cart
          </MainButton>
        </article>
        <article className='w-full py-12 lg:py-24 px-4 md:px-6 lg:px-12'>
          <p className='tracking-wide leading-loose mb-10 font-light text-gray-700 text-sm xl:text-base'>
            {description}
          </p>
          <h2 className='font-normal mb-6 tracking-wide'>Detailed Features</h2>
          <ul className='list-disc list-inside leading-loose pl-4'>
            {features &&
              features.map((feature, index) => (
                <li
                  className='tracking-wide font-light text-gray-700 text-sm xl:text-base'
                  key={index}
                >
                  {feature}
                </li>
              ))}
          </ul>
        </article>
      </section>
      <FeaturedProducts title='you may also like'></FeaturedProducts>
    </section>
  );
};

export default Product;
