import FormInput from '../../UI/FormInput';
import { useFieldArray } from 'react-hook-form';

const LeftForm = (props) => {
  const { register, control, errors } = props;
  const { fields, remove, append } = useFieldArray({
    name: 'features',
    control,
  });

  const addFeatureHandler = function () {
    append({ feature: '' });
  };
  const rightStyle =
    'w-[20rem] h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none sm:w-[31rem]';
  const bigStyle =
    'w-[20rem] h-24 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none sm:w-[31rem]';
  return (
    <div className="flex flex-col gap-4">
      <FormInput
        label="Service Title"
        placeholder="eg. website design"
        className={rightStyle}
        register={register}
        name="shortTitle"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.shortTitle?.message}
      </p>
      <textarea
        label="Short Description"
        placeholder="Short Description"
        className={bigStyle}
        name="shortDescription"
        {...register('shortDescription')}
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.shortDescription?.message}
      </p>
      <FormInput
        label="Delivery Time"
        placeholder="eg. website design"
        className={rightStyle}
        register={register}
        name="deliveryTime"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.deliveryTime?.message}
      </p>
      <FormInput
        label="Revision Time"
        placeholder="eg. website design"
        className={rightStyle}
        register={register}
        name="revisionTime"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">
        {errors.revisionTime?.message}
      </p>
      {fields.map((field, index) => {
        return (
          <ul key={field.id} className="flex gap-3 items-center">
            <div>
              <FormInput
                label="Features"
                placeholder="eg. website design"
                className="w-[17rem] h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none sm:w-[29rem]"
                register={register}
                name={`features.${index}.feature`}
              />
              <p className="mb-3 text-sm text-red-500">
                {errors?.features?.[index]?.feature.message}
              </p>
            </div>

            <div className="text-xl cursor-pointer">
              <ion-icon
                onClick={() => {
                  remove(index);
                }}
                name="trash-outline"
              ></ion-icon>
            </div>
          </ul>
        );
      })}
      <div className="mt-1 mb-3">
        <button
          onClick={addFeatureHandler}
          className="w-24 text-sm h-9 bg-primary-100 text-primary-200 rounded hover:bg-primary-300"
          type="button"
        >
          Add Feature
        </button>
      </div>

      <FormInput
        label="Price"
        placeholder="eg. website design"
        className={rightStyle}
        register={register}
        name="price"
      />
      <p className="-mt-3 mb-3 text-sm text-red-500">{errors.price?.message}</p>
    </div>
  );
};

export default LeftForm;
