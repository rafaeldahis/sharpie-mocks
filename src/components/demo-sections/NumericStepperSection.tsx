
import React, { useState } from 'react';
import { SketchCard } from '../marker';
import { Minus, Plus } from 'lucide-react';

const NumericStepperSection: React.FC = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(prev => prev + 1);
  };

  const decrement = () => {
    setValue(prev => Math.max(0, prev - 1));
  };

  return (
    <SketchCard title="Numeric Stepper" className="mb-6">
      <div className="flex items-center space-x-2">
        <button 
          className="sketch-btn-icon bg-gray-200 p-1 rounded-md"
          onClick={decrement}
          disabled={value === 0}
        >
          <Minus size={16} />
        </button>
        <div className="sketch-input flex items-center justify-center w-12 h-8">
          {value}
        </div>
        <button 
          className="sketch-btn-icon bg-gray-200 p-1 rounded-md"
          onClick={increment}
        >
          <Plus size={16} />
        </button>
      </div>
    </SketchCard>
  );
};

export default NumericStepperSection;
