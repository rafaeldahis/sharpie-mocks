
import React from 'react';

interface SketchCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SketchCheckbox: React.FC<SketchCheckboxProps> = ({ 
  label, 
  className = '', 
  checked,
  id,
  ...props 
}) => {
  const checkboxId = id || `sketch-checkbox-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className="flex items-center mb-2">
      <div className={`sketch-checkbox ${checked ? 'bg-sketch-accentBlue' : 'bg-white'} ${className}`}>
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          className="opacity-0 absolute h-4 w-4"
          {...props}
        />
        {checked && (
          <svg
            className="absolute top-0 left-0 h-full w-full text-white"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 8L6.5 10.5L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && (
        <label htmlFor={checkboxId} className="ml-2 font-comic text-body cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default SketchCheckbox;
