import React from 'react';

const NavBar = () => {
  return (
    <nav className='px-8 py-4 border-t border-gray-200'>
      <div className='font-bold uppercase text-center'>shoecase</div>
      <div className='pt-4'>
        <div className='w-full bg-gray-200 py-2 px-4 rounded-sm'>search</div>
      </div>
    </nav>
  );
};

export default NavBar;
