
import React from 'react';
import { Check } from 'lucide-react';

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
      <div className="sketch-steps-line relative w-full h-1 bg-gray-200 my-4"></div>
      <div className="sketch-steps flex justify-between relative -mt-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`sketch-step flex flex-col items-center relative ${step.active ? 'sketch-step-active' : ''} ${step.completed ? 'sketch-step-completed' : ''}`}
          >
            <div className="sketch-step-circle w-10 h-10 rounded-full flex items-center justify-center border-2 border-black bg-white mb-2" style={{
              transform: 'rotate(-1deg)',
              backgroundColor: step.completed ? '#33CC66' : (step.active ? '#2179FF' : 'white'),
              boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.15)'
            }}>
              {step.completed ? (
                <Check size={16} strokeWidth={3} color="white" />
              ) : (
                <span className={`${step.active ? 'text-white' : 'text-black'} font-bold`}>{index + 1}</span>
              )}
            </div>
            <div className={`sketch-step-label text-sm ${step.active || step.completed ? 'font-bold' : ''}`} style={{
              transform: 'rotate(-0.5deg)'
            }}>{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SketchSteps;
