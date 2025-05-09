
import React from 'react';
import { SketchCard, SketchTooltip, SketchButton, SketchIconography } from '../marker';

const TooltipsSection: React.FC = () => {
  return (
    <SketchCard title="Tooltips" className="mb-6">
      <div className="space-y-4">
        <p>Hover over these elements to see tooltips:</p>
        <div className="flex flex-wrap gap-4 items-center">
          <SketchTooltip content="This is a button with a tooltip">
            <SketchButton variant="primary">Hover Me</SketchButton>
          </SketchTooltip>
          
          <SketchTooltip content="Information about this feature" position="top">
            <div className="sketch-btn inline-flex items-center justify-center w-8 h-8 p-0 bg-blue-100 text-blue-500 rounded-full">
              i
            </div>
          </SketchTooltip>
          
          <SketchTooltip content="Click to edit this item" position="bottom">
            <div className="sketch-btn inline-flex items-center justify-center w-8 h-8 p-0">
              <SketchIconography icon="edit" />
            </div>
          </SketchTooltip>
        </div>
      </div>
    </SketchCard>
  );
};

export default TooltipsSection;
