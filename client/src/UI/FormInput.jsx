import React from 'react';

const FormInput = (props) => {
  const { label, className, type, placeholder, name, register } = props;
  let typeOfStyle;
  if (type === 'checkbox') {
    typeOfStyle = 'flex items-center text-sm gap-2';
  } else {
    typeOfStyle = 'flex flex-col text-sm gap-2';
  }
  return (
    <div className={typeOfStyle}>
      <label>{label}</label>
      <input
        className={className}
        type={type || 'text'}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default FormInput;
