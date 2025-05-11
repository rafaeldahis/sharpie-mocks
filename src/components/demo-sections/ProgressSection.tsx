
import React from 'react';
import { SketchCard, SketchProgressBar, SketchSteps } from '../marker';

interface Step {
  label: string;
  completed?: boolean;
  active?: boolean;
}

interface ProgressSectionProps {
  steps?: Step[];
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ steps }) => {
  return (
    <SketchCard title="Progress Bars" className="mb-6">
      <div className="space-y-8">
        <div>
          <div className="mb-8">
            <SketchProgressBar value={50} color="#2179FF" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">50% Complete (blue)</p>
          </div>
          
          <div className="mb-8">
            <SketchProgressBar value={75} color="#33CC66" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">75% Complete (green)</p>
          </div>
          
          <div className="mb-8">
            <SketchProgressBar value={90} color="#FF5733" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">90% Complete (red)</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">Steps</h3>
          <p className="mb-6 text-gray-600">Progress steps for multi-stage processes:</p>
          {steps && <SketchSteps steps={steps} className="mt-8 px-6" />}
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressSection;
