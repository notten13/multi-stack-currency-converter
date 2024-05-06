import React from 'react';

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
