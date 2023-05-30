import { Link, useParams } from 'react-router-dom';

const SliderItem = (props) => {
  const { card } = props;
  const { cat } = useParams();
  console.log(cat);

  return (
    <Link to={`/gigs/${card.cat}`}>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 pt-4 text-sm text-white pl-2">
          {card.desc}
        </div>
        <div className="absolute inset-y-7 text-xl pt-2 text-white pl-2">
          {card.cat}
        </div>
        <img
          src={card.img}
          alt={card.desc}
          className="h-80 w-full object-cover rounded sm:w-4/5"
        />
      </div>
    </Link>
  );
};

export default SliderItem;
