import React from 'react';
import priceImage from '../../assets/piggybank.png';
import quickImage from '../../assets/quick.png';
import paymentImage from '../../assets/payment.png';
import supportImage from '../../assets/support.png';

const Features = () => {
  const imgBackgroundStyle1 =
    'absolute -top-10 -left-4 w-52 h-52 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50';
  const imgBackgroundStyle2 =
    'absolute w-52 h-52 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 -right-20 top-10 md:-right-14 invisible md:visible ';
  const imgBackgroundStyle3 =
    'absolute w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 -bottom-28 right-8 invisible md:visible md:-right-1';
  return (
    <div className="mx-9 md:mx-16 lg:mx-32 text-base xl:text-lg">
      <span className="text-base text-primary-100 uppercase tracking-wide">
        Features
      </span>
      <div className="uppercase mt-3 font-semibold pb-20 text-xl md:text-3xl">
        A whole world of freelance talent at your fingertips
      </div>
      <div className="md:flex items-center gap-36  pb-28 lg:gap-48 xl:gap-80">
        <div className="flex flex-col">
          <span className="text-4xl text-grey-100 font-bold md:text-5xl">
            01
          </span>
          <span className="pb-3 lg:capitalize font-semibold text-2xl">
            The best for every budget
          </span>
          <span className="pb-10">
            Find high-quality services at every price point.
            <br /> No hourly rates, just project-based pricing
          </span>
        </div>
        <div className="relative">
          <div className={imgBackgroundStyle1}></div>
          <div className={imgBackgroundStyle2}></div>
          <div className={imgBackgroundStyle3}></div>
          <img src={priceImage} alt="piggy" className="w-72" />
        </div>
      </div>

      <div className="md:flex items-center gap-36 lg:gap-48 xl:gap-80 pb-28">
        <div className="relative">
          <div className={imgBackgroundStyle1}></div>
          <div className={imgBackgroundStyle2}></div>
          <div className={imgBackgroundStyle3}></div>
          <img src={quickImage} alt="piggy" className="w-72 pb-10" />
        </div>
        <div className="flex flex-col ">
          <span className="text-4xl text-grey-100 font-bold md:text-5xl">
            02
          </span>
          <span className="capitalize pb-3 font-semibold text-2xl">
            Quality work done quickly
          </span>
          <span>
            Find the right freelancer to begin working on your
            <br />
            projects within minutes.
          </span>
        </div>
      </div>

      <div className="md:flex items-center gap-36 pb-28 lg:gap-48 xl:gap-80">
        <div className="flex flex-col">
          <span className="text-4xl text-grey-100 font-bold md:text-5xl">
            03
          </span>
          <span className="capitalize pb-3 font-semibold text-2xl">
            protected payments, every time
          </span>
          <span className="pb-10">
            Always know what you'll pay upfront.
            <br /> Your payment isn't released until you approve your work.
          </span>
        </div>
        <div className="relative">
          <div className={imgBackgroundStyle1}></div>
          <div className={imgBackgroundStyle2}></div>
          <div className="absolute w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 -bottom-16  right-60 invisible  md:visible md:-bottom-6 md:-right-1"></div>
          <img src={paymentImage} alt="piggy" className="w-72" />
        </div>
      </div>

      <div className=" md:flex items-center pb-28 gap-36 lg:gap-48 xl:gap-80">
        <div className="relative">
          <div className={imgBackgroundStyle1}></div>
          <div className={imgBackgroundStyle2}></div>
          <div className="absolute w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-50 -bottom-16  right-60 invisible  md:visible md:-bottom-6 md:-right-1"></div>
          <img src={supportImage} alt="piggy" className="w-72 pb-10" />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl text-grey-100 font-bold md:text-5xl">
            04
          </span>
          <span className="capitalize pb-3 font-semibold text-2xl">
            24/7 support
          </span>
          <span>
            Find high quality services at every price point.
            <br />
            No hourly rates, just project-based pricing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
