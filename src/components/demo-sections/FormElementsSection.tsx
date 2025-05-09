
import React, { useState } from 'react';
import { SketchCard, SketchInput, SketchCheckbox, SketchRadio, SketchToggle, SketchDropdown } from '../marker';

interface FormElementsSectionProps {
  dropdownOptions?: string[];
}

const FormElementsSection: React.FC<FormElementsSectionProps> = ({ dropdownOptions = [] }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState<string | null>(null);

  const handleDropdownSelect = (option: string) => {
    setSelectedDropdownOption(option);
    console.log(`Selected: ${option}`);
  };

  return (
    <SketchCard title="Form Elements" className="mb-6">
      <SketchInput 
        label="Username" 
        placeholder="Enter your username"
        className="mb-4"
      />

      <div className="mb-4">
        <SketchCheckbox 
          label="Remember me"
          checked={rememberMe}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
        />
      </div>

      <div className="mb-4">
        <div className="mb-2">Select an option:</div>
        <SketchRadio 
          label="Option 1"
          name="options"
          checked={selectedOption === 'option1'}
          onChange={() => setSelectedOption('option1')}
        />
        <SketchRadio 
          label="Option 2"
          name="options"
          checked={selectedOption === 'option2'}
          onChange={() => setSelectedOption('option2')}
        />
      </div>

      <div className="mb-4">
        <div className="mb-2">Dropdown menu:</div>
        <SketchDropdown 
          options={dropdownOptions}
          placeholder="Select an option"
          onSelect={handleDropdownSelect}
        />
        {selectedDropdownOption && (
          <div className="mt-2 text-sm">Selected: {selectedDropdownOption}</div>
        )}
      </div>

      <SketchToggle 
        label="Dark Mode"
        defaultChecked={isDarkMode}
        onChange={(checked) => setIsDarkMode(checked)}
      />
    </SketchCard>
  );
};

export default FormElementsSection;
