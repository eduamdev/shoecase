import React from 'react';
import Img from 'react-image';
import ImageCard from './imageCard';
import comfort from '../images/comfort.jpg';
import waterproof from '../images/waterproof.jpg';
import lightWeight from '../images/light-weight.jpg';
import customizable from '../images/customizable.jpg';

const Benefits = () => {
  return (
    <section className='flex flex-wrap'>
      <ImageCard
        image={comfort}
        alt='A pair of comfortable shoes'
        title='comfort'
        text='Like walking on the clouds'
      ></ImageCard>
      <ImageCard
        image={waterproof}
        alt='waterproof footwear'
        title='waterproof'
        text='No more wet socks'
      ></ImageCard>
      <ImageCard
        image={lightWeight}
        alt='A pair of light weight sneakers'
        title='light weight'
        text='As light as air'
      ></ImageCard>
      <article className='relative w-full lg:w-5/6 p-6 pb-24 md:p-12 lg:py-16'>
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
      </article>
    </section>
  );
};

export default Benefits;
