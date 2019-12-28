import React from 'react';
import Image from './common/image';
import ImageCard from './imageCard';
import { benefits } from '../config.json';

let last = benefits.pop();

const Benefits = () => {
  return (
    <section className='flex flex-wrap'>
      {benefits &&
        benefits.map(benefit => (
          <ImageCard
            key={benefit.key}
            slug={benefit.key}
            alt={benefit.title}
            title={benefit.title}
            text={benefit.text}
          ></ImageCard>
        ))}

      {last && (
        <article className='relative w-full lg:w-5/6 p-6 pb-32 md:p-12 lg:py-16'>
          <Image
            slug={last.key}
            alt={last.alt}
            classes='w-full h-72 md:h-108 md:pr-40 lg:h-160 lg:p-0 object-cover relative rounded-sm'
          />
          <div className='absolute left-0 right-0 -mt-8 mx-auto w-64 md:w-72 lg:w-84 md:right-0 md:left-auto md:-mt-32 md:bottom-0 md:mb-24  p-8  md:p-10 lg:px-12 lg:-mr-16 bg-white rounded-sm shadow-lg'>
            <p className='font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
              {last.title}
            </p>
            <p className=' text-sm tracking-wide lg:text-base font-light'>
              {last.text}
            </p>
          </div>
        </article>
      )}
    </section>
  );
};

export default Benefits;
