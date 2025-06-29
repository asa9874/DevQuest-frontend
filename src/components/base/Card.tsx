import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children,className }) => {
  return (
    <div className={`${className} bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-600`}>
      {children}
    </div>
  );
};

export default Card;
