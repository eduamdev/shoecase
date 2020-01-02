import React from 'react';
import InputWithLabel from './InputWithLabel';
import MainButton from './mainButton';

const CartPaymentDetails = () => {
  return (
    <section className='w-full lg:w-2/6 bg-gray-200 py-12 lg:py-16 px-4 md:px-6 lg:px-12 lg:bg-white '>
      <h2 className='text-xl font-bold uppercase tracking-wide mb-4 lg:hidden'>
        payment details
      </h2>
      <article className='w-full bg-white rounded-sm px-4 md:px-6 lg:px-0'>
        <div className=' py-10 lg:py-0 border-b border-gray-300 tracking-wide lg:border-none'>
          <h2 className='text-xl lg:text-2xl font-bold uppercase tracking-wide mb-4 hidden lg:block lg:pb-8'>
            payment details
          </h2>
          <InputWithLabel
            label='email *'
            name='email'
            placeholder='email@domain.com'
          ></InputWithLabel>
          <InputWithLabel
            label='credit card *'
            name='creditCard'
            placeholder=''
          ></InputWithLabel>

          <MainButton>Pay with Credit Card</MainButton>
        </div>
      </article>
    </section>
  );
};

export default CartPaymentDetails;
