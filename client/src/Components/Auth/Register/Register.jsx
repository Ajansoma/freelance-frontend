import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { httpUploadImage } from '../../../lib/request';
import CreateAccount from './CreateAccount';
import Seller from './Seller';

const schema = yup
  .object({
    username: yup
      .string('username is invalid')
      .typeError('username is invalid')
      .required('username is invalid'),
    email: yup
      .string('Email Address is invalid')
      .email('Email Address is invalid')
      .typeError('Email Address is invalid')
      .required('Email Address is invalid'),
    country: yup.string().required('country is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain One Uppercase, Lowercase, Number and Special Case Character'
      ),
    confirmPassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required();

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async function (data) {
    const imageUrl = await httpUploadImage(data.profilePic[0]);
    data.profilePic = imageUrl;

    setIsLoading(true);
    try {
      const res = await httpSendData(`auth/register`, data);
      localStorage.setItem('currentUser', JSON.stringify(res));
      res && navigate('/login');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    reset();
  };

  //styles
  const imgBackgroundStyle1 =
    'absolute -top-5 left-72 w-[20rem] h-[20rem] bg-decor-200 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60 invisible md:w-[30rem] md:visible md:h-[30rem]';
  const imgBackgroundStyle2 =
    'absolute -top-10 right-72 w-[20rem] h-[20rem] bg-decor-100 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60 md:w-[30rem] invisible md:h-[30rem] md:visible';
  const imgBackgroundStyle3 =
    'absolute  -bottom-[20rem] right-[30rem] w-[20rem] h-[20rem] bg-decor-300 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60 invisible md:w-[30rem] md:visible md:h-[30rem]';

  return (
    <div className="flex justify-center content-center h-fit py-10 bg-gradient-to-r from-primary-500 via-purple-100 to-primary-500">
      {/* <div className={imgBackgroundStyle1}></div>
      <div className={imgBackgroundStyle2}></div>
      <div className={imgBackgroundStyle3}></div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 mt-[1rem] shadow-md shadow-decor-200 rounded-lg"
      >
        {error && <span className="mb-3 text-sm text-red-500">{error}</span>}
        <div className="max-h-[38rem] overflow-scroll lg:flex gap-10 ">
          <CreateAccount {...{ register, errors }} />
          <Seller {...{ register }} />
        </div>
        <button
          type="submit"
          className="w-[14rem] h-10 bg-primary-100 text-primary-200 rounded hover:bg-primary-300 mt-4 xs:w-[16rem] sm:w-[20rem] md:w-[26rem] lg:w-[31rem]"
        >
          {!isLoading && <span>Sign Up</span>}
          {isLoading && LoadingSpinner(4, 4)}
        </button>
        <div className="text-xs sm:text-sm mt-4">
          Already have an account?
          <Link to="/login" className="ml-2 text-primary-100">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
