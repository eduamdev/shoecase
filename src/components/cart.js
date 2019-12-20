import React from 'react';
import Img from 'react-image';
import batcombeLord from '../images/products/batcombe-lord.jpg';

const Cart = () => {
  return (
    <>
      <section className='w-full bg-gray-200 py-10 px-4'>
        <h2 className='text-xl font-bold uppercase tracking-wide mb-4'>
          your shopping bag{' '}
          <span className='font-light text-sm text-gray-800 ml-2'>(2)</span>
        </h2>
        <article className='w-full bg-white rounded-sm mb-12'>
          <div className='py-6 px-4 border-b border-gray-300'>
            <div className='flex flex-wrap w-full'>
              <div className='w-1/2'>
                <Img
                  className='w-24 object-cover'
                  src={batcombeLord}
                  alt='Shoe'
                ></Img>
              </div>
              <div className='w-1/2'>
                <div className='flex content-between flex-wrap h-full'>
                  <h3 className='w-full uppercase font-medium tracking-wide'>
                    batcombe lord
                  </h3>
                  <button className='border p-2 border-gray-300 rounded-sm'>
                    delete
                  </button>
                </div>
              </div>
            </div>

            <span className='block font-light text-xs text-gray-800 tracking-wide leading-relaxed my-4'>
              Reference: 1A586V
            </span>
            <span className='block text-sm tracking-wide leading-relaxed '>
              Color: Noir
            </span>
          </div>
          <div className='py-6 px-4'>amount & price</div>
        </article>
        <article className='w-full bg-white rounded-sm mb-12'>
          <div className='py-6 px-4 border-b border-gray-300'>
            subtotal & total
          </div>
        </article>
      </section>
    </>
  );
};

export default Cart;
