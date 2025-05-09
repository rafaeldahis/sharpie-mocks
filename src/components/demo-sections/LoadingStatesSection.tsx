
import React from 'react';
import { SketchCard, SketchLoader } from '../marker';

const LoadingStatesSection: React.FC = () => {
  return (
    <SketchCard title="Loading States" className="mb-6">
      <div className="flex flex-col items-center space-y-4">
        <SketchLoader size={24} />
        <div className="flex space-x-4">
          <SketchLoader size={16} />
          <SketchLoader size={32} />
          <SketchLoader size={48} />
        </div>
        <div className="w-full">
          <div className="sketch-placeholder mb-2"></div>
          <div className="sketch-placeholder mb-2"></div>
          <div className="sketch-placeholder" style={{ width: '70%' }}></div>
        </div>
      </div>
    </SketchCard>
  );
};

export default LoadingStatesSection;
