
import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

interface SketchBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

const SketchBadge: React.FC<SketchBadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  style, // Added style to destructuring
}) => {
  const getVariantClasses = () => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'danger':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div 
      className={`inline-flex items-center px-3 py-1 text-sm font-medium border-2 border-black rounded-full ${getVariantClasses()} ${className}`} 
      style={{
        boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.15)',
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
        ...style // Merge with any additional styles passed as props
      }}
    >
      {children}
    </div>
  );
};

export default SketchBadge;
