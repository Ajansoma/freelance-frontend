import SliderItem from './SliderItem';
import Slide from '../../../UI/Slide';
import { cards } from '../../../data';
import { slideNumber } from '../../../lib/slideNumber';

const GigSlider = () => {
  const { slidesToShow } = slideNumber(4, 3, 2, 1);

  return (
    <div className="mx-9 pt-16 pb-16 flex justify-between relative md:mx-16 lg:mx-32">
      <div className="w-[70rem]">
        <Slide slidesToShow={slidesToShow} arrowsScroll={slidesToShow}>
          {cards.map((card) => (
            <SliderItem card={card} key={card.id} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default GigSlider;
