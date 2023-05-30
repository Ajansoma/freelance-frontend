import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LeftForm from './LeftForm';
import RightForm from './RightForm';
import { httpSendData, httpUploadImage } from '../../lib/request';

const featureSchema = {
  feature: yup.string().required('feature is required'),
};

const schema = yup
  .object({
    title: yup.string().required('title is invalid'),
    category: yup.string().required('category is invalid'),
    // cover: yup.array().required('cover Image is invalid'),
    // images: yup.array().required('image Upload is invalid'),
    description: yup.string().required('description is invalid'),
    shortTitle: yup.string().required('service Title is invalid'),
    shortDescription: yup.string().required('short Description is invalid'),
    deliveryTime: yup
      .number('delivery Time must be a positive number')
      .typeError('delivery Time  must be a positive number')
      .required('delivery Time must be a positive number'),
    revisionTime: yup
      .number('revision Time must be a positive number')
      .typeError('revision Time  must be a positive number')
      .required('revision Time must be a positive number'),
    price: yup
      .number('price must be a positive number')
      .typeError('price must be a positive number')
      .required('price must be a positive number'),
    features: yup.array().of(yup.object().shape(featureSchema)).required(),
  })
  .required();

const defaultValues = {
  features: [{ feature: '' }],
};
const AddGig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const submitHandler = async function (data) {
    const { cover } = data;
    data.features = data.features.map((feature) => {
      return feature.feature;
    });

    try {
      const coverImageUrl = await httpUploadImage(cover[0]);
      const imagesUrl = await Promise.all(
        [...data.images].map(async (image) => {
          const url = await httpUploadImage(image);
          return url;
        })
      );
      data.cover = coverImageUrl;
      data.images = imagesUrl;
    } catch (err) {
      setError(err);
    }

    try {
      setIsLoading(true);
      const res = await httpSendData(`gigss`, data);
      res && navigate('/mygigs');
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    reset();
  };
  return (
    <form
      className="text-grey-200 w-[66rem] ml-12 md:ml-24 lg:ml-48"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="capitalize text-2xl pt-6 pb-6">Add new Gig</div>
      <div className="-mt-3 mb-3 text-sm text-red-500">{error}</div>
      <div className="justify-stretch gap-16 xl:flex">
        <LeftForm {...{ register, errors, control }} />
        <RightForm {...{ register, errors, isLoading }} />
      </div>
    </form>
  );
};

export default AddGig;
