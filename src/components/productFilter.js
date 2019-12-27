import React from 'react';
import { ReactComponent as SvgFilter } from '../icons/filter.svg';
import { ReactComponent as SvgPlus } from '../icons/plus.svg';
import { ReactComponent as SvgMinus } from '../icons/minus.svg';
import { ReactComponent as SvgArrowUp } from '../icons/arrow-up.svg';

const ProductFilter = ({ areFiltersShowing, handleFiltersClick }) => {
  const btnFilterClasses = areFiltersShowing
    ? 'flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none focus:outline-none border-black pr-4 py-2 md:py-4 lg:py-6 px-4 lg:px-6 xl:px-8'
    : 'flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none focus:outline-none border-transparent  pr-4 py-2 md:py-4 lg:py-6 px-4 lg:px-6 xl:px-8';

  return (
    <>
      <section
        className={`relative bg-white w-full h-12 border-b border-gray-300 md:h-auto z-20`}
      >
        <div className='flex flex-wrap items-center justify-between w-full h-full '>
          <p className='text-left capitalize font-bold pl-4 lg:pl-6 xl:pl-8 md:text-lg'>
            All shoes{' '}
            <span className='text-sm font-light tracking-wider lg:ml-3 text-gray-800 lg:font-light'>
              ( 4 Products)
            </span>
          </p>
          <div className='w-32 md:w-40 xl:w-48 h-full border-l border-gray-300 '>
            <button onClick={handleFiltersClick} className={btnFilterClasses}>
              <SvgFilter className='h-4 w-4 md:h-5 md:w-5 mr-2 lg:mr-4'></SvgFilter>
              <p className='text-base md:text-lg tracking-wide'>Filters</p>
            </button>
          </div>
        </div>
      </section>

      {areFiltersShowing && (
        <>
          {/* Small devices */}
          <section className='relative bg-white w-full h-full border-b border-gray-300 md:hidden z-20'>
            <div className='w-full h-12 px-4'>
              <div className='flex flex-wrap items-center justify-between w-full h-12 border-b border-gray-300'>
                <p className='text-left text-sm uppercase tracking-wide font-bold'>
                  categories
                </p>
                <div className='flex flex-wrap items-center'>
                  <p className='text-sm font-sans tracking-wider underline mr-6 hidden'>
                    Reset
                  </p>
                  <SvgPlus className='h-4 w-4 text-gray-800 fill-current'></SvgPlus>
                </div>
              </div>
            </div>
            <div className='w-full px-4 bg-gray-200 hidden'>
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
            <div className='w-full h-12 px-4'>
              <div className='flex flex-wrap items-center justify-between w-full h-12'>
                <p className='text-left text-sm uppercase tracking-wide font-bold'>
                  colors
                </p>
                <div className='flex flex-wrap items-center'>
                  <p className='text-sm font-sans tracking-wider underline mr-6'>
                    Reset
                  </p>
                  <SvgMinus className='h-4 w-4 text-gray-800 fill-current'></SvgMinus>
                </div>
              </div>
            </div>
            <div className='w-full px-4 bg-gray-200 '>
              <div className='flex flex-wrap items-center w-full h-24'>
                <div className='h-8 w-8 bg-red-400 mr-3 border-2 border-gray-200'></div>
                <div className='h-8 w-8 bg-blue-400 mr-3 border-2 border-gray-200'></div>
                <div className='h-8 w-8 bg-yellow-400 mr-3 border-2 border-gray-200'></div>
                <div className='h-8 w-8 bg-orange-400 mr-3 border-2 border-gray-200 shadow-outline'></div>
                <div className='h-8 w-8 bg-gray-100 mr-3 border-2 border-gray-200 shadow-outline'></div>
              </div>
            </div>
          </section>

          {/* Medium+ devices */}
          <section className='relative bg-white hidden md:flex flex-wrap w-full h-full border border-gray-300 z-20'>
            <div className='w-1/2 border-r border-gray-300 py-2 md:py-6 lg:py-8'>
              <div className='flex flex-wrap justify-between w-full px-4 lg:px-6 xl:px-8'>
                <h2 className='font-bold tracking-wide uppercase'>
                  categories
                </h2>
                <button className='capitalize underline active:outline-none focus:outline-none'>
                  reset
                </button>
              </div>
              <div className='w-full px-4 lg:px-6 xl:px-8 mt-6'>
                <ul>
                  <li className='leading-loose mb-3'>
                    <button className='capitalize active:outline-none focus:outline-none pr-4'>
                      sport
                    </button>
                  </li>
                  <li className='leading-loose mb-3'>
                    <button className='capitalize active:outline-none focus:outline-none pr-4'>
                      formal
                    </button>
                  </li>
                  <li className='leading-loose mb-3'>
                    <button className='capitalize active:outline-none focus:outline-none pr-4'>
                      casual
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-1/2 py-2 md:py-6 lg:py-8 px-4 lg:px-6 xl:px-8'>
              <div className='flex flex-wrap justify-between w-full '>
                <h2 className='font-bold tracking-wide uppercase'>colors</h2>
                <button className='capitalize underline active:outline-none focus:outline-none'>
                  reset
                </button>
              </div>
              <div className='mt-6'>
                <button className='w-8 h-8 border border-white bg-red-400 mr-3 active:outline-none focus:outline-none focus:shadow-outline active:shadow-outline'></button>
                <button className='w-8 h-8 border border-white bg-blue-400 mr-3 active:outline-none focus:outline-none focus:shadow-outline active:shadow-outline'></button>
                <button className='w-8 h-8 border border-white bg-yellow-400 mr-3 active:outline-none focus:outline-none focus:shadow-outline active:shadow-outline'></button>
              </div>
            </div>
            <button
              onClick={handleFiltersClick}
              className='close-filters flex flex-wrap items-center w-full border border-gray-300 py-2 md:py-4 focus:outline-none active:outline-none'
            >
              <div className='w-32 m-auto'>
                <SvgArrowUp className='h-4 w-4 text-gray-800 fill-current inline mr-4'></SvgArrowUp>{' '}
                <span className='close-filters__label leading-loose text-center capitalize inline'>
                  hide filters
                </span>
              </div>
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default ProductFilter;
