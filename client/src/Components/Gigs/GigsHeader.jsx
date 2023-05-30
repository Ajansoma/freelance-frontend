import { useRef, useEffect, useContext } from 'react';
import FiverrContext from '../../store/fiverrContext';

const GigsHeader = () => {
  const min = useRef();
  const max = useRef();
  const cxt = useContext(FiverrContext);

  const applyHandler = function () {
    cxt.minMaxHandler(+min.current.value || '', +max.current.value || '');
  };

  return (
    <div className="flex flex-col pt-5 gap-1 text-sm">
      <span className="text-grey-200 uppercase">
        fiverr &#8827; graphic & Design &#x227B;
      </span>
      <span className="text-2xl">AI Artists</span>
      <span className="text-grey-200">
        Explore the boundries of art and technology with Fiverr's AI artists
      </span>
      <div className="justify-between items-center sm:flex sm:pb-2">
        <div className="items-center text-grey-200 gap-1 md:flex">
          <span>Budget: </span>
          <input
            ref={min}
            type="number"
            className="border-2 rounded-md hover:border-primary-100 focus:outline-none focus:border-primary-100 h-8 sm:mb-2"
            placeholder="min"
          />
          <input
            type="number"
            className="border-2 rounded-md hover:border-primary-100 focus:outline-none focus:border-primary-100 h-8 sm:mb-2"
            placeholder="max"
            ref={max}
          />
          <button
            className="bg-primary-100 text-primary-200 h-8 w-14 rounded-md sm:mb-2"
            onClick={applyHandler}
          >
            Apply
          </button>
        </div>

        <div className="text-sm sm:flex items-center sm:px-3">
          <span className="text-grey-200">Sort By</span>
          <select
            name="language"
            id="language"
            className=" hover:border-primary-100 focus:outline-none focus:border-primary-100 pl-4"
          >
            <option value="BestSeller" className="font-bold">
              BestSeller
            </option>
            <option value="Newest" className="font-bold">
              Newest
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GigsHeader;
