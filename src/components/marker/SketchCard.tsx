
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <div className={`sketch-card border sketch-border p-3 sm:p-4 rounded-md ${className}`}>
      {title && (
        <div className={`font-comic ${isMobile ? 'text-base' : 'text-heading'} font-bold mb-2 sketch-heading`}>{title}</div>
      )}
      <div className="font-comic text-sm sm:text-body">
        {children}
      </div>
    </div>
  );
};

export default SketchCard;
