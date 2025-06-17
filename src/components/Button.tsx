import React from 'react';

interface ButtonProps {
  type: 'submit' | 'button';
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ type, label, className }) => {
  return (
    <button
      type={type}
      className={`${className} w-full py-2 bg-sky-500 text-slate-900 font-semibold rounded-lg hover:bg-sky-400 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
