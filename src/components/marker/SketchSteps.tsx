
import React from 'react';

interface Step {
  label: string;
  completed?: boolean;
  active?: boolean;
}

interface SketchStepsProps {
  steps: Step[];
  className?: string;
}

const SketchSteps: React.FC<SketchStepsProps> = ({
  steps,
  className = '',
}) => {
  return (
    <div className={`sketch-steps-container ${className}`}>
      <div className="sketch-steps-line"></div>
      <div className="sketch-steps">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`sketch-step ${step.active ? 'sketch-step-active' : ''} ${step.completed ? 'sketch-step-completed' : ''}`}
          >
            <div className="sketch-step-circle">
              {step.completed ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="sketch-step-label">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SketchSteps;
