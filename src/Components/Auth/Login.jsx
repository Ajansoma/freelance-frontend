import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from '../../UI/FormInput';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { httpSendData } from '../../lib/request';
import FiverrContext from '../../store/fiverrContext';

const schema = yup
  .object({
    username: yup
      .string('username is invalid')
      .typeError('username is invalid')
      .required('username is invalid'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain One Uppercase, Lowercase, Number and Special Case Character'
      ),
  })
  .required();

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingSpinner = LoadingSpinner(4, 4);
  const [error, setError] = useState('');
  const cxt = useContext(FiverrContext);
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
    setIsLoading(true);
    try {
      const res = await httpSendData(`auth/login`, data);
      cxt.userHandler(res);
      localStorage.setItem('currentUser', JSON.stringify(res));
      res && navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    reset();
  };

  //styles
  const formStyle =
    'w-[16rem] h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-5 xs:w-[26rem] sm:w-[31rem]';
  const imgBackgroundStyle1 =
    'absolute -top-5 left-72 w-[30rem] h-[30rem] bg-decor-200 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60';
  const imgBackgroundStyle2 =
    'absolute -top-10 right-72 w-[30rem] h-[30rem] bg-decor-100 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60';
  const imgBackgroundStyle3 =
    'absolute  -bottom-[20rem] right-[30rem] w-[30rem] h-[30rem] bg-decor-300 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-60';

  return (
    <div className="flex justify-center content-center h-screen bg-gradient-to-r from-primary-500 via-purple-100 to-primary-500">
      {/* <div className={imgBackgroundStyle1}></div>
      <div className={imgBackgroundStyle2}></div>
      <div className={imgBackgroundStyle3}></div> */}

      <form
        className="bg-white p-6 mt-[12rem] rounded-lg shadow-md shadow-decor-200 h-fit "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h3 className="text-center text-2xl mb-4">Sign in to fiverr</h3>
          {error && <span className="mb-3 text-sm text-red-500">{error}</span>}
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
            label="Password"
            name="password"
            register={register}
          />
          <p className="-mt-6 mb-3 text-sm text-red-500">
            {errors.password?.message}
          </p>
          <button
            type="submit"
            className="w-[16rem] h-10 bg-primary-100 text-primary-200 rounded hover:bg-primary-300 mt-4 xs:w-[26rem] sm:w-[31rem]"
          >
            {!isLoading && <span>Login</span>}
            {isLoading && loadingSpinner}
          </button>
          <div className="text-sm mt-4">
            New to fiverr?
            <Link to="/signup" className="ml-2 text-primary-100">
              Create an account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
