
import React from 'react';
import { SketchCard, SketchDropdown } from '../marker';

interface DropdownSectionProps {
  dropdownOptions: string[];
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ dropdownOptions }) => {
  return (
    <SketchCard title="Dropdown Menu" className="mb-6">
      <div className="space-y-4">
        <p>Hand-drawn dropdown menu:</p>
        <SketchDropdown 
          options={dropdownOptions}
          placeholder="Select an option"
          onSelect={(option) => console.log(`Selected: ${option}`)}
        />
      </div>
    </SketchCard>
  );
};

export default DropdownSection;
