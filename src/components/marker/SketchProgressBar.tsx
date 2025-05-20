
import React from 'react';

interface SketchProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
  // Add the 'progress' property as an alias for 'value' for backward compatibility
  progress?: number;
}

const SketchProgressBar: React.FC<SketchProgressBarProps> = ({
  value = 0,
  progress, // Add this for backward compatibility
  max = 100,
  color = '#2179FF',
  className = '',
}) => {
  // Use progress prop if value is not provided (for backward compatibility)
  const actualValue = progress !== undefined ? progress : value;
  const percentage = Math.min(100, Math.max(0, (actualValue / max) * 100));
  
  return (
    <div className={`sketch-progress-container h-5 bg-gray-200 rounded overflow-hidden relative ${className}`} style={{
      boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.1)',
      transform: 'rotate(-0.3deg)'
    }}>
      <div 
        className="sketch-progress-bar h-full" 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: color,
          borderRight: '2px solid rgba(0, 0, 0, 0.2)',
          transform: 'skew(1deg)'
        }}
      ></div>
    </div>
  );
};

export default SketchProgressBar;
