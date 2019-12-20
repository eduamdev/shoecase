import React from 'react';
import Img from 'react-image';
import { ReactComponent as SvgFilter } from '../icons/filter.svg';
import { ReactComponent as SvgPlus } from '../icons/plus.svg';
import batcombeLord from '../images/products/batcombe-lord.jpg';
import orsonHarbour from '../images/products/orson-harbour.webp';

const Men = () => {
  return (
    <>
      <section className='flex flex-wrap items-center justify-center w-full h-12 px-8 py-2 border-b border-gray-300'>
        <h1 className='text-center tracking-wide text-gray-800 font-bold uppercase'>
          Men
        </h1>
      </section>
      <section className='w-full h-12 border-b border-gray-300'>
        <div className='flex flex-wrap items-center justify-between w-full h-full'>
          <p className='text-left capitalize font-bold pl-8'>
            All shoes{' '}
            <span className='text-sm font-light tracking-wide'>
              ( 2 Products)
            </span>
          </p>
          <div className='w-32 h-full border-l border-gray-300'>
            <button className='flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none border-transparent focus:outline-none focus:border-black pr-8'>
              <SvgFilter className='h-4 w-4 mr-2'></SvgFilter>
              <p className='text-sm tracking-wide'>Filters</p>
            </button>
          </div>
        </div>
      </section>
      <section className='w-full h-full border-b border-gray-300'>
        <div className='w-full h-12 px-8'>
          <div className='flex flex-wrap items-center justify-between w-full h-12 border-b border-gray-300'>
            <p className='text-left text-sm uppercase tracking-wide font-bold'>
              categories
            </p>
            <SvgPlus className='h-4 w-4 text-gray-600 fill-current'></SvgPlus>
          </div>
        </div>
        <div className='w-full px-8 bg-gray-200'>
          <ul className='w-full py-4'>
            <li className='flex flex-wrap items-center  w-full h-12 text-left text-sm capitalize font-light tracking-wide'>
              sports
            </li>
            <li className='flex flex-wrap items-center  w-full h-12 text-left text-sm capitalize font-light tracking-wide'>
              casual
            </li>
            <li className='flex flex-wrap items-center  w-full h-12 text-left text-sm capitalize font-light tracking-wide'>
              formal
            </li>
          </ul>
        </div>
        <div className='w-full h-12 px-8'>
          <div className='flex flex-wrap items-center justify-between w-full h-12'>
            <p className='text-left text-sm uppercase tracking-wide font-bold'>
              colors
            </p>
            <SvgPlus className='h-4 w-4 text-gray-600 fill-current'></SvgPlus>
          </div>
        </div>
        <div className='w-full px-8 bg-gray-200 '>
          <div className='flex flex-wrap items-center w-full h-24'>
            <div className='h-6 w-6 bg-red-400 mr-4 border border-transparent'></div>
            <div className='h-6 w-6 bg-blue-400 mr-4 border border-transparent'></div>
            <div className='h-6 w-6 bg-yellow-400 mr-4 border border-transparent'></div>
            <div className='h-6 w-6 bg-orange-400 mr-4 border border-transparent'></div>
            <div className='h-6 w-6 bg-gray-100 mr-4 border border-black'></div>
          </div>
        </div>
      </section>
      <section className='flex flex-wrap w-full'>
        <article className='w-1/2 border-r border-b border-gray-300'>
          <div className='h-full w-full border-4 border-transparent hover:border-gray-300 p-4 py-10'>
            <Img
              className='w-full h-48 object-cover'
              src={batcombeLord}
              alt='shoes'
            />
            <h2 className='pt-4 font-bold uppercase tracking-wide leading-loose'>
              Batcombe Lord
            </h2>
            <p className='font-light font-sm tracking-wide'>$145</p>
          </div>
        </article>
        <article className='w-1/2 border-b border-gray-300'>
          <div className='h-full w-full border-4 border-transparent hover:border-gray-300 px-4 py-10'>
            <Img
              className='w-full h-48 object-cover'
              src={orsonHarbour}
              alt='shoes'
            />
            <h2 className='pt-4 font-bold uppercase tracking-wide leading-loose'>
              orson harbour
            </h2>
            <p className='font-light font-sm tracking-wide'>$115</p>
          </div>
        </article>
        <article className='w-1/2 border-r border-b border-gray-300'>
          <div className='h-full w-full border-4 border-transparent hover:border-gray-200 p-4 py-10'>
            <Img
              className='w-full h-48 object-cover'
              src={batcombeLord}
              alt='shoes'
            />
            <h2 className='pt-4 font-bold uppercase tracking-wide leading-loose'>
              Batcombe Lord
            </h2>
            <p className='font-light font-sm tracking-wide'>$145</p>
          </div>
        </article>
        <article className='w-1/2 border-b border-gray-300'>
          <div className='h-full w-full border-4 border-transparent hover:border-gray-200 px-4 py-10'>
            <Img
              className='w-full h-48 object-cover'
              src={orsonHarbour}
              alt='shoes'
            />
            <h2 className='pt-4 font-bold uppercase tracking-wide leading-loose'>
              orson harbour
            </h2>
            <p className='font-light font-sm tracking-wide'>$115</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Men;
