import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  label?: string;
  className?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  label = '기본버튼문구',
  className = "",
  color="bg-sky-500 hover:bg-sky-400"
}) => {
  return (
    <button
      type={type}
      className={`w-full py-2 ${color} text-slate-900 font-semibold rounded-lg  transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
