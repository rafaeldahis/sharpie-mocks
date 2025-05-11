
import React, { useState } from 'react';
import { SketchButton, SketchCard, SketchLoader } from '../marker';
import { Trash } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const ButtonsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile } = useIsMobile();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <SketchCard title="Buttons" className="mb-4 sm:mb-6">
      <div className="space-y-2 sm:space-y-3">
        <SketchButton onClick={handleButtonClick} className="w-full">
          {isLoading ? <SketchLoader size={isMobile ? 14 : 16} /> : 'Click Me!'}
        </SketchButton>
        <div className="flex flex-wrap gap-1 xs:gap-2">
          <SketchButton variant="primary" className="text-xs xs:text-sm">Primary</SketchButton>
          <SketchButton variant="secondary" className="text-xs xs:text-sm">Secondary</SketchButton>
          <SketchButton variant="outline" className="text-xs xs:text-sm">Outline</SketchButton>
          <SketchButton variant="primary" className="bg-red-500 hover:bg-red-600 text-xs xs:text-sm">
            <Trash size={isMobile ? 12 : 16} className="mr-1" />
            Delete
          </SketchButton>
        </div>
        <SketchButton disabled className="w-full text-xs xs:text-sm">Disabled Button</SketchButton>
      </div>
    </SketchCard>
  );
};

export default ButtonsSection;
