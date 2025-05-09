
import React from 'react';
import { SketchCard, SketchSteps } from '../marker';

interface StepsSectionProps {
  steps: Array<{
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
}

const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => {
  return (
    <SketchCard title="Steps" className="mb-6">
      <div className="space-y-4">
        <p>Progress steps for multi-stage processes:</p>
        <SketchSteps steps={steps} />
      </div>
    </SketchCard>
  );
};

export default StepsSection;
