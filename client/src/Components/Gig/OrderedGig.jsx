import { useEffect } from 'react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpSendData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';

const OrderedGig = (props) => {
  const { gig } = props;
  const [isLoading, setIsLoading] = useState(false);
  const loadingSpinner = LoadingSpinner(4, 4);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitOrderHandler = async function () {
    setIsLoading(true);
    const res = await httpSendData(`orders/${gig._id}`, null);
    res && navigate('/orders');
    setIsLoading(false);
  };

  return (
    <Fragment>
      <div className=" h-max p-4 border border-grey-100 rounded text-sm mt-10 sticky top-40 sm:w-[20rem] md:w-[24rem]">
        <div className="flex justify-between items-center pb-4 text-sm md:text-lg">
          <span className="font-semiBold">{gig.shortTitle}</span>
          <span className="text-grey-200">${gig.price}</span>
        </div>
        <div className="text-grey-200">{gig.shortDescription}</div>
        <div className="flex justify-between pt-4 font-semibold">
          <div className="flex gap-1">
            <span className="text-base">
              <ion-icon name="timer-outline"></ion-icon>
            </span>
            <span>{gig.deliveryTime} Days Delivery</span>
          </div>
          <div className="flex gap-1">
            <div className="text-base">
              <ion-icon name="compass-outline"></ion-icon>
            </div>
            <div>{gig.revisionTime} revisions</div>
          </div>
        </div>
        <div className="pt-3 text-grey-200">
          <span>
            {gig.features.map((feature) => (
              <div className="text-primary-100  text-sm flex flex-col gap-2 sm:text-base">
                <span className="flex items-center gap-2">
                  <ion-icon name="checkmark-outline"></ion-icon>
                  {feature}
                </span>
              </div>
            ))}
          </span>
        </div>
        <div
          className="bg-primary-100 h-8  flex justify-center text-primary-200 mt-3 rounded sm:w-[18rem] md:w-[22rem]"
          onClick={submitOrderHandler}
        >
          <button type="submit">
            {isLoading && loadingSpinner}
            {!isLoading && <div>continue</div>}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderedGig;
