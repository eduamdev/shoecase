import React from 'react';
import Img from 'react-image';
import batcombeLord from '../images/products/batcombe-lord.jpg';
import { ReactComponent as SvgTrashCan } from '../icons/trash-can.svg';

const Cart = () => {
  return (
    <>
      <section className='w-full bg-gray-200 pt-12 px-4'>
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
                  <button className='border py-2 px-4 border-gray-300 rounded-sm'>
                    <SvgTrashCan className='w-4 h-4'></SvgTrashCan>
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
          <div className='flex flex-wrap items-center justify-between py-6 px-4'>
            <div className='border border-black'>
              <button className='bg-gray-100 px-4 py-2'>-</button>
              <input className='w-12 px-4 py-2' type='text' value='1' />
              <button className='bg-gray-100 px-4 py-2'>+</button>
            </div>

            <span className='font-medium'>$ 1,680.00</span>
          </div>
        </article>
        <article className='w-full bg-white rounded-sm'>
          <div className='flex flex-wrap items-center justify-between py-6 px-4 border-b border-gray-300 tracking-wide leading-loose'>
            <div className='w-1/2 text-left capitalize mb-4'>subtotal :</div>
            <div className='w-1/2 text-right mb-4'>$ 2,470.00</div>
            <div className='w-1/2 text-left capitalize mb-4'>shipping :</div>
            <div className='w-1/2 text-right mb-4'>$0.00</div>
            <div className='w-1/2 text-left font-bold capitalize text-xl'>
              total :
            </div>
            <div className='w-1/2 text-right font-bold text-xl'>2, 470.00</div>
          </div>
        </article>
      </section>
      <section className='w-full bg-gray-200 py-12 px-4'>
        <h2 className='text-xl font-bold uppercase tracking-wide mb-4'>
          shopping details
        </h2>
        <article className='w-full bg-white rounded-sm'>
          <div className=' py-6 px-4 border-b border-gray-300 tracking-wide leading-loose'>
            <div className='w-full text-left text-xs capitalize mb-4'>
              email *
            </div>
            <input className='w-full mb-4 border border-gray-300 rounded-sm' />
            <div className='w-full text-left text-xs capitalize mb-4'>
              credit card *
            </div>
            <input className='w-full mb-4 border border-gray-300 rounded-sm' />
            <button className='w-full bg-black tracking-wider font-light text-xs text-white text-center py-3 rounded-sm mt-10 mb-6'>
              Pay with Credit Card
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Cart;
