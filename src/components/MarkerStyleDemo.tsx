
import React, { useState } from 'react';
import {
  SketchButton,
  SketchInput,
  SketchCheckbox,
  SketchRadio,
  SketchCard,
  SketchToggle,
  SketchPieChart,
  SketchTable,
  SketchLoader
} from './marker';

const MarkerStyleDemo: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const chartData = [
    { value: 35, color: '#FF5733', label: 'Red' },
    { value: 40, color: '#33FF57', label: 'Green' },
    { value: 25, color: '#3357FF', label: 'Blue' },
  ];

  const tableHeaders = ['Name', 'Role', 'Status'];
  const tableRows = [
    ['John Doe', 'Developer', 'Active'],
    ['Jane Smith', 'Designer', 'Away'],
    ['Bob Johnson', 'Manager', 'Busy']
  ];

  return (
    <div className="container mx-auto p-4 font-comic">
      <h1 className="text-3xl font-bold mb-8 marker-heading">Marker Style Design System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SketchCard title="Buttons" className="mb-6">
          <div className="space-y-3">
            <SketchButton onClick={handleButtonClick}>
              {isLoading ? <SketchLoader size={16} /> : 'Click Me!'}
            </SketchButton>
            <div>
              <SketchButton variant="primary" className="mr-2 mb-2">Primary</SketchButton>
              <SketchButton variant="secondary" className="mr-2 mb-2">Secondary</SketchButton>
              <SketchButton variant="outline" className="mb-2">Outline</SketchButton>
            </div>
            <SketchButton disabled>Disabled Button</SketchButton>
          </div>
        </SketchCard>

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

        <SketchCard title="Pie Chart" className="mb-6">
          <div className="flex justify-center mb-4">
            <SketchPieChart data={chartData} size={150} />
          </div>
          <div className="text-center text-sm">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center mb-1">
                <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></div>
                <span>{item.label || `Slice ${index + 1}`}: {item.value}%</span>
              </div>
            ))}
          </div>
        </SketchCard>

        <SketchCard title="Table" className="mb-6 col-span-full">
          <SketchTable headers={tableHeaders} rows={tableRows} />
        </SketchCard>
      </div>
    </div>
  );
};

export default MarkerStyleDemo;
