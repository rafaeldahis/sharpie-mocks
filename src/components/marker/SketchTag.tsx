
import React from 'react';

interface SketchTagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}

const SketchTag: React.FC<SketchTagProps> = ({
  children,
  onRemove,
  className = '',
}) => {
  return (
    <div className={`sketch-tag ${className}`}>
      {children}
      {onRemove && (
        <button 
          className="sketch-tag-remove" 
          onClick={onRemove}
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SketchTag;
