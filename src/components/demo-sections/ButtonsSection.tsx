
import React, { useState } from 'react';
import { SketchButton, SketchCard, SketchLoader } from '../marker';
import { Trash } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const ButtonsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <SketchCard title="Buttons" className="mb-6">
      <div className="space-y-3">
        <SketchButton onClick={handleButtonClick} className="w-full">
          {isLoading ? <SketchLoader size={isMobile ? 14 : 16} /> : 'Click Me!'}
        </SketchButton>
        <div className="flex flex-wrap gap-2">
          <SketchButton variant="primary">Primary</SketchButton>
          <SketchButton variant="secondary">Secondary</SketchButton>
          <SketchButton variant="outline">Outline</SketchButton>
          <SketchButton variant="primary" className="bg-red-500 hover:bg-red-600">
            <Trash size={isMobile ? 14 : 16} className="mr-1" />
            Delete
          </SketchButton>
        </div>
        <SketchButton disabled className="w-full">Disabled Button</SketchButton>
      </div>
    </SketchCard>
  );
};

export default ButtonsSection;
