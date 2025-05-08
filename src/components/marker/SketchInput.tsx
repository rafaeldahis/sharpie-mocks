
import React from 'react';

interface SketchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SketchInput: React.FC<SketchInputProps> = ({ 
  label, 
  className = '', 
  id,
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
      <input
        id={inputId}
        className={`sketch-input font-comic w-full ${className}`}
        {...props}
      />
    </div>
  );
};

export default SketchInput;
