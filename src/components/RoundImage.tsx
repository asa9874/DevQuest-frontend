// RoundImage.tsx
import React from 'react';
import defaultProfile from "../assets/defaultProfile.jpg";

interface RoundImageProps {
  size?: number;
  src?: string;
  onClick?: () => void;
}

const RoundImage: React.FC<RoundImageProps> = ({
  size = 64,
  src = defaultProfile,
  onClick = () => {},

}) => {
  return (
    <img
      src={src}
      style={{
        width: size,
        height: size,
      }}
      className="bg-slate-800 rounded-full shadow-lg border-2 border-slate-600"
      onClick={onClick}
    />
  );
};

export default RoundImage;
