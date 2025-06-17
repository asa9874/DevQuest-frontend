import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-sm border border-slate-600">
      {children}
    </div>
  );
};

export default Card;
