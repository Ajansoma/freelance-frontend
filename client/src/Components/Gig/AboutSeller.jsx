import React, { Fragment, useState, useEffect, useContext } from 'react';
import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import noAvatar from '../../assets/noAvatar.jpeg';
import FiverrContext from '../../store/fiverrContext';

const AboutSeller = (props) => {
  const { gig } = props;
  const cxt = useContext(FiverrContext);

  useEffect(() => {
    const fetchUser = async function () {
      const res = await httpGetData(`user/${gig.userId}`);
      cxt.usersHandler(res);
    };
    fetchUser();
  }, [gig.userId]);

  const user = cxt.users;
  if (!user) return LoadingSpinner(12, 12);

  return (
    <Fragment>
      <div className="pb-2">
        <div className="captilize text-2xl pt-12 pb-4">About the seller</div>
        <div className="flex gap-4 pb-6">
          <div className="flex gap-2 items-center">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={user.profilePicture || noAvatar}
            />
          </div>
          <div className="flex flex-col text-sm gap-[0.3rem]">
            <span>{user.username}</span>
            {(!isNaN(gig.totalStars / gig.starNumber) || '') && (
              <div className="flex items-center">
                {Array(Math.round(gig.totalStars / gig.starNumber))
                  .fill()
                  .map((star, i) => (
                    <ion-icon name="star" key={i}></ion-icon>
                  ))}

                <span className="ml-2">
                  {Math.round(gig.totalStars / gig.starNumber)}
                </span>
              </div>
            )}
            <span className="border border-grey-100 rounded p-1">
              Contact Me
            </span>
          </div>
        </div>
      </div>
      <div className="border border-grey-100 p-4 rounded text-sm">
        <div className="flex justify-between border-b-2 pb-2">
          <div>
            <div className="flex flex-col pb-2">
              <span className="text-grey-200">From</span>
              <span>{user.country}</span>
            </div>
            <div className="flex flex-col pb-2">
              <span className="text-grey-200">Average response Time</span>
              <span>4 hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-grey-200">Languages</span>
              <span>English</span>
            </div>
          </div>

          <div>
            <div className="flex flex-col pb-2">
              <span className="text-grey-200">Member Since</span>
              <span>Jan 2022</span>
            </div>
            <div className="flex flex-col">
              <span className="text-grey-200">Last delivery</span>
              <span>1 day</span>
            </div>
          </div>
        </div>

        <div className="pb-2 pt-2 text-grey-200 ">{user.description}</div>
      </div>
    </Fragment>
  );
};

export default AboutSeller;
