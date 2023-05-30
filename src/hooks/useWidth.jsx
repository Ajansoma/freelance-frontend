import { useState, useEffect } from 'react';

const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    // Function to handle the window resize event
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    // Attach the handleWindowResize function to the window resize event
    window.addEventListener('resize', handleWindowResize);

    // Call the handleWindowResize function initially to check the window width on component mount
    handleWindowResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { windowWidth };
};

export default useWidth;
