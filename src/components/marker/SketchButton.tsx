
import React from 'react';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

const SketchButton: React.FC<SketchButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  disabled = false,
  ...props 
}) => {
  let variantClasses = '';
  
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-sketch-accentBlue text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-sketch-midGrey text-white';
      break;
    case 'outline':
      variantClasses = 'bg-transparent text-sketch-black border-2 border-sketch-black';
      break;
    default:
      variantClasses = 'bg-sketch-accentBlue text-white';
  }
  
  return (
    <button
      className={`sketch-btn font-comic ${variantClasses} ${disabled ? 'sketch-btn-disabled' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default SketchButton;
