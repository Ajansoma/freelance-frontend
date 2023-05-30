import { useState, useEffect } from 'react';
import Carousel from 'infinite-react-carousel';
import 'tailwindcss/tailwind.css';

const Slide = (props) => {
  const { children, slidesToShow, arrowsScroll, className } = props;

  const settings = {
    // carousel settings
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    arrowsScroll: arrowsScroll,
  };

  return (
    <div>
      <Carousel {...settings} className={className}>
        {children}
      </Carousel>
    </div>
  );
};

export default Slide;
