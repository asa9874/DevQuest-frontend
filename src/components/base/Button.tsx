import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  label?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  label = '기본버튼문구',
  className = "",
  color="bg-sky-500 hover:bg-sky-400",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`py-2 ${color} text-slate-900 font-semibold rounded-lg  transition ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
