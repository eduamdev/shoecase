import React from 'react';
import NavBar from './navBar';
import banner from '../images/banner.jpg';

function App() {
  return (
    <div className='App custom-font'>
      <div className='w-full text-center bg-gray-100 py-3 text-sm text-gray-600 font-light tracking-wide'>
        Free ships worldwide!
      </div>
      <NavBar></NavBar>
      <img
        className='w-full h-56 object-cover'
        src={banner}
        alt='grey sneakers on black banner'
      />
    </div>
  );
}

export default App;
