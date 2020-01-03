import React from 'react';

const ContactDetails = () => {
  return (
    <article className='w-full h-full bg-white' style={{ minHeight: '600px' }}>
      <div className='w-full bg-white rounded-sm hidden lg:block'>
        <div className='px-4 md:px-6 lg:px-12 py-4 lg:py-6 border-b border-gray-300 tracking-wide text-center'>
          <span className='tracking-wider font-sans'>
            Call Us +52 800 SHOECASE
          </span>
        </div>
      </div>
      <div className='bg-white px-4 md:px-6 lg:px-12'>
        <ul>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 border-b border-gray-300 capitalize'>
            packaging
          </li>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 border-b border-gray-300 capitalize'>
            shipping & delivery
          </li>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 border-b border-gray-300 capitalize'>
            nextDay collect-in store
          </li>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 border-b border-gray-300 capitalize'>
            returns & exchanges
          </li>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 border-b border-gray-300 capitalize'>
            payment
          </li>
          <li className='text-sm font-light tracking-wide lg:tracking-wider py-6 capitalize'>
            contact
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ContactDetails;
