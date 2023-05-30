import React from 'react';

const TrustedBy = () => {
  return (
    <div className="flex px-9 bg-grey-300 p-4 gap-4 items-center justify-center md:px-16 lg:px-32">
      <div className="text-grey-200 text-xs md:text-lg"> Trusted By:</div>
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
        alt="facebook"
        className="h-7 sm:h-9  md:h-12"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
        alt="google"
        className="h-7  sm:h-9  md:h-12"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
        alt="netflix"
        className="h-7  sm:h-9  md:h-12"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
        alt="p&g"
        className="h-7  sm:h-9  md:h-12"
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
        alt="paypal"
        className=" h-7 sm:h-9  md:h-12"
      />
    </div>
  );
};

export default TrustedBy;
