import React from 'react';
import Banner from '../components/banner';
import Features from '../components/features';
import FeaturedProducts from '../components/featuredProducts';

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
