import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import GigsHeader from './GigsHeader';
import GigsItems from './GigsItems';
import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import FiverrContext from '../../store/fiverrContext';

const Gigss = () => {
  const cxt = useContext(FiverrContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const [gigs, setGigs] = useState([]);
  const [min, max] = cxt.minMax;
  const url = `gigss?query=${search}&min=${min}&max=${max}`;

  useEffect(() => {
    const getGigs = async function () {
      setIsLoading(true);
      try {
        const res = await httpGetData(url);
        setGigs(res);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    getGigs();
  }, [search, min, max]);

  if (!gigs) return LoadingSpinner(8, 8);

  return (
    <div className="mx-9 md:mx-18 lg:mx-32">
      <GigsHeader />
      {!isLoading && !error && (
        <div className="grid gap-5 pt-6 w-50 shadow-black-500/50 mb-[10rem] sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 ">
          {gigs.map((gig) => (
            <GigsItems gig={gig} key={gig._id} />
          ))}
        </div>
      )}
      {isLoading && !error && (
        <p className="text-center pt-5">{LoadingSpinner(12, 12)}</p>
      )}
      {!isLoading && error && (
        <div className="text-center text-xl py-10">
          Sorry! Something went wrong
        </div>
      )}
    </div>
  );
};

export default Gigss;
