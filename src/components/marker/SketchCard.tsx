
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

interface SketchCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties; // Added style prop
}

const SketchCard: React.FC<SketchCardProps> = ({ 
  title, 
  children, 
  className = '',
  onClick,
  style // Added style to destructuring
}) => {
  const { isMobile, screenSize } = useIsMobile();
  
  // Adjust sizes based on screen size
  const getHeadingSize = () => {
    if (screenSize === 'xs') return 'text-base';
    if (screenSize === 'sm') return 'text-lg';
    return 'text-heading';
  };
  
  const getContentSize = () => {
    if (screenSize === 'xs') return 'text-xs';
    if (screenSize === 'sm') return 'text-sm';
    return 'text-sm sm:text-body';
  };
  
  const getPadding = () => {
    if (screenSize === 'xs') return 'p-2';
    if (screenSize === 'sm') return 'p-3';
    return 'p-3 sm:p-4';
  };
  
  return (
    <div 
      className={`sketch-card border sketch-border ${getPadding()} rounded-md overflow-hidden ${className}`}
      onClick={onClick}
      style={style} // Added style prop here
    >
      {title && (
        <div className={`font-comic ${getHeadingSize()} font-bold mb-2 sm:mb-3 sketch-heading`}>{title}</div>
      )}
      <div className={`font-comic ${getContentSize()} overflow-x-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default SketchCard;
