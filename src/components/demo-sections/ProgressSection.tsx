
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
        <div className="space-y-2">
          <h3 className="text-lg font-medium marker-heading">Progress Bar</h3>
          <SketchProgressBar value={65} className="mb-2" color="#2179FF" />
          <p className="text-sm text-gray-500">65% Complete</p>
        </div>
        
        {/* Steps Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium marker-heading">Progress Steps</h3>
          <SketchSteps steps={steps} />
        </div>
        
        {/* Pagination Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium marker-heading">Pagination</h3>
          <SketchPagination 
            totalPages={5}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressSection;
