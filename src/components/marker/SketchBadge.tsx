
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
        return 'sketch-badge-primary';
      case 'success':
        return 'sketch-badge-success';
      case 'warning':
        return 'sketch-badge-warning';
      case 'danger':
        return 'sketch-badge-danger';
      default:
        return 'sketch-badge-default';
    }
  };
  
  return (
    <div className={`sketch-badge ${getVariantClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default SketchBadge;
