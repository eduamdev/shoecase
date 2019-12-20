import React from 'react';
import { ReactComponent as SvgFacebook } from '../icons/facebook.svg';
import { ReactComponent as SvgTwitter } from '../icons/twitter.svg';
import { ReactComponent as SvgInstagram } from '../icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='border-t border-gray-300'>
      <section className='bg-black py-6'>
        <article className='w-full p-6'>
          <p className='capitalize font-medium mb-4 text-gray-300'>
            Sign Up to Our Newsletter
          </p>
          <input
            className='w-full px-4 py-2 bg-gray-900 text-gray-400 border-none outline-none text-sm tracking-wider'
            placeholder='ENTER YOUR EMAIL'
            type='text'
          />
        </article>
        <article className='inline-block align-top w-1/2 p-6'>
          <p className='capitalize font-medium font-sm mb-4 text-gray-300'>
            store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            contact us
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            our store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            about us
          </p>
        </article>
        <article className='inline-block align-top w-1/2 p-6'>
          <p className='capitalize font-medium font-sm mb-4 text-gray-300'>
            orders
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            delivery & returns
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            my account
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 capitalize leading-loose'>
            collect in store
          </p>
          <p className='text-sm tracking-wider font-light leading-loose text-gray-400 uppercase leading-loose'>
            faq
          </p>
        </article>
        <article className='w-full p-6'>
          <p className='capitalize font-medium font-sm mb-4 text-gray-300'>
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
