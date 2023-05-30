import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWidth from '../../hooks/useWidth';
import Menu from './Menu';

import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from '../../UI/MenuToggle';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { windowWidth } = useWidth();
  const { pathname } = useLocation();

  const scrollActive = function () {
    (window.scrollY > 0 && windowWidth >= 1024) ||
    (pathname !== '/' && windowWidth >= 1024)
      ? setIsActive(true)
      : setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  });

  const logo = (
    <div className="flex items-center text-3xl">
      <Link to="/">
        <span>fiverr</span>
      </Link>
      <span className="text-3xl text-primary-100">.</span>
    </div>
  );

  const activeStyle =
    isActive || pathname !== '/'
      ? 'justify-center items-center gap-96 pt-6 text-primary-100 border-b border-grey-200  duration-150 hidden lg:block lg:text-primary-300 lg:flex '
      : 'justify-center items-center gap-96 pt-6 text-primary-100 border-primary-200 duration-150 bg-primary-200 hidden lg:block lg:flex';
  return (
    <div className="sticky top-0 z-50 bg-white">
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="text-4xl h-[3.4rem] bg-white border-b border-grey-100 block lg:hidden"
      >
        <div
          className={`flex justify-between items-center mx-7 my-3 cursor-pointer`}
        >
          <div>
            <MenuToggle toggle={() => toggleOpen()} />
          </div>

          {logo}
          <Link
            to="/signup"
            className="bg-primary-300 pl-4 pr-4 text-primary-200 rounded hover:bg-primary-100 duration-700 text-lg"
          >
            Join
          </Link>
        </div>
        {isOpen && <Menu />}
      </motion.div>
      <div className={activeStyle}>
        {logo}
        <Menu isOpen={isOpen} />
      </div>
      {isActive && (
        <ul className="invisible md:flex justify-center gap-6 pt-4 text-grey-200 text-sm border-b border-grey-100 pb-2 md:visible">
          <li>Graphic & Design</li>
          <li>Video & Animation</li>
          <li>Writing & Translation</li>
          <li>AI Services</li>
          <li>Digitial Marketing</li>
          <li>Music & Audio</li>
          <li>Programming & Tech</li>
          <li>Business</li>
          <li>Lifestyle</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
