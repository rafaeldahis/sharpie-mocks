
import React from 'react';
import { SketchCard } from '../marker';
import { useIsMobile } from '../../hooks/use-mobile';

const GridSpacingSection: React.FC = () => {
  const { isMobile, screenSize } = useIsMobile();
  
  return (
    <SketchCard title="Grid System & Spacing" className="mb-4 sm:mb-6">
      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        <p className="text-xs xs:text-sm sm:text-base">Grid layout and spacing guidelines:</p>
        
        <h4 className="font-bold mt-1.5 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base">Grid Example</h4>
        <div className="sketch-grid mb-3 xs:mb-4 sm:mb-6 grid grid-cols-2 sm:grid-cols-4 gap-1 xs:gap-2 sm:gap-4">
          <div className="sketch-grid-item h-6 xs:h-8 sm:h-12 bg-gray-100 border border-black"></div>
          <div className="sketch-grid-item h-6 xs:h-8 sm:h-12 bg-gray-100 border border-black"></div>
          <div className="sketch-grid-item h-6 xs:h-8 sm:h-12 bg-gray-100 border border-black"></div>
          <div className="sketch-grid-item h-6 xs:h-8 sm:h-12 bg-gray-100 border border-black"></div>
        </div>
        
        <h4 className="font-bold mt-1.5 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base">Spacing Scale</h4>
        <div className="flex flex-wrap items-end gap-1 sm:gap-2">
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">2px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">4px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 xs:h-4 xs:w-4 sm:h-6 sm:w-6 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">8px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 xs:h-6 xs:w-6 sm:h-8 sm:w-8 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">12px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 xs:h-8 xs:w-8 sm:h-12 sm:w-12 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">16px</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 xs:h-12 xs:w-12 sm:h-16 sm:w-16 bg-sketch-accentBlue sketch-border"></div>
            <span className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1">24px</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default GridSpacingSection;
