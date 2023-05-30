import FormInput from '../../../UI/FormInput';

const Seller = (props) => {
  const { register, errors } = props;
  const formStyle =
    'w-[16rem] h-10 border  border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-5 xs:w-[18rem] sm:w-[20rem] md:w-[26rem] lg:w-[31rem]';
  const bigStyle =
    'w-[16rem] h-[14rem] border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-5 xs:w-[18rem] sm:w-[20rem] md:w-[26rem] lg:w-[31rem]';
  const seller = 'h-4 w-4 mt-10 mb-10 accent-primary-100 cursor-pointer';
  return (
    <div>
      <h3 className="mt-20 text-lg xs:text-xl sm:text-2xl">
        I want to become a seller
      </h3>
      <FormInput
        label="Activate seller account"
        type="checkbox"
        register={register}
        name="isSeller"
        className={seller}
      />
      <FormInput
        className={formStyle}
        label="Phone Number"
        register={register}
        name="phoneNumber"
      />
      <FormInput
        className={bigStyle}
        label="Description"
        register={register}
        name="description"
      />
    </div>
  );
};

export default Seller;
