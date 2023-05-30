import { useContext } from 'react';
import FiverrContext from '../../store/fiverrContext';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Slide from '../../UI/Slide';

const AboutGig = (props) => {
  const { gig } = props;
  const cxt = useContext(FiverrContext);
  const user = cxt.users;
  if (!user) return LoadingSpinner(12, 12);

  return (
    <div>
      <div className="text-3xl pt-4 pb-4">{gig.title}</div>
      <div className="flex items-center gap-2 text-sm pb-4">
        <img
          src={gig.cover}
          key={gig.cover}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>{user?.username}</div>
        <div>
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
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Slide
            slidesToShow={1}
            arrowsScroll={1}
            className="w-[16rem] sm:w-[25rem]"
          >
            {gig.images.map((img) => (
              <img src={img} key={img} className="object-cover h-96 w-full" />
            ))}
          </Slide>
        </div>
        <div className="capitalize text-2xl pt-4 pb-2">About this gig</div>
        <div className="text-grey-200 text-sm">{gig.description}</div>
      </div>
    </div>
  );
};

export default AboutGig;
