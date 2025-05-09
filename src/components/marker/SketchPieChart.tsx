
import React, { useState } from 'react';
import { SketchTooltip } from './index';

interface SliceData {
  value: number;
  color: string;
  label?: string;
}

interface SketchPieChartProps {
  data: SliceData[];
  size?: number;
  className?: string;
}

const SketchPieChart: React.FC<SketchPieChartProps> = ({ 
  data, 
  size = 200, 
  className = '' 
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Generate random values if data is empty
  const displayData = data.length > 0 ? data : [
    { value: 35, color: '#FF5733', label: 'Red' },
    { value: 40, color: '#33FF57', label: 'Green' },
    { value: 25, color: '#3357FF', label: 'Blue' }
  ];
  
  // Calculate total for percentages
  const total = displayData.reduce((sum, slice) => sum + slice.value, 0);
  
  // Generate SVG paths for pie slices
  const generatePieSlices = () => {
    let currentAngle = 0;
    
    return displayData.map((slice, index) => {
      // Calculate the angle for this slice
      const sliceAngle = (slice.value / total) * 360;
      
      // Calculate start and end points
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      
      // Convert angles to radians
      const startRad = (startAngle - 90) * Math.PI / 180;
      const endRad = (endAngle - 90) * Math.PI / 180;
      
      // Calculate points
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2;
      
      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);
      
      // Generate path
      const largeArcFlag = sliceAngle > 180 ? 1 : 0;
      const path = `
        M ${centerX} ${centerY}
        L ${x1} ${y1}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
        Z
      `;
      
      // Update current angle for next slice
      currentAngle += sliceAngle;

      // Format the tooltip content to include percentage
      const percentage = ((slice.value / total) * 100).toFixed(1);
      const tooltipContent = slice.label 
        ? `${slice.label}: ${slice.value} (${percentage}%)` 
        : `${slice.value} (${percentage}%)`;
      
      return (
        <SketchTooltip key={index} content={tooltipContent}>
          <path
            d={path}
            fill={slice.color}
            stroke="#000"
            strokeWidth="2"
            style={{ 
              cursor: 'pointer',
              transform: hoverIndex === index ? `translate(${Math.cos((startAngle + endAngle) / 2 * Math.PI / 180) * 5}px, ${Math.sin((startAngle + endAngle) / 2 * Math.PI / 180) * 5}px)` : 'none'
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        </SketchTooltip>
      );
    });
  };
  
  return (
    <div className={`sketch-pie-chart ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {generatePieSlices()}
      </svg>
    </div>
  );
};

export default SketchPieChart;
