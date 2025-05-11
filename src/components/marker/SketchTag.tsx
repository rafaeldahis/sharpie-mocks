
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
    <div 
      className={`inline-flex items-center px-2.5 py-0.5 text-sm bg-gray-100 border-2 border-black rounded-md ${className}`}
      style={{
        boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.15)',
        transform: `rotate(${Math.random() * 2 - 1}deg)`
      }}
    >
      {children}
      {onRemove && (
        <button 
          className="ml-1.5 bg-white inline-flex items-center justify-center w-4 h-4 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-500 border border-black"
          onClick={onRemove}
          aria-label="Remove tag"
          style={{ transform: 'rotate(-1deg)' }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SketchTag;
