import React, { useState } from 'react';
import { Video, AudioLines, MapPin, Upload, Sun, Moon, HelpCircle } from 'lucide-react';

export const MediaUtility = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fileProgress, setFileProgress] = useState<{[key: string]: number}>({
    'document.pdf': 100,
    'image.jpg': 60,
    'presentation.pptx': 30
  });
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold sketch-heading mb-6">5. Media & Utility Components</h2>
      
      {/* Video/Audio Player */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Video / Audio Player</h3>
        <div className="space-y-6">
          {/* Video Player */}
          <div className="border sketch-border">
            <div className="relative aspect-video bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video size={48} className="text-white opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                <div className="flex items-center justify-between mb-2">
                  <button className="sketch-btn-icon bg-transparent text-white">
                    ⏵
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">0:00 / 2:30</span>
                    <button className="sketch-btn-icon bg-transparent text-white">
                      ⏏
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-gray-500 rounded-full">
                  <div className="h-1 bg-white rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium">Product Demonstration Video</h4>
              <p className="text-sm text-gray-500">Learn how to use our sketchy UI components</p>
            </div>
          </div>
          
          {/* Audio Player */}
          <div className="border sketch-border p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <AudioLines size={24} className="text-gray-500" />
              </div>
              <div>
                <h4 className="font-medium">Design Podcast Episode #42</h4>
                <p className="text-xs text-gray-500">John Smith & Jane Doe</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <button className="sketch-btn-icon">⏮</button>
                <button className="sketch-btn-icon w-10 h-10">⏵</button>
                <button className="sketch-btn-icon">⏭</button>
                <span className="text-xs">1:15 / 32:40</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full">
                <div className="h-1 bg-blue-500 rounded-full w-1/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map/Location Picker */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Map / Location Picker</h3>
        <div className="border sketch-border">
          <div className="h-64 bg-gray-100 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Map Component Placeholder
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-bounce">
                <MapPin size={32} className="text-red-500" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
              <div className="sketch-input flex items-center">
                <MapPin size={16} className="text-gray-400 ml-2" />
                <input
                  id="location"
                  type="text"
                  placeholder="Search for a location..."
                  className="bg-transparent p-2 flex-grow focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <button className="sketch-btn-icon">📍 Current Location</button>
              <button className="sketch-btn">Select Location</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* File Upload Progress */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">File-Upload Progress List</h3>
        <div className="border sketch-border p-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-medium">Upload Files</h4>
            <button className="sketch-btn flex items-center gap-1 text-xs">
              <Upload size={14} />
              New Upload
            </button>
          </div>
          
          <div className="space-y-3">
            {Object.entries(fileProgress).map(([filename, progress]) => (
              <div key={filename} className="border sketch-border p-3 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded">
                      <span className="text-xs">{filename.split('.').pop()?.toUpperCase()}</span>
                    </div>
                    <span>{filename}</span>
                  </div>
                  
                  {progress === 100 ? (
                    <span className="text-green-500 text-xs">Completed</span>
                  ) : (
                    <span className="text-blue-500 text-xs">{progress}%</span>
                  )}
                </div>
                
                <div className="h-1 bg-gray-200 rounded-full">
                  <div 
                    className={`h-1 rounded-full ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Theme Switcher */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Color-Mode / Theme Switcher</h3>
        <div className="border sketch-border p-4">
          <div className="flex flex-col items-center">
            <div 
              className={`p-8 border sketch-border rounded-md mb-4 w-full max-w-md ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
            >
              <h4 className="font-medium mb-2">Theme Preview</h4>
              <p className="text-sm">This component demonstrates how content would look in {isDarkMode ? 'dark' : 'light'} mode.</p>
              <div className="mt-4 flex justify-between">
                <button className={`sketch-btn ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}>
                  Primary Button
                </button>
                <button className={`sketch-btn-icon ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}>
                  +
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={toggleTheme}
                className={`sketch-btn flex items-center gap-2 ${!isDarkMode ? 'bg-blue-500 text-white' : ''}`}
              >
                <Sun size={16} />
                Light
              </button>
              <button 
                onClick={toggleTheme}
                className={`sketch-btn flex items-center gap-2 ${isDarkMode ? 'bg-blue-500 text-white' : ''}`}
              >
                <Moon size={16} />
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Onboarding Walkthrough */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">On-boarding Walkthrough</h3>
        <div className="border sketch-border p-4">
          <div className="space-y-6">
            <div className="border sketch-border p-6 rounded-md relative">
              <span className="absolute top-2 right-2 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                {currentStep}
              </span>
              
              {currentStep === 1 && (
                <div>
                  <h4 className="font-bold text-lg mb-2">Welcome to Sketch UI!</h4>
                  <p className="mb-4">Let us show you around our component library.</p>
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400"
                    alt="Welcome" 
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                </div>
              )}
              
              {currentStep === 2 && (
                <div>
                  <h4 className="font-bold text-lg mb-2">Explore Components</h4>
                  <p className="mb-4">Browse through our collection of hand-crafted UI components.</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="border sketch-border p-2 rounded-md text-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Buttons</span>
                    </div>
                    <div className="border sketch-border p-2 rounded-md text-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Forms</span>
                    </div>
                    <div className="border sketch-border p-2 rounded-md text-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-1"></div>
                      <span className="text-xs">Cards</span>
                    </div>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div>
                  <h4 className="font-bold text-lg mb-2">Customize Everything</h4>
                  <p className="mb-4">Adjust colors, fonts and other properties to match your brand.</p>
                  <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {currentStep === 4 && (
                <div>
                  <h4 className="font-bold text-lg mb-2">Ready to Go!</h4>
                  <p className="mb-4">You're all set to create amazing interfaces.</p>
                  <div className="sketch-success-banner">
                    <p>Walkthrough completed successfully!</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                  className={`sketch-btn text-xs ${currentStep === 1 ? 'sketch-btn-disabled' : ''}`}
                >
                  Back
                </button>
                
                <div className="flex gap-1">
                  {Array.from({length: totalSteps}).map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full ${currentStep === i + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
                
                {currentStep < totalSteps ? (
                  <button 
                    onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
                    className="sketch-btn bg-blue-500 text-white text-xs"
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="sketch-btn bg-green-500 text-white text-xs"
                  >
                    Finish
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <button className="sketch-btn flex items-center gap-2">
                <HelpCircle size={16} />
                Start Walkthrough Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
