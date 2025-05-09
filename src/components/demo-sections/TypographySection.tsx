
import React from 'react';
import { SketchCard } from '../marker';

const TypographySection: React.FC = () => {
  return (
    <SketchCard title="Typography" className="mb-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold marker-heading mb-2 sketch-border inline-block px-2 py-1 bg-[#FFFF00] rotate-1">Heading 1</h1>
          <p className="text-sm text-gray-500">Class: text-4xl font-bold marker-heading</p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold marker-heading mb-2">Heading 2</h2>
          <p className="text-sm text-gray-500">Class: text-3xl font-bold marker-heading</p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold marker-heading mb-2">Heading 3</h3>
          <p className="text-sm text-gray-500">Class: text-2xl font-bold marker-heading</p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold marker-heading mb-2">Heading 4</h4>
          <p className="text-sm text-gray-500">Class: text-xl font-bold marker-heading</p>
        </div>
        
        <div>
          <p className="text-base marker-text mb-2">Regular paragraph text</p>
          <p className="text-sm text-gray-500">Class: text-base marker-text</p>
        </div>
        
        <div>
          <p className="text-sm marker-caption mb-2">Small caption text</p>
          <p className="text-sm text-gray-500">Class: text-sm marker-caption</p>
        </div>
        
        <div>
          <p className="mb-2">
            <span className="font-bold">Bold text</span> and 
            <span className="italic"> italic text</span> and
            <span className="underline"> underlined text</span> and
            <span className="line-through"> strikethrough</span>
          </p>
          <p className="text-sm text-gray-500">Classes: font-bold, italic, underline, line-through</p>
        </div>
        
        <div>
          <p className="text-base marker-text sketch-border inline-block px-2 py-1 -rotate-1 bg-white">Outlined text</p>
          <p className="text-sm text-gray-500 mt-2">Class: sketch-border + inline-block</p>
        </div>
      </div>
    </SketchCard>
  );
};

export default TypographySection;
