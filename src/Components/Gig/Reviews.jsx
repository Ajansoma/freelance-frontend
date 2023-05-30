import { useState, useEffect } from 'react';

import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import AddReview from './AddReview';
import Review from './Review';

const Reviews = (props) => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { gig } = props;

  useEffect(() => {
    const getReviews = async function () {
      setIsLoading(true);
      try {
        const res = await httpGetData(`reviews/${gig._id}`);
        setReviews(res);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getReviews();
  }, [gig._id]);

  if (!reviews)
    return <p className="text-center pt-5">{LoadingSpinner(12, 12)}</p>;

  return (
    <div>
      <div className="text-xl pt-12 pb-5">Reviews</div>
      <div className="border-b"></div>
      {!isLoading &&
        reviews.map((review) => (
          <Review gig={gig} key={review._id} review={review} />
        ))}
      {isLoading && !error && LoadingSpinner(4, 4)}
      {!isLoading && error && <div>error</div>}
      <AddReview gig={gig} />
    </div>
  );
};

export default Reviews;
