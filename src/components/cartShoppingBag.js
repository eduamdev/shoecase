import React, { useState } from 'react';
import Icon from './common/icon';
import Image from './common/image';
import IconButton from './iconButton';
import ProductQuantity from './productQuantity';

const CartShoppingBag = () => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    const currValue = e.target.value;
    const re = /^[0-9\b]+$/;

    if (currValue === '') setQuantity(1);
    if (re.test(currValue)) {
      setQuantity(Number.parseInt(currValue, 10));
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity >= 2) setQuantity(quantity - 1);
  }

  return (
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
              <Image name='batcombe-lord' alt='shoe' type='cart'></Image>
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
            <ProductQuantity
              quantity={quantity}
              handleQuantityChange={handleQuantityChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            ></ProductQuantity>
          </div>
          <span className='font-medium'>$ 1,680.00</span>
        </div>
      </article>

      {/* Large sizes */}
      <article className='w-full bg-white rounded-sm mb-12 lg:p-10 hidden lg:block px-4 md:px-6 lg:px-12 lg:shadow'>
        <div className='flex flex-wrap items-start justify-between'>
          <div>
            <Image name='batcombe-lord' alt='shoe' type='cart'></Image>
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
              <ProductQuantity
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              ></ProductQuantity>
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
  );
};

export default CartShoppingBag;
