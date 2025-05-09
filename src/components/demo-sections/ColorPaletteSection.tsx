
import React from 'react';
import { SketchCard } from '../marker';

const ColorPaletteSection: React.FC = () => {
  return (
    <SketchCard title="Color Palette" className="mb-6">
      <div className="space-y-4">
        <p>Design system color palette:</p>
        
        <h4 className="font-bold mt-3">Primary Colors</h4>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded sketch-border bg-[#2179FF]"></div>
            <span className="text-xs mt-1">Primary</span>
            <span className="text-xs">#2179FF</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded sketch-border bg-[#FF5733]"></div>
            <span className="text-xs mt-1">Secondary</span>
            <span className="text-xs">#FF5733</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded sketch-border bg-[#33CC66]"></div>
            <span className="text-xs mt-1">Accent</span>
            <span className="text-xs">#33CC66</span>
          </div>
        </div>
        
        <h4 className="font-bold mt-3">Grayscale</h4>
        <div className="grid grid-cols-5 gap-2">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded sketch-border bg-black"></div>
            <span className="text-xs mt-1">Black</span>
            <span className="text-xs">#000000</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded sketch-border bg-[#555555]"></div>
            <span className="text-xs mt-1">Dark</span>
            <span className="text-xs">#555555</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded sketch-border bg-[#999999]"></div>
            <span className="text-xs mt-1">Mid</span>
            <span className="text-xs">#999999</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded sketch-border bg-[#f3f3f3]"></div>
            <span className="text-xs mt-1">Light</span>
            <span className="text-xs">#f3f3f3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded sketch-border bg-white"></div>
            <span className="text-xs mt-1">White</span>
            <span className="text-xs">#FFFFFF</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default ColorPaletteSection;
