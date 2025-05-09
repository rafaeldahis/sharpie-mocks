
import React, { useState } from 'react';
import { SketchCard, SketchProgressBar, SketchSteps, SketchPagination } from '../marker';

interface ProgressSectionProps {
  steps: Array<{
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ steps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <SketchCard title="Progress Indicators" className="mb-6">
      <div className="space-y-8">
        {/* Progress Bar Example */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium marker-heading">Progress Bar</h3>
          <div className="transform rotate-0.5">
            <SketchProgressBar value={65} className="mb-2" color="#2179FF" />
          </div>
          <p className="text-sm text-gray-600">65% Complete</p>
        </div>
        
        {/* Steps Example */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium marker-heading">Progress Steps</h3>
          <div className="transform -rotate-0.5">
            <SketchSteps steps={steps} />
          </div>
        </div>
        
        {/* Pagination Example */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium marker-heading">Pagination</h3>
          <div className="transform rotate-0.5">
            <SketchPagination 
              totalPages={5}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressSection;
