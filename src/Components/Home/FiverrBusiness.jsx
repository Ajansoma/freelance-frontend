import businessImage from '../../assets/business.png';

const FiverrBusiness = () => {
  return (
    <div className="bg-primary-300 text-primary-200 pb-16 justify-between items-center text-md px-9 lg:flex md:px-16 lg:px-32">
      <div className="flex flex-col">
        <span className="text-sm uppercase font-bold pt-16 pb-3">
          fiverr business
        </span>
        <span className="text-2xl capitalize font-semibold pb-3">
          A business solution designed for teams
        </span>
        <span className="text-lg pb-3">
          Upgrade to a curated experience packed with tools <br /> and benefits,
          dedicated to businesses
        </span>
        <div>
          <div className="flex pb-3 items-center">
            <span className="text-secondary-200 ">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            <span className="pl-2">
              Connect to freelancers with proven business experience
            </span>
          </div>
          <div className="flex pb-3 items-center">
            <span>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            <span className="pl-2">
              Get matched with the perfect talent by a customer success manager
            </span>
          </div>
          <div className="flex pb-3 items-center">
            <span>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
            <span className="pl-2">
              Manage teamwork and boost productivity with one powerful workplace
            </span>
          </div>
        </div>
        <div className="pt-4">
          <button className="bg-primary-200 text-primary-300 p-2 rounded-lg">
            Explore Fiverr Business
          </button>
        </div>
      </div>
      <div>
        <img src={businessImage} alt="people working" className="w-96 pt-10" />
      </div>
    </div>
  );
};

export default FiverrBusiness;
