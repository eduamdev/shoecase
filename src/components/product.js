import React from 'react';
import Img from 'react-image';
import callaRose from '../images/products/calla-rose.webp';

const Product = () => {
  return (
    <>
      <section className='w-full border-b border-gray-300 py-6'>
        <div className='max-w-sm mx-auto'>
          <Img src={callaRose} alt='Shoe' />
        </div>
      </section>
      <section className='w-full border-b border-gray-300 py-12 px-4'>
        <span className='text-sm font-light tracking-wide'>1A586V</span>
        <h1 className='text-3xl font-extrabold uppercase tracking-wide'>
          calla rose
        </h1>
        <span className='block text-lg font-bold tracking-wide mt-10 mb-4'>
          $ 2,470.00
        </span>
        <button className='w-full bg-black tracking-wider font-light text-sm text-white text-center py-4 rounded-sm'>
          Place in Cart
        </button>
      </section>
      <section className='w-full py-12 px-4'>
        <p className='tracking-wide leading-relaxed mb-10'>
          Crafted from black calf leather and patent Monogram canvas, the Janet
          ankle boot features a sharp, slim shape and a shifted-back stiletto
          heel. One of the statements of Louis Vuitton's Spring-Summer 2019
          collection, this assertive, feminine style is complemented by angular
          buckles and an LV-engraved closure in silver-tone metal.
        </p>
        <h2 className='font-medium mb-6'>Detailed Features</h2>
        <ul className='list-disc list-inside text-sm tracking-wide leading-loose'>
          <li className=''>
            <span className=''>Calf Leather and Patent Monogram Canvas</span>
          </li>
          <li className=''>
            <span className=''>Black</span>
          </li>
          <li className=''>
            <span className=''>Leather Outsole</span>
          </li>
          <li className=''>
            <span className=''>Made in Italy</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Product;
