import { useState, useEffect } from 'react';

export const slideNumber = (lg, md, sm, xs) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1160) {
      setSlidesToShow(lg);
    } else if (windowWidth >= 768) {
      setSlidesToShow(md);
    } else if (windowWidth >= 640) {
      setSlidesToShow(sm);
    } else {
      setSlidesToShow(xs);
    }
  }, [windowWidth]);
  return { slidesToShow };
};
