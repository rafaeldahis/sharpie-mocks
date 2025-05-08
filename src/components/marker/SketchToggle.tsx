
import React, { useState } from 'react';

interface SketchToggleProps {
  defaultChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  label?: string;
  className?: string;
}

const SketchToggle: React.FC<SketchToggleProps> = ({ 
  defaultChecked = false,
  onChange,
  label,
  className = '',
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center mb-2">
      <div 
        className={`sketch-toggle ${isChecked ? 'active' : ''} ${className}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={isChecked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
            e.preventDefault();
          }
        }}
      />
      {label && (
        <span className="ml-2 font-comic text-body">{label}</span>
      )}
    </div>
  );
};

export default SketchToggle;
