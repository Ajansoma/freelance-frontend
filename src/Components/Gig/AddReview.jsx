import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { httpSendData } from '../../lib/request';
import FormInput from '../../UI/FormInput';
import LoadingSpinner from '../../UI/LoadingSpinner';

const schema = yup
  .object({
    description: yup.string('review is invalid').required('review is invalid'),
    star: yup
      .number()
      .positive('quantity must be a positive number')
      .typeError('quantity must be a positive number')
      .required(),
  })
  .required();

const AddReview = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingSpinner = LoadingSpinner(4, 4);
  const [error, setError] = useState(false);
  const { gig } = props;

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
      await httpSendData(`reviews`, {
        gigId: gig._id,
        ...data,
      });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h3 className="text-xl">Add a review</h3>
      <FormInput
        register={register}
        placeholder="write your review"
        name="description"
        className="rounded mb-8 h-16 border-solid border border-secondary-grey focus:border-primary-100 hover:border-primary-100 outline-none block"
      />
      <p className="-mt-6 mb-3 text-sm text-red-500">
        {errors.description?.message}
      </p>
      <select
        name="star"
        id="star"
        {...register('star')}
        className="w-24 h-10 mb-3 self-end border-solid border border-secondary-grey rounded"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <p className="-mt-6 mb-3 text-sm text-red-500">{errors.star?.message}</p>
      {error && <span className="mb-3 text-sm text-red-500">{error}</span>}
      <button
        className="w-24 h-8 bg-primary-100 text-primary-200 rounded hover:bg-primary-300 mt-3 self-end"
        type="submit"
      >
        {isLoading && loadingSpinner}
        {!isLoading && <div>Send</div>}
      </button>
    </form>
  );
};

export default AddReview;
