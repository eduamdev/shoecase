import React from 'react';
import Input from './common/input';
import Icon from './common/icon';
import Image from './common/image';
import MainButton from './mainButton';
import IconButton from './iconButton';

const Cart = () => {
  return (
    <div className='flex flex-wrap bg-gray-200 lg:items-stretch'>
      <section className='w-full lg:w-4/6 xl:max-w-4xl mx-auto pt-12 lg:py-16 px-4 md:px-6 lg:px-12'>
        <h2 className='text-xl  lg:text-2xl font-bold uppercase tracking-wide mb-4 lg:mb-8'>
          your shopping bag{' '}
          <span className='font-light text-sm text-gray-800 ml-2'>(2)</span>
        </h2>

        {/* Small */}
        <article className='w-full bg-white rounded-sm mb-12 lg:hidden'>
          <div className='py-10 px-4 md:px-6 lg:px-12 border-b border-gray-300'>
            <div className='flex flex-wrap w-full'>
              <div className='w-1/2 md:w-auto'>
                <Image
                  slug='batcombe-lord'
                  alt='shoe'
                  classes='w-24 object-cover'
                ></Image>
              </div>
              <div className='w-1/2 md:ml-32'>
                <div className='flex content-between flex-wrap h-full'>
                  <h3 className='w-full uppercase font-medium md:text-lg tracking-wide'>
                    batcombe lord
                  </h3>
                  <IconButton
                    className='border py-2 px-4 border-gray-300 rounded-sm'
                    icon={<Icon type='trashCan' />}
                  />
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
          <div className='flex flex-wrap items-center justify-between py-6 px-4 md:px-6 lg:px-12'>
            <div className='border border-black'>
              <button className='bg-gray-100 px-4 py-2'>-</button>
              <input className='w-12 px-4 py-2' type='text' value='1' />
              <button className='bg-gray-100 px-4 py-2'>+</button>
            </div>
            <span className='font-medium'>$ 1,680.00</span>
          </div>
        </article>

        {/* Large sizes */}
        <article className='w-full bg-white rounded-sm mb-12 lg:p-10 hidden lg:block px-4 md:px-6 lg:px-12 lg:shadow'>
          <div className='flex flex-wrap items-start justify-between'>
            <div>
              <Image
                slug='batcombe-lord'
                alt='shoe'
                classes='w-16 object-cover'
              ></Image>
            </div>
            <div className='w-2/6'>
              <h3 className='w-full uppercase text-lg tracking-wide font-semibold'>
                batcombe lord
              </h3>
              <p className='w-full font-light text-sm text-gray-800 tracking-wide leading-relaxed my-4'>
                Reference: 1A586V
              </p>
              <p className='w-full text-sm tracking-wide leading-relaxed'>
                Color: Noir
              </p>
              <button className='border py-2 px-4 border-gray-300 rounded-sm mt-8'>
                <Icon type='trashCan'></Icon>
              </button>
            </div>
            <div>
              <div className='border border-black'>
                <button className='bg-gray-100 px-4 py-2'>-</button>
                <input className='w-12 px-4 py-2' type='text' value='1' />
                <button className='bg-gray-100 px-4 py-2'>+</button>
              </div>
            </div>
            <div className='font-medium '>$ 1,680.00</div>
          </div>
        </article>

        <article className='w-full bg-white rounded-sm px-4 md:px-6 lg:px-12 py-10 lg:py-10 lg:shadow'>
          <div className='flex flex-wrap items-center justify-between  tracking-wide leading-loose'>
            <div className='w-1/2 text-left text-sm md:text-base capitalize mb-4 lg:mb-6'>
              subtotal :
            </div>
            <div className='w-1/2 text-right text-sm md:text-base mb-4 lg:mb-6'>
              $ 2,470.00
            </div>
            <div className='w-1/2 text-left text-sm md:text-base capitalize mb-4 lg:mb-6'>
              shipping :
            </div>
            <div className='w-1/2 text-right text-sm md:text-base mb-4 lg:mb-6'>
              $0.00
            </div>
            <div className='w-1/2 text-left font-bold capitalize text-lg md:text-xl'>
              total :
            </div>
            <div className='w-1/2 text-right font-bold text-lg md:text-xl'>
              2, 470.00
            </div>
          </div>
        </article>
      </section>
      <section className='w-full lg:w-2/6 bg-gray-200 py-12 lg:py-16 px-4 md:px-6 lg:px-12 lg:bg-white '>
        <h2 className='text-xl font-bold uppercase tracking-wide mb-4 lg:hidden'>
          payment details
        </h2>
        <article className='w-full bg-white rounded-sm px-4 md:px-6 lg:px-0'>
          <div className=' py-10 lg:py-0 border-b border-gray-300 tracking-wide lg:border-none'>
            <h2 className='text-xl lg:text-2xl font-bold uppercase tracking-wide mb-4 hidden lg:block lg:pb-8'>
              payment details
            </h2>
            <Input
              name='email'
              label='email *'
              placeholder='email@domain.com'
            ></Input>
            <Input
              name='creditCard'
              label='credit card *'
              placeholder=''
            ></Input>

            <MainButton>Pay with Credit Card</MainButton>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Cart;
