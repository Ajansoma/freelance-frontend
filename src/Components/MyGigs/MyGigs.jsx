import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyGigsItems from './MyGigsItems';
import { httpGetData } from '../../lib/request';
import { user } from '../../lib/currentUsers';
import LoadingSpinner from '../../UI/LoadingSpinner';

const MyGigs = () => {
  const currentUser = user();
  const [myGigs, setMyGigs] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGigs = async function () {
      setIsLoading(true);
      try {
        const res = await httpGetData(`gigss?userId=${currentUser._id}`);
        setMyGigs(res);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchGigs();
  }, [currentUser._id]);

  return (
    <div className="ml-12 mr-12 mt-4 overflow-scroll max-w-[30rem] md:max-w-[40rem] md:ml-24 md:mr-24 lg:ml-48 lg:mr-48 lg:max-w-[80rem]">
      <div className="flex justify-between items-center pt-6 pb-6">
        <div className="font-semibold text-xl lg:text-2xl">My Gigs</div>
        <Link to="/addgig">
          <button className="h-8 w-24 bg-primary-100 text-primary-200 text-sm rounded  hover:bg-primary-300 duration-75  lg:w-28">
            Add New Gig
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-5 font-semibold pb-2 text-xs bg-grey-100 p-4 rounded-t md:text-2xl">
        <span>Image</span>
        <span>Title</span>
        <span>Price</span>
        <span>Orders</span>
        <span>Delete</span>
      </div>
      <div className="bg-grey-300 p-4 rounded-b max-h-96 overflow-scroll">
        {isLoading && <div className="text-center">{LoadingSpinner(4, 4)}</div>}
        {!isLoading &&
          myGigs.map((gig) => <MyGigsItems gig={gig} key={gig._id} />)}
        {error && <span className="mb-3 text-sm text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default MyGigs;
