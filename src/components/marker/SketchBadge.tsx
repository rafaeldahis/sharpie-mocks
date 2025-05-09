
import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

interface SketchBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const SketchBadge: React.FC<SketchBadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const getVariantClasses = () => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-500 text-white border-black';
      case 'success':
        return 'bg-green-500 text-white border-black';
      case 'warning':
        return 'bg-orange-400 text-white border-black';
      case 'danger':
        return 'bg-red-500 text-white border-black';
      default:
        return 'bg-white text-black border-black';
    }
  };
  
  return (
    <div className={`sketch-badge ${getVariantClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default SketchBadge;
