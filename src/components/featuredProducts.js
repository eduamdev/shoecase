import React from 'react';
import Img from 'react-image';
import shoe1 from '../images/products/batcombe-lord.jpg';
import shoe2 from '../images/products/calla-rose.webp';
import shoe3 from '../images/products/orson-harbour.webp';

const FeaturedProducts = () => {
  return (
    <section className='hidden lg:flex flex-wrap'>
      <div className='w-full border-t border-gray-300 p-8'>
        <h2 className='font-bold uppercase leading-loose lg:text-3xl lg:tracking-wide text-center'>
          featured
        </h2>
      </div>
      <div className='w-full lg:w-1/3 lg:border-r border-t border-b border-gray-300 lg:p-12'>
        <Img className='  lg:h-64 object-cover rounded-sm' src={shoe1} alt='' />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          shoe 1
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>$125</p>
      </div>
      <div className='w-full lg:w-1/3 lg:border-r border-t border-b border-gray-300 lg:p-12'>
        <Img className='  lg:h-64 object-cover rounded-sm' src={shoe2} alt='' />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          shoe 2
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>$125</p>
      </div>
      <div className='w-full lg:w-1/3 border-t border-b border-gray-300 lg:p-12'>
        <Img className='  lg:h-64 object-cover rounded-sm' src={shoe3} alt='' />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          Shoe 3
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>$125</p>
      </div>
    </section>
  );
};

export default FeaturedProducts;
