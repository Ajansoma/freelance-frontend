import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { httpGetData } from '../../lib/request';
import noAvatar from '../../assets/noAvatar.jpeg';
import LoadingSpinner from '../../UI/LoadingSpinner';

const GigsItems = (props) => {
  const [user, setUser] = useState(null);
  const { gig } = props;

  useEffect(() => {
    const fetchUser = async function () {
      const res = await httpGetData(`user/${gig.userId}`);
      setUser(res);
    };
    fetchUser();
  }, [gig.userId]);

  if (!user) return LoadingSpinner(12, 12);

  const shortDesc = `${gig.description.slice(0, 40)}...`;
  return (
    <Link to={`/gig/${gig._id}`}>
      <div className="relative bg-white rounded-lg shadow-lg h-[28rem] pb-6">
        <img
          src={gig.cover}
          className="overflow-hidden rounded-t-lg object-cover h-[12rem] w-full"
        />
        <div className="flex gap-6 items-center p-4">
          <img
            src={user?.profilePic || noAvatar}
            alt={user?.profilePic || noAvatar}
            className="h-8 w-8 object-cover rounded-full"
          />
          <span className="text-sm">{user?.username}</span>
        </div>
        <div className="flex flex-col justify-between pl-4 pr-4 pb-2 h-16">
          <div>
            <span>{shortDesc}</span>
            <span className="text-grey-200">read more</span>
          </div>

          <div className="flex items-center gap-1 pt-3">
            <ion-icon name="star"></ion-icon>
            <span>
              {(!isNaN(gig.totalStars / gig.starNumber) || 0) &&
                Math.round(Number(gig.totalStars) / Number(gig.starNumber))}
            </span>
          </div>
        </div>
        <div className="flex item-center text-grey-200 justify-between pt-12 px-4">
          <span className="text-xl">
            <ion-icon name="heart-outline"></ion-icon>
          </span>
          <div className="flex flex-col">
            <span className="uppercase text-xs">starting at</span>
            <span className="text-sm">${gig.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigsItems;
