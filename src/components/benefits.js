import React from 'react';
import comfort from '../images/shoes1.jpg';
import durable from '../images/shoes2.jpg';
import lightWeight from '../images/shoes3.jpg';

const Benefits = () => {
  return (
    <div className=''>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={comfort}
          alt='A pair of comfortable shoes'
        />
        <h2 className='pt-4 font-bold uppercase leading-loose'>comfort</h2>
        <p className='capitalize text-xs tracking-wide'>
          Like walking on the clouds
        </p>
      </div>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={durable}
          alt='A pair of durable boots'
        />
        <h2 className='pt-4 font-bold uppercase leading-loose'>durable</h2>
        <p className='capitalize text-xs tracking-wide'>Made to last</p>
      </div>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={lightWeight}
          alt='A pair of light weight sneakers'
        />
        <h2 className='pt-4 font-bold uppercase leading-loose'>light weight</h2>
        <p className='capitalize text-xs tracking-wide'>
          Even lighter than a feather
        </p>
      </div>
    </div>
  );
};

export default Benefits;
