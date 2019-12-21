import React from 'react';
import Img from 'react-image';
import comfort from '../images/comfort.jpg';
import waterproof from '../images/waterproof.jpg';
import lightWeight from '../images/light-weight.jpg';
import customizable from '../images/customizable.jpg';

const Benefits = () => {
  return (
    <section className='flex flex-wrap'>
      <div className='w-full md:w-1/3 md:border-r border-b border-gray-300 p-6 md:p-12'>
        <Img
          className='w-full h-40 md:h-56 xl:h-64 object-cover rounded-sm'
          src={comfort}
          alt='A pair of comfortable shoes'
        />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          comfort
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>
          Like walking on the clouds
        </p>
      </div>
      <div className='w-full md:w-1/3 md:border-r border-b border-gray-300 p-6 md:p-12'>
        <Img
          className='w-full h-40 md:h-56 xl:h-64 object-cover rounded-sm'
          src={waterproof}
          alt='A pair of waterproof shoes'
        />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          waterproof
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>
          No more wet socks
        </p>
      </div>
      <div className='w-full md:w-1/3 border-b border-gray-300 p-6 md:p-12'>
        <Img
          className='w-full h-40 md:h-56 xl:h-64 object-cover rounded-sm'
          src={lightWeight}
          alt='very light weight sneakers'
        />
        <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
          light weight
        </p>
        <p className=' text-sm tracking-wide lg:text-base font-light'>
          As light as air
        </p>
      </div>
      <div className='relative w-full lg:w-5/6 p-6 pb-24 md:p-12'>
        <Img
          className='w-full h-72 md:h-108 md:pr-40 lg:h-160 lg:p-0 object-cover relative rounded-sm'
          src={customizable}
          alt='A rack of shoes'
        />
        <div className='absolute left-0 right-0 -mt-8 mx-auto w-64 md:w-72 lg:w-84 md:right-0 md:left-auto md:-mt-32 md:bottom-0 md:mb-24 md:p-10 lg:-mr-16 bg-white p-6 rounded-sm shadow-md'>
          <p className='font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
            customizable
          </p>
          <p className=' text-sm tracking-wide lg:text-base font-light'>
            Your shoes, your style
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
