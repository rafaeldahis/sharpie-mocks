
import React from 'react';
import { SketchCard } from '../marker';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricsSection: React.FC = () => {
  const demoData = [
    { value: 65, change: 12, positive: true, label: 'Revenue' },
    { value: 42, change: 8, positive: false, label: 'Expenses' },
    { value: 89, change: 23, positive: true, label: 'Users' }
  ];

  return (
    <SketchCard title="Metrics" className="mb-6">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {demoData.map((item, index) => (
          <div key={index} className="sketch-border border rounded-md p-3">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-500">{item.label}</span>
              <div className={`flex items-center ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                {item.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span className="text-xs ml-1">{item.positive ? '+' : '-'}{item.change}%</span>
              </div>
            </div>
            <div className="text-lg font-semibold">{item.value}</div>
            <div className="w-full h-1 bg-gray-100 mt-2 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${item.positive ? 'bg-green-400' : 'bg-red-400'}`} 
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Big number card example */}
      <div className="mt-4">
        <h3 className="font-medium mb-2 text-sm">Big Number Example</h3>
        <div className="sketch-border border rounded-md p-4 text-center">
          <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
          <div className="text-4xl font-bold mb-1">$128,450</div>
          <div className="flex items-center justify-center text-green-500 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+15.4% from last month</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default MetricsSection;
