import React from 'react';
import GigSlider from './GigSlider/GigSlider';
import TrustedBy from '../TrustedBy/TrustedBy';
import Features from './Features';
import FiverrBusiness from './FiverrBusiness';
import Projects from './Projects/Projects';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className="max-w-[90rem] mx-auto my-0 flex flex-col justify-center">
      <Header />
      <TrustedBy />
      <GigSlider />
      <Features />
      <FiverrBusiness />
      <Projects />
    </div>
  );
};

export default Home;
