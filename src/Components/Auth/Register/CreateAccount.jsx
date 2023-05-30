import FormInput from '../../../UI/FormInput';

const CreateAccount = (props) => {
  const { register, errors } = props;
  const fileStyle =
    'file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary-200 file:text-primary-100 cursor-pointer hover:file:bg-green-100';
  const formStyle =
    'w-[16rem] h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-5 xs:w-[18rem] sm:w-[20rem] md:w-[26rem] lg:w-[31rem]';

  return (
    <div>
      <h3 className="text-lg xs:text-xl sm:text-2xl mb-4">
        Create a new account
      </h3>
      <FormInput
        className={formStyle}
        label="Username"
        register={register}
        name="username"
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">
        {errors.username?.message}
      </p>
      <FormInput
        className={formStyle}
        label="Email"
        register={register}
        name="email"
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">{errors.email?.message}</p>
      <FormInput
        className={formStyle}
        label="Password"
        name="password"
        register={register}
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">
        {errors.password?.message}
      </p>
      <FormInput
        className={formStyle}
        label="Confirm Password"
        name="confirmPassword"
        register={register}
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">
        {errors.confirmPassword?.message}
      </p>
      <FormInput
        label="Profile Picture"
        name="profilePic"
        placeholder="eg. design"
        type="file"
        className={fileStyle}
        register={register}
      />
      <FormInput
        label="Country"
        name="country"
        placeholder="eg. design"
        className={formStyle}
        register={register}
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">
        {errors.country?.message}
      </p>
    </div>
  );
};

export default CreateAccount;
