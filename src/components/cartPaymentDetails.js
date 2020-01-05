import React from 'react';
import InputWithLabel from './inputWithLabel';
import MainButton from './mainButton';
import Form from './common/form';

const CartPaymentDetails = () => {
  return (
    <article className='h-full bg-gray-200 py-12 lg:py-16 px-4 md:px-6 lg:px-12 lg:bg-white'>
      <h2 className='text-xl font-bold uppercase tracking-wide mb-4 lg:hidden'>
        payment details
      </h2>
      <div className='w-full bg-white rounded-sm px-4 md:px-6 lg:px-0'>
        <div className=' py-10 lg:py-0 border-b border-gray-300 tracking-wide lg:border-none'>
          <h2 className='text-xl lg:text-2xl font-bold uppercase tracking-wide mb-4 hidden lg:block lg:pb-8'>
            payment details
          </h2>
          <Form>
            <InputWithLabel
              label='email *'
              name='email'
              className='w-full px-4 py-3 border outline-none text-sm tracking-wider mb-10 rounded-sm border-gray-300'
              placeholder='email@domain.com'
            ></InputWithLabel>
            <InputWithLabel
              label='credit card *'
              name='creditCard'
              placeholder=''
            ></InputWithLabel>
            <MainButton>Pay with Credit Card</MainButton>
          </Form>
        </div>
      </div>
    </article>
  );
};

export default CartPaymentDetails;
