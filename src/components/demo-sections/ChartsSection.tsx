
import React from 'react';
import { SketchCard, SketchBarChart, SketchPieChart } from '../marker';

interface ChartsSectionProps {
  barChartData: Array<{ value: number, color: string, label: string }>;
  chartData: Array<{ value: number, color: string, label: string }>;
}

const ChartsSection: React.FC<ChartsSectionProps> = ({ barChartData, chartData }) => {
  return (
    <SketchCard title="Charts" className="mb-6">
      <div className="space-y-8">
        {/* Bar Chart */}
        <div>
          <h4 className="text-lg font-bold mb-2">Bar Chart</h4>
          <div className="flex justify-center mb-4">
            <SketchBarChart data={barChartData} height={150} className="w-full" />
          </div>
        </div>
        
        {/* Pie Chart */}
        <div>
          <h4 className="text-lg font-bold mb-2">Pie Chart</h4>
          <div className="flex justify-center mb-4">
            <SketchPieChart data={chartData} size={150} />
          </div>
          <div className="text-center text-sm">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center mb-1">
                <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></div>
                <span>{item.label}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default ChartsSection;
