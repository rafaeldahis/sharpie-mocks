
import React, { useState } from 'react';
import { SketchCard, SketchInput, SketchCheckbox, SketchRadio, SketchToggle } from '../marker';

const FormElementsSection: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      <SketchToggle 
        label="Dark Mode"
        defaultChecked={isDarkMode}
        onChange={(checked) => setIsDarkMode(checked)}
      />
    </SketchCard>
  );
};

export default FormElementsSection;
