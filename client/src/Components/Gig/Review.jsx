import React from 'react';
import noAvatar from '../../assets/noAvatar.jpeg';
import { user } from '../../lib/currentUsers';

const Review = (props) => {
  const { gig, review } = props;
  console.log(review);
  const currentUser = user();
  return (
    <div>
      <div className="flex gap-3 pt-4 pb-3 items-center">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={currentUser.profilePicture || noAvatar}
          alt={currentUser.profilePicture || noAvatar}
        />
        <div className="flex flex-col text-sm gap-[0.2rem]">
          <span>{currentUser.username}</span>
          <span className="text-grey-200">{gig.country}</span>

          <div className="flex items-center">
            {Array(review.star)
              .fill()
              .map((star, i) => (
                <ion-icon name="star" key={i}></ion-icon>
              ))}

            <span className="ml-2">
              {Math.round(gig.totalStars / gig.starNumber)}
            </span>
          </div>
        </div>
      </div>

      <div className="text-sm text-grey-200">{review.description}</div>
      <div className="flex gap-4 items-center pt-3 pb-10 text-sm">
        <span>Helpful?</span>
        <span className="flex items-center gap-1">
          Yes <ion-icon name="thumbs-up-outline"></ion-icon>
        </span>
        <span className="flex items-center gap-1">
          No <ion-icon name="thumbs-down-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Review;
