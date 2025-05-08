
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MarkerStyleDemo: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('buttons');

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
      <h1 className="text-3xl font-bold mb-6 marker-heading">Marker Style Design System</h1>
      <p className="mb-6">A complete showcase of all marker style components for sketchy, playful UIs.</p>

      {/* Shadcn Tabs for Component Navigation */}
      <Tabs defaultValue="buttons" className="mb-6" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="w-full flex flex-wrap justify-center mb-4">
          <TabsTrigger value="buttons" className="sketch-tab-trigger">Buttons</TabsTrigger>
          <TabsTrigger value="forms" className="sketch-tab-trigger">Form Elements</TabsTrigger>
          <TabsTrigger value="loading" className="sketch-tab-trigger">Loading States</TabsTrigger>
          <TabsTrigger value="chart" className="sketch-tab-trigger">Pie Chart</TabsTrigger>
          <TabsTrigger value="navigation" className="sketch-tab-trigger">Navigation</TabsTrigger>
          <TabsTrigger value="ui" className="sketch-tab-trigger">UI Elements</TabsTrigger>
          <TabsTrigger value="table" className="sketch-tab-trigger">Table</TabsTrigger>
          <TabsTrigger value="modals" className="sketch-tab-trigger">Modals & Drawers</TabsTrigger>
        </TabsList>

        {/* Buttons Tab */}
        <TabsContent value="buttons">
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
        </TabsContent>

        {/* Forms Tab */}
        <TabsContent value="forms">
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
        </TabsContent>

        {/* Loading States Tab */}
        <TabsContent value="loading">
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
        </TabsContent>
        
        {/* Pie Chart Tab */}
        <TabsContent value="chart">
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
        </TabsContent>

        {/* Navigation Elements Tab */}
        <TabsContent value="navigation">
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
        </TabsContent>

        {/* UI Elements Tab */}
        <TabsContent value="ui">
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
        </TabsContent>

        {/* Table Tab */}
        <TabsContent value="table">
          <SketchCard title="Table" className="mb-6">
            <SketchTable headers={tableHeaders} rows={tableRows} />
          </SketchCard>
        </TabsContent>

        {/* Modals & Drawers Tab */}
        <TabsContent value="modals">
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
        </TabsContent>
      </Tabs>
      
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
