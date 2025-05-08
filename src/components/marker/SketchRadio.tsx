
import React from 'react';

interface SketchRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SketchRadio: React.FC<SketchRadioProps> = ({ 
  label, 
  className = '', 
  checked,
  id,
  ...props 
}) => {
  const radioId = id || `sketch-radio-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className="flex items-center mb-2">
      <div className={`sketch-radio ${checked ? 'selected' : ''} ${className}`}>
        <input
          type="radio"
          id={radioId}
          checked={checked}
          className="opacity-0 absolute h-4 w-4"
          {...props}
        />
      </div>
      {label && (
        <label htmlFor={radioId} className="ml-2 font-comic text-body cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default SketchRadio;
