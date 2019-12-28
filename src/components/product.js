import React from 'react';
import Image from './common/image';
import { getProductBySlug } from '../services/fakeProductService';

const Product = ({ match }) => {
  const slug = match.params.id;
  const product = getProductBySlug(slug);

  const { sku, name, price, description, features } = product;

  return (
    <section className='flex flex-wrap'>
      <section className='w-full lg:w-2/3 border-b border-gray-300 py-6'>
        <div className='max-w-sm lg:max-w-lg mx-auto'>
          <Image slug={slug} alt={description} noClass />
        </div>
      </section>
      <section className='w-full lg:w-1/3 md:px-20 lg:px-4 xl:px-10 py-10 lg:py-12 border-l border-gray-300'>
        <article className='w-full border-b border-gray-300 py-16 px-4'>
          <span className='text-sm font-light tracking-wide'>{sku}</span>
          <h1 className='text-3xl font-extrabold uppercase tracking-wide'>
            {name}
          </h1>
          <span className='block text-lg font-bold tracking-wide mt-10 mb-4'>
            $ {price}
          </span>
          <button className='w-full bg-black tracking-wider font-light text-sm text-white text-center py-4 rounded-sm'>
            Place in Cart
          </button>
        </article>
        <article className='w-full py-12 px-4'>
          <p className='tracking-wide leading-relaxed mb-10'>{description}</p>
          <h2 className='font-medium mb-6'>Detailed Features</h2>
          <ul className='list-disc list-inside text-sm tracking-wide leading-loose pl-4'>
            {features &&
              features.map((feature, index) => (
                <li key={index}>
                  <span>{feature}</span>
                </li>
              ))}
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Product;
