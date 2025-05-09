
import React from 'react';
import { SketchCard } from '../marker';

const GridSpacingSection: React.FC = () => {
  return (
    <SketchCard title="Grid System & Spacing" className="mb-6">
      <div className="space-y-4">
        <p>Grid layout and spacing guidelines:</p>
        
        <h4 className="font-bold mt-3">Grid Example</h4>
        <div className="sketch-grid mb-6">
          <div className="sketch-grid-item"></div>
          <div className="sketch-grid-item"></div>
          <div className="sketch-grid-item"></div>
          <div className="sketch-grid-item"></div>
        </div>
        
        <h4 className="font-bold mt-3">Spacing Scale</h4>
        <div className="flex flex-wrap items-end gap-2">
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">2px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">4px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">8px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">12px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">16px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-xs mt-1">24px</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default GridSpacingSection;
