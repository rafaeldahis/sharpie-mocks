
import React from 'react';

interface SketchCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SketchCard: React.FC<SketchCardProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`sketch-card ${className}`}>
      {title && (
        <div className="font-comic text-heading font-bold mb-2">{title}</div>
      )}
      <div className="font-comic text-body">
        {children}
      </div>
    </div>
  );
};

export default SketchCard;
