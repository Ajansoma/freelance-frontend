import { useState, useEffect } from 'react';
import useWidth from '../../hooks/useWidth';
import facebookImage from '../../assets/facebook.png';
import instagramImage from '../../assets/instagram.png';
import linkedinImage from '../../assets/linkedin.png';
import twitterImage from '../../assets/twitter.png';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);
  const { windowWidth } = useWidth();

  const handleShowMore = function () {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="mx-9 md:mx-16 lg:mx-32">
      <div className="gap-5 border-t-2 border-b-2  border-b-zinc-300 md:grid sm:grid-cols-3  lg: grid lg:grid-cols-5 pt-10">
        {Array(5)
          .fill()
          .map((data, i) => {
            return (
              <div
                className="text-sm p-1 flex flex-col text-grey-200 gap-3 mt-3 lg:mt-0 pb-8"
                key={i}
              >
                <h2 className="text-xl text-black flex items-center justify-between">
                  Category
                  <div
                    className="visible cursor-pointer sm:invisible"
                    onClick={handleShowMore}
                  >
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </div>
                </h2>
                {(showMore || windowWidth >= 640) && (
                  <div className="flex flex-col gap-3">
                    <span>Graphics & Design</span>
                    <span>Digital Marketing</span>
                    <span>Writing & Translation</span>
                    <span>Video & Animation</span>
                    <span>Music & Audio</span>
                    <span>Programming & Tech</span>
                    <span>Data</span>
                    <span>Business</span>
                    <span>Lifestyle</span>
                    <span>Photography</span>
                    <span>Sitemap</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div className="mt-4 mb-4 justify-between items-center mr-32 md:flex">
        <div className="gap-2 text-sm text-grey-200 md:flex">
          <span>Fiverr copyright @2023</span>
        </div>

        <div className="flex gap-2 h-12 w-12 pt-6">
          <img src={facebookImage} alt="facebook logo" className="h-4 w-4" />
          <img src={instagramImage} alt="instagram logo" className="h-4 w-4" />
          <img src={twitterImage} alt="twitter logo" className="h-4 w-4" />
          <img src={linkedinImage} alt="linkedIn logo" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
