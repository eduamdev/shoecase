import React from 'react';
import Banner from './banner';
import Features from './features';
import FeaturedProducts from './featuredProducts';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Features></Features>
      <FeaturedProducts title='featured products'></FeaturedProducts>
    </>
  );
};

export default Home;
