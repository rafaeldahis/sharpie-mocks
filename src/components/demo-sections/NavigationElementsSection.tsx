
import React from 'react';
import { SketchCard } from '../marker';

const NavigationElementsSection: React.FC = () => {
  return (
    <SketchCard title="Navigation Elements" className="mb-6">
      <div className="sketch-navbar mb-4">
        <div className="font-bold">Sketch Navbar</div>
        <div className="flex space-x-2">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Contact</a>
        </div>
      </div>

      <div className="mb-4">
        <div className="sketch-breadcrumbs mb-4">
          <span>Home</span>
          <span className="sketch-breadcrumbs-divider">/</span>
          <span>Components</span>
          <span className="sketch-breadcrumbs-divider">/</span>
          <span className="font-bold">Navigation</span>
        </div>
      </div>

      <div className="sketch-tabs">
        <div className="sketch-tab active">Tab 1</div>
        <div className="sketch-tab">Tab 2</div>
        <div className="sketch-tab">Tab 3</div>
      </div>
    </SketchCard>
  );
};

export default NavigationElementsSection;
