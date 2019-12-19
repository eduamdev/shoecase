import React from 'react';
import { ReactComponent as SvgFacebook } from '../icons/facebook.svg';
import { ReactComponent as SvgTwitter } from '../icons/twitter.svg';
import { ReactComponent as SvgInstagram } from '../icons/instagram.svg';

const Footer = () => {
  return (
    <footer className=''>
      <section className='w-full p-6'>
        <p className='capitalize font-medium mb-4'>Sign Up to Our Newsletter</p>
        <input
          className='w-full px-4 py-2 bg-gray-200 border-none outline-none tracking-wider'
          placeholder='ENTER YOUR EMAIL'
          type='text'
        />
      </section>
      <section className='inline-block align-top w-1/2 p-6'>
        <p className='capitalize font-medium mb-4'>store</p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          contact us
        </p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          our store
        </p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          about us
        </p>
      </section>
      <section className='inline-block align-top w-1/2 p-6'>
        <p className='capitalize font-medium mb-4'>orders</p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          delivery & returns
        </p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          my account
        </p>
        <p className='text-sm text-gray-800 capitalize leading-loose'>
          collect in store
        </p>
        <p className='text-sm text-gray-800 uppercase leading-loose'>faq</p>
      </section>
      <section className='w-full p-6'>
        <p className='capitalize font-medium mb-4'>social</p>
        <div className='flex mb-4'>
          <SvgFacebook className='h-4 w-4 mr-6'></SvgFacebook>
          <SvgTwitter className='h-4 w-4 mr-6'></SvgTwitter>
          <SvgInstagram className='h-4 w-4'></SvgInstagram>
        </div>
      </section>
      <section className='bg-black px-6 py-8'>
        <p className='text-gray-200 text-xs tracking-widest font-thin text-center leading-loose'>
          Design & built by Eduardo Rodriguez, twitter & github
        </p>
      </section>
    </footer>
  );
};

export default Footer;
