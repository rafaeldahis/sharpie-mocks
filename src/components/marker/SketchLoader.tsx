
import React from 'react';

interface SketchLoaderProps {
  size?: number;
  className?: string;
}

const SketchLoader: React.FC<SketchLoaderProps> = ({ 
  size = 24, 
  className = '' 
}) => {
  return (
    <div 
      className={`sketch-loader ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default SketchLoader;
