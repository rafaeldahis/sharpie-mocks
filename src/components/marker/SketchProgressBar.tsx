
import React from 'react';

interface SketchProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
}

const SketchProgressBar: React.FC<SketchProgressBarProps> = ({
  value,
  max = 100,
  color = '#2179FF',
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className={`sketch-progress-container ${className}`}>
      <div 
        className="sketch-progress-bar" 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: color
        }}
      ></div>
    </div>
  );
};

export default SketchProgressBar;
