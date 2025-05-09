
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
          <div className="sketch-border bg-white p-4 transform rotate-0.5">
            <SketchProgressBar value={65} className="mb-2" color="#2179FF" />
            <p className="text-sm text-gray-600 mt-2">65% Complete</p>
          </div>
        </div>
        
        {/* Steps Example */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium marker-heading">Progress Steps</h3>
          <div className="sketch-border bg-white p-4 transform -rotate-0.5">
            <div className="flex space-x-3 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1 z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center sketch-border relative transform ${step.active ? 'bg-blue-500 text-white' : step.completed ? 'bg-green-500 text-white' : 'bg-white'}`}>
                    {step.completed ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="mt-2 text-sm font-medium">{step.label}</span>
                </div>
              ))}
              <div className="absolute top-4 left-0 w-full h-0.5 border-t-2 border-dashed border-black -z-0"></div>
            </div>
          </div>
        </div>
        
        {/* Pagination Example */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium marker-heading">Pagination</h3>
          <div className="flex justify-center transform rotate-0.5">
            <div className="sketch-border bg-white p-3 inline-flex items-center space-x-2">
              <button className="sketch-btn-icon bg-white" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                ←
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page} 
                  className={`w-8 h-8 sketch-border flex items-center justify-center transform ${currentPage === page ? 'bg-blue-500 text-white rotate-1' : 'bg-white -rotate-0.5'}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="sketch-btn-icon bg-white" onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default ProgressSection;
