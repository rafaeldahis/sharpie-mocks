
import React, { useState } from 'react';
import { SketchTooltip } from './index';

interface BarData {
  label: string;
  value: number;
  color: string;
}

interface SketchBarChartProps {
  data: BarData[];
  height?: number;
  className?: string;
}

const SketchBarChart: React.FC<SketchBarChartProps> = ({
  data,
  height = 200,
  className = ''
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  // Find the maximum value in the data for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className={`sketch-bar-chart ${className}`} style={{ height }}>
      <div className="flex h-full items-end space-x-2">
        {data.map((bar, index) => {
          // Calculate height as percentage of max value
          const barHeight = `${(bar.value / maxValue) * 100}%`;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <SketchTooltip content={`${bar.value}`}>
                <div 
                  className="w-full sketch-border cursor-pointer transition-all"
                  style={{ 
                    height: barHeight, 
                    backgroundColor: bar.color,
                    transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
              </SketchTooltip>
              <div className="text-xs mt-1 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {bar.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SketchBarChart;
