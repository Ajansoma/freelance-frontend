import React from 'react';
import FormInput from '../../UI/FormInput';
import LoadingSpinner from '../../UI/LoadingSpinner';

const RightForm = (props) => {
  const { register, errors, isLoading } = props;
  const rightStyle =
    'w-[20rem] h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none sm:w-[31rem]';
  const bigStyle =
    'w-[20rem] h-[19.1rem] border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none sm:w-[31rem]';
  const fileStyle =
    'file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary-200 file:text-primary-100 cursor-pointer hover:file:bg-green-100';

  return (
    <div className="flex flex-col gap-4">
      <FormInput
        label="Title"
        placeholder="eg. website design"
        className={rightStyle}
        register={register}
        name="title"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">{errors.title?.message}</p>
      <FormInput
        label="Category"
        placeholder="eg. design"
        className={rightStyle}
        register={register}
        name="category"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.category?.message}
      </p>
      <FormInput
        label="Cover"
        placeholder="eg. design"
        type="file"
        register={register}
        className={fileStyle}
        name="cover"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">{errors.cover?.message}</p>
      <input
        label="Upload Image"
        placeholder="eg. design"
        type="file"
        className={fileStyle}
        name="images"
        multiple
        {...register('images')}
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.imageUpload?.message}
      </p>

      <textarea
        label="Description"
        placeholder="eg. design"
        className={bigStyle}
        name="description"
        {...register('description')}
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.description?.message}
      </p>
      <button className="w-[20rem] h-10 bg-primary-100 text-primary-200 rounded hover:bg-primary-300 sm:w-[31rem]">
        {isLoading && LoadingSpinner(4, 4)}
        {!isLoading && <div> create</div>}
      </button>
    </div>
  );
};

export default RightForm;
