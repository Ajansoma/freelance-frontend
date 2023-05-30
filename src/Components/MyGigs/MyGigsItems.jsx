import React from 'react';
import { httpGetData } from '../../lib/request';
import noAvatar from '../../assets/noavatar.jpeg';

const MyGigsItems = (props) => {
  const { gig } = props;
  const deleteHandler = async function () {
    try {
      await httpGetData(`gigss/${gig._id}`);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="text-xs border-b pt-2 pb-2 cursor-pointer hover:bg-grey-100 duration-75 xs:text-sm md:text-sm lg:text-base">
      <div className="grid grid-cols-5 pb-2 items-center text-grey-200 sm:gap-4 ">
        <img
          className="h-6 w-6 rounded-full sm:h-8 md:w-8 lg:h-12 lg:w-12"
          src={gig.cover || noAvatar}
        />
        <span>{`${gig.title.slice(0, 10)}...`}</span>
        <span>${gig.price}</span>
        <span>{gig.sales}</span>
        <span
          className="text-base xs:text-lg md:text-xl"
          onClick={deleteHandler}
        >
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default MyGigsItems;
