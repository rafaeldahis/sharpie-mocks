
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
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <p className="mb-8 text-center text-lg">All marker style components displayed on a single page for easy viewing.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buttons */}
        <SketchCard title="Buttons" className="mb-6">
          <div className="space-y-3">
            <SketchButton onClick={handleButtonClick} className="w-full">
              {isLoading ? <SketchLoader size={16} /> : 'Click Me!'}
            </SketchButton>
            <div className="flex flex-wrap gap-2">
              <SketchButton variant="primary">Primary</SketchButton>
              <SketchButton variant="secondary">Secondary</SketchButton>
              <SketchButton variant="outline">Outline</SketchButton>
            </div>
            <SketchButton disabled className="w-full">Disabled Button</SketchButton>
          </div>
        </SketchCard>

        {/* Form Elements */}
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

        {/* Loading States */}
        <SketchCard title="Loading States" className="mb-6">
          <div className="flex flex-col items-center space-y-4">
            <SketchLoader size={24} />
            <div className="flex space-x-4">
              <SketchLoader size={16} />
              <SketchLoader size={32} />
              <SketchLoader size={48} />
            </div>
            <div className="w-full">
              <div className="sketch-placeholder mb-2"></div>
              <div className="sketch-placeholder mb-2"></div>
              <div className="sketch-placeholder" style={{ width: '70%' }}></div>
            </div>
          </div>
        </SketchCard>

        {/* Pie Chart */}
        <SketchCard title="Pie Chart" className="mb-6">
          <div className="flex justify-center mb-4">
            <SketchPieChart data={chartData} size={150} />
          </div>
          <div className="text-center text-sm">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center mb-1">
                <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></div>
                <span>{item.label}: {item.value}%</span>
              </div>
            ))}
          </div>
        </SketchCard>

        {/* Navigation Elements */}
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

        {/* Error & Success Messages */}
        <SketchCard title="Error & Success Messages" className="mb-6">
          <div className="mb-4">
            <div className="sketch-error-banner mb-4">
              An error occurred! Please try again later.
            </div>
          </div>

          <div className="mb-4">
            <div className="sketch-warning-banner mb-4">
              Warning: Your session will expire in 5 minutes.
            </div>
          </div>

          <div className="mb-4">
            <div className="sketch-success-banner mb-4">
              Success! Your changes have been saved.
            </div>
          </div>

          <div className="mb-4">
            <div className="sketch-toast">
              This is a toast notification
            </div>
          </div>

          <div className="sketch-breakline"></div>
        </SketchCard>

        {/* Table */}
        <SketchCard title="Table" className="mb-6">
          <SketchTable headers={tableHeaders} rows={tableRows} />
        </SketchCard>

        {/* Modals & Drawers */}
        <SketchCard title="Modals & Drawers" className="mb-6">
          <div className="space-y-4">
            <p>Click the buttons below to toggle the modal or drawer:</p>
            
            <div className="flex flex-wrap gap-2">
              <SketchButton 
                variant="primary"
                onClick={() => setShowModal(true)}
              >
                Show Modal Demo
              </SketchButton>
              
              <SketchButton 
                variant="secondary"
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                Toggle Drawer Demo
              </SketchButton>
            </div>
          </div>
        </SketchCard>
      </div>
      
      {/* Modal Demo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="sketch-modal">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-xl">Sketch Modal</h3>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="mb-4">
              This is a modal dialog with a sketchy style!
            </div>
            <div className="flex justify-end">
              <SketchButton onClick={() => setShowModal(false)}>Close</SketchButton>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Demo */}
      <div className={`sketch-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-xl">Sketch Drawer</h3>
          <button onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <div className="sketch-sidebar">
          <a href="#" className="sketch-sidebar-item active">Home</a>
          <a href="#" className="sketch-sidebar-item">Products</a>
          <a href="#" className="sketch-sidebar-item">Services</a>
          <a href="#" className="sketch-sidebar-item">About</a>
          <a href="#" className="sketch-sidebar-item">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default MarkerStyleDemo;
