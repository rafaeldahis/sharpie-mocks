
import React from 'react';
import { SketchCard, SketchProgressBar } from '../marker';

const ProgressSection: React.FC = () => {
  return (
    <SketchCard title="Progress Bars" className="mb-6">
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="mb-2">
            <SketchProgressBar value={50} color="#2179FF" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">50% Complete (blue)</p>
          </div>
          
          <div className="mb-2">
            <SketchProgressBar value={75} color="#33CC66" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">75% Complete (green)</p>
          </div>
          
          <div className="mb-2">
            <SketchProgressBar value={90} color="#FF5733" className="mb-2" />
            <p className="text-sm text-gray-600 mt-2">90% Complete (red)</p>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressSection;
