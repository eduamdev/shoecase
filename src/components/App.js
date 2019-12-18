import React from 'react';
import NavBar from './navBar';
import Benefits from './benefits';
import banner from '../images/banner.jpg';

function App() {
  return (
    <div className='App font-custom'>
      <div className='w-full text-center bg-red-100 border-b border-gray-200 py-2 text-sm text-gray-800 font-light tracking-wider'>
        Free ships worldwide!
      </div>
      <NavBar></NavBar>
      <img
        className='w-full h-56 object-cover'
        src={banner}
        alt='grey sneakers on black banner'
      />
      <Benefits></Benefits>
    </div>
  );
}

export default App;
