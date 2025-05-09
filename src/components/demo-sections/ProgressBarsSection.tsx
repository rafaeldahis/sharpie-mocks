
import React from 'react';
import { SketchCard, SketchProgressBar } from '../marker';

const ProgressBarsSection: React.FC = () => {
  return (
    <SketchCard title="Progress Bars" className="mb-6">
      <div className="space-y-4">
        <div>
          <SketchProgressBar value={50} className="mb-2" color="#2179FF" />
          <p className="text-sm text-gray-500">50% Complete (blue)</p>
        </div>
        <div>
          <SketchProgressBar value={75} className="mb-2" color="#33CC66" />
          <p className="text-sm text-gray-500">75% Complete (green)</p>
        </div>
        <div>
          <SketchProgressBar value={90} className="mb-2" color="#FF5733" />
          <p className="text-sm text-gray-500">90% Complete (red)</p>
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressBarsSection;
