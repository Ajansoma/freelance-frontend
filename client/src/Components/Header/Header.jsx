import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import freelanceImage from '../../assets/freelance.png';

const Header = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const inputHandler = function (e) {
    setInput(e.target.value);
  };

  const searchHandler = function () {
    navigate(`/gigs?search=${input}`);
  };
  const popularStyles = 'border p-1 rounded-lg';
  return (
    <div className="text-white items-center gap-24 bg-primary-100 h-[20rem] px-6 py-16 md:flex  to-primary-100 md:h-[40rem] md:p-36 lg:bg-gradient-to-b from-primary-200">
      <div>
        <div className="text-3xl md:text-5xl">
          Find the perfect{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-300 to-primary-700 uppercase md:lowercase lg:text-primary-300 ">
            freelancer
          </span>{' '}
          <br /> for your business.
        </div>
        <div className="mt-6 mb-4 h-10 w-[20rem] bg-white rounded flex justify-between items-center md:w-[28rem] lg:w-[32rem]">
          <div className="flex items-center justify-center pl-4">
            <div className="text-primary-300 text-xl">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <input
              className="h-8 w-24 pl-2 border-none focus:outline-none text-primary-300"
              type="text"
              placeholder="Search over 50,000 freelancers"
              onChange={inputHandler}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-300 h-10 pl-4 pr-4 rounded-r hover:bg-primary-300 lg:bg-primary-300 md:hover:bg-primary-600"
            onClick={searchHandler}
          >
            search
          </button>
        </div>
        <div className="flex gap-3 text-xs items-center invisible md:visible">
          <span>Popular:</span>
          <button className={popularStyles}>Web Design</button>
          <button className={popularStyles}>WordPress</button>
          <button className={popularStyles}>Logo Design</button>
          <button className={popularStyles}>All Services</button>
        </div>
      </div>
      <div>
        <img
          src={freelanceImage}
          alt="business woman"
          className="w-96 invisible lg:visible shrink-0"
        />
      </div>
    </div>
  );
};

export default Header;
