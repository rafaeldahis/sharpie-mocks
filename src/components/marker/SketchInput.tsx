
import React from 'react';

interface SketchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode; // Added startIcon property
}

const SketchInput: React.FC<SketchInputProps> = ({ 
  label, 
  className = '', 
  id,
  startIcon,
  ...props 
}) => {
  const inputId = id || `sketch-input-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block mb-1 font-comic text-body">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {startIcon}
          </div>
        )}
        <input
          id={inputId}
          className={`sketch-input font-comic w-full ${startIcon ? 'pl-10' : ''} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default SketchInput;
