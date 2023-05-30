import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noAvatar from '../../assets/noavatar.jpeg';
import { httpSendData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { user } from '../../lib/currentUsers';
import FiverrContext from '../../store/fiverrContext';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = user();
  const { logoutHandler: logout } = useContext(FiverrContext);

  const showMenuHandler = function () {
    setShowMenu((prevState) => !prevState);
  };

  const logoutHandler = async function () {
    setIsLoading(true);
    await httpSendData(`auth/logout`, null);
    localStorage.removeItem('currentUser');
    logout();
    setIsLoading(false);
  };

  const style = `pt-6 gap-5 bg-white h-screen px-8 w-[16rem] origin-top animate-open-menu text-lg text-grey-200 lg:animate-none lg:text-base  lg:flex lg:items-center lg:bg-transparent lg:w-fit lg:h-fit lg:p-0 lg:text-primary-100`;
  return (
    <ul className={style}>
      <li className="mb-3 hover:scale-x-110 duration-300 cursor-pointer lg:mb-0">
        Fiverr Business
      </li>
      <li className="mb-3 hover:scale-x-110 duration-300 cursor-pointer lg:mb-0">
        Explore
      </li>
      <li className="mb-3 hover:scale-x-110 duration-300 cursor-pointer lg:mb-0">
        English
      </li>
      <li className="mb-3 hover:scale-x-110 duration-300 cursor-pointer lg:mb-0">
        <Link to="/login">Sign In</Link>
      </li>
      {!currentUser?.isSeller && (
        <li className="mb-3 hover:scale-x-110 duration-300 cursor-pointer lg:mb-0">
          <Link to="/signup">Become a Seller</Link>
        </li>
      )}
      {!currentUser && (
        <Link
          to="/signup"
          className="bg-primary-300 pl-4 pr-4 text-primary-200 rounded hover:bg-primary-100 duration-700 mb-3 lg:mb-0"
        >
          Join
        </Link>
      )}
      {currentUser && (
        <div onClick={showMenuHandler} className="cursor-pointer">
          <div className="flex gap-2 items-center object-cover">
            <img
              src={currentUser.profilePic || noAvatar}
              alt="user picture"
              className="w-8 h-8 rounded-full"
            />
            <span className="mb-3 hover:scale-x-110 duration-300 cursor-pointer">
              {currentUser?.username}
            </span>
          </div>
          {showMenu && (
            <div className="bg-white rounded p-8 mt-4 text-primary-300 text-sm absolute flex flex-col  shadow-lg shadow-primary-100/20 w-[14rem] gap-2">
              {currentUser?.isSeller && (
                <>
                  <Link
                    to="/mygigs"
                    className="hover:text-grey-200 duration-75"
                  >
                    MyGigs
                  </Link>
                  <Link
                    to="/addgig"
                    className="hover:text-grey-200 duration-75"
                  >
                    Add New Gig
                  </Link>
                </>
              )}
              <div className="flex flex-col gap-2">
                <Link to="/orders" className="hover:text-grey-200 duration-75">
                  Orders
                </Link>
                <Link
                  to="/messages"
                  className="hover:text-grey-200 duration-75 pb-2"
                >
                  Messages
                </Link>
                <button
                  onClick={logoutHandler}
                  className="bg-primary-100 hover:bg-primary-300 duration-75 pt-1 pb-1 pl-4 pr-4 text-primary-200 rounded text-center"
                >
                  {!isLoading && <div>Logout</div>}
                  {isLoading && LoadingSpinner(4, 4)}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </ul>
  );
};

export default Menu;
