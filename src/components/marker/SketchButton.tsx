
import React from 'react';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'delete' | 'default';
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
    case 'delete':
      variantClasses = 'bg-red-500 hover:bg-red-600 text-white';
      break;
    case 'default':
      variantClasses = 'bg-sketch-accentBlue text-white';
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
