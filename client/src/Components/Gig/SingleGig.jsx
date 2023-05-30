import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AboutGig from './AboutGig';
import AboutSeller from './AboutSeller';
import OrderedGig from './OrderedGig';
import Reviews from './Reviews';
import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';

const SingleGig = () => {
  const { id } = useParams();
  const [gig, setGig] = useState(null);

  useEffect(() => {
    const getGig = async function () {
      try {
        const res = await httpGetData(`gigss/single/${id}`);
        setGig(res);
      } catch (err) {
        setError(err);
      }
    };
    getGig();
  }, [id]);
  if (!gig) return <p className="text-center">{LoadingSpinner(14, 14)}</p>;

  return (
    <div className="mx-9 grid grid-cols-1  gap-10 md:mx-18 md:grid-cols-2 lg:mx-36 mb-10">
      <div>
        <AboutGig gig={gig} />
        <AboutSeller gig={gig} />
        <Reviews gig={gig} />
      </div>
      <OrderedGig gig={gig} />
    </div>
  );
};

export default SingleGig;
