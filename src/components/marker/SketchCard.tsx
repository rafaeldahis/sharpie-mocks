
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
  const { isMobile, screenSize } = useIsMobile();
  
  const headingSize = isMobile ? 'text-lg' : 'text-heading';
  const contentSize = isMobile ? 'text-sm' : 'text-sm sm:text-body';
  
  return (
    <div className={`sketch-card border sketch-border p-3 sm:p-4 rounded-md overflow-hidden ${className}`}>
      {title && (
        <div className={`font-comic ${headingSize} font-bold mb-2 sm:mb-3 sketch-heading`}>{title}</div>
      )}
      <div className={`font-comic ${contentSize} overflow-x-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default SketchCard;
