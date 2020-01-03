import React from 'react';
import Icon from './common/icon';

const SuccessfulOrder = () => {
  return (
    <section className='bg-gray-200 w-full py-4 md:py-10 lg:py-20'>
      <article className='bg-white mx-auto px-4 md:px-10 py-12 md:py-24 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl shadow rounded-sm'>
        <Icon
          type='checkMark'
          className='h-12 w-12 lg:h-20 lg:w-20 mx-auto p-2 lg:p-4 my-8 rounded-full border-2 lg:border-4 border-black'
        ></Icon>
        <h2 className='text-center font-bold uppercase text-xl lg:text-3xl tracking-wide mb-4'>
          order placed successfully
        </h2>
        <p className='text-center text-sm tracking-wide leading-loose max-w-md xl:max-w-2xl mx-auto mb-4'>
          Thank you very much for your order. It is expected to arrive between 3
          and 5 business days.
        </p>
      </article>
    </section>
  );
};

export default SuccessfulOrder;
