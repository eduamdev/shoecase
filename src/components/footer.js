import React from 'react';
import { ReactComponent as SvgFacebook } from '../icons/facebook.svg';
import { ReactComponent as SvgTwitter } from '../icons/twitter.svg';
import { ReactComponent as SvgInstagram } from '../icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-300'>
      <section
        className='flex flex-wrap py-6 lg:px-12 md:justify-between md:py-16 xl:py-24 lg:text-lg mx-auto'
        style={{ maxWidth: '1440px' }}
      >
        <article className='w-full md:w-1/4 lg:w-2/6 p-6'>
          <p className='capitalize font-medium mb-4 md:mb-6 text-gray-300'>
            Sign Up to Our Newsletter
          </p>
          <input
            className='w-full px-4 py-3 md:px-6 md:py-4 bg-gray-900 text-gray-400 border-none outline-none text-sm tracking-wider rounded-sm'
            placeholder='ENTER YOUR EMAIL'
            type='text'
          />
        </article>
        <article className='inline-block align-top w-1/2 md:w-1/4 lg:w-1/6 p-6'>
          <p className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
            store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize  lg:text-base'>
            contact us
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize  lg:text-base'>
            our store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize  lg:text-base'>
            about us
          </p>
        </article>
        <article className='inline-block align-top w-1/2 md:w-1/4 lg:w-1/6 p-6'>
          <p className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
            orders
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize lg:text-base'>
            delivery & returns
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize  lg:text-base'>
            my account
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize lg:text-base'>
            collect in store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 uppercase'>
            faq
          </p>
        </article>
        <article className='w-full md:w-1/4 lg:w-1/6 p-6'>
          <p className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
            social
          </p>
          <div className='flex mb-4 text-gray-400 fill-current'>
            <SvgFacebook className='h-4 w-4 mr-6'></SvgFacebook>
            <SvgTwitter className='h-4 w-4 mr-6'></SvgTwitter>
            <SvgInstagram className='h-4 w-4'></SvgInstagram>
          </div>
        </article>
      </section>

      <section className='bg-black px-6 py-10'>
        <p className='text-gray-200 text-sm tracking-wider font-thin text-center leading-loose'>
          Design & built by Eduardo Rodriguez, twitter & github
        </p>
      </section>
    </footer>
  );
};

export default Footer;
