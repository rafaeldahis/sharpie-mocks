
import React, { useState } from 'react';
import { 
  Home, 
  ArrowLeft, 
  ArrowRight, 
  X, 
  Search, 
  ChevronDown, 
  AlertTriangle
} from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 font-comic">
      {/* Header with title */}
      <header className="bg-white border-b-2 border-black py-4 mb-8">
        <div className="container mx-auto">
          <h1 className="text-center">Marker-Style UI Guide</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">1. Foundations</h2>
          
          {/* 1.1 Typography */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">1.1 Typography</h3>
            <div className="mb-marker-sm">
              <h4 className="text-heading font-bold mb-1">Heading (18pt, Comic Sans MS Bold)</h4>
              <p className="text-body mb-1">Body Text (14pt, Comic Sans MS Regular)</p>
              <small className="text-caption">Caption Text (12pt, Comic Sans MS Regular)</small>
            </div>
            <div className="font-bold mt-marker-sm">Google Fonts: Comic Sans MS</div>
          </div>
          
          {/* 1.2 Colors & Strokes */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">1.2 Colors & Strokes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-marker-sm">
              <div className="p-3 border-2 border-sketch-black">
                <p>Black Outline (#000)</p>
                <div className="h-10 bg-sketch-black"></div>
              </div>
              <div className="p-3 border-2 border-sketch-black">
                <p>Mid-Grey (#999)</p>
                <div className="h-10 bg-sketch-midGrey"></div>
              </div>
              <div className="p-3 border-2 border-sketch-black">
                <p>Accent Blue (#2179FF)</p>
                <div className="h-10 bg-sketch-accentBlue"></div>
              </div>
            </div>
            <div className="mt-marker-sm">
              <p>Hover State Example: <a href="#" className="text-sketch-accentBlue hover:bg-sketch-hover hover:underline">Hover over this link</a></p>
              <p className="opacity-30 mt-2">Disabled State Example (30% opacity)</p>
            </div>
          </div>
          
          {/* 1.3 Spacing & Layout */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">1.3 Spacing & Layout</h3>
            <div className="flex items-center mb-marker-sm">
              <div className="w-12 h-12 bg-gray-200 border-2 border-black"></div>
              <div className="w-12 h-12 bg-gray-200 border-2 border-black mx-marker-sm"></div>
              <div className="w-12 h-12 bg-gray-200 border-2 border-black"></div>
              <span className="ml-4">← 12px spacing between elements</span>
            </div>
            <div className="mb-marker-md">
              <div className="w-full h-12 bg-gray-200 border-2 border-black mb-marker-md"></div>
              <div className="w-full h-12 bg-gray-200 border-2 border-black"></div>
              <span className="ml-4">← 24px spacing between sections</span>
            </div>
            <div className="sketch-breakline"></div>
            <p className="mt-2 mb-1">Breakline rectangle with zig-zag edge to indicate off-screen content</p>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">2. Navigation Components</h2>
          
          {/* Top Nav Bar */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Top Nav Bar</h3>
            <div className="sketch-navbar mb-2">
              <div className="flex items-center">
                <ArrowLeft className="mr-1" size={18} />
                <ArrowRight className="mr-1" size={18} />
                <X className="mr-3" size={18} />
                <Home className="mr-3" size={18} />
              </div>
              <div className="font-bold">Page Title</div>
              <Search size={18} />
            </div>
            <p>Browser chrome with ← → ✕ ⌂ 🔍 icons; title in center</p>
          </div>
          
          {/* Sidebar */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Sidebar</h3>
            <div className="border-2 border-black min-h-[200px] flex">
              <div className="sketch-sidebar">
                <a href="#" className="sketch-sidebar-item">Dashboard</a>
                <a href="#" className="sketch-sidebar-item active">Projects</a>
                <a href="#" className="sketch-sidebar-item">Messages</a>
                <a href="#" className="sketch-sidebar-item">Settings</a>
              </div>
              <div className="p-4 flex-1 bg-gray-50">
                <p className="mb-2">Main content area</p>
                <p>Selected sidebar item has thicker outline</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Tabs</h3>
            <div className="sketch-tabs mb-3">
              <div 
                className={`sketch-tab ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => setActiveTab(0)}
              >
                Overview
              </div>
              <div 
                className={`sketch-tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                Details
              </div>
              <div 
                className={`sketch-tab ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                Settings
              </div>
            </div>
            <div className="p-4 border-2 border-black bg-gray-50 min-h-[100px]">
              <p>Tab #{activeTab + 1} content goes here</p>
              <p className="mt-2">Active tab is filled with light grey</p>
            </div>
          </div>
          
          {/* Breadcrumbs */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Breadcrumbs</h3>
            <div className="sketch-breadcrumbs">
              <a href="#" className="text-sketch-accentBlue">Home</a>
              <span className="sketch-breadcrumbs-divider">/</span>
              <a href="#" className="text-sketch-accentBlue">Products</a>
              <span className="sketch-breadcrumbs-divider">/</span>
              <span className="font-bold">Current Page</span>
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">3. Inputs & Controls</h2>
          
          {/* Buttons */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Button Styles</h3>
            <div className="flex flex-wrap gap-4">
              <button className="sketch-btn">Primary Button</button>
              <button className="sketch-btn-disabled">Disabled Button</button>
              <button className="sketch-btn hover:bg-sketch-hover">Hover State</button>
            </div>
          </div>
          
          {/* Text Field */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Text Field</h3>
            <div className="max-w-xs">
              <label className="block mb-1.5 text-caption">Field Label (12pt, 6px above field)</label>
              <input 
                type="text" 
                className="sketch-input w-full" 
                placeholder="Type here..."
              />
              <p className="mt-2 text-sm">Focus state has thicker outline</p>
            </div>
          </div>
          
          {/* Checkbox / Radio */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Checkbox / Radio</h3>
            <div className="flex space-x-8">
              <div>
                <div className="flex items-center mb-2">
                  <div className="sketch-checkbox mr-2"></div>
                  <span>Unchecked</span>
                </div>
                <div className="flex items-center">
                  <div className="sketch-checkbox mr-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center font-bold">✓</div>
                  </div>
                  <span>Checked</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="sketch-radio mr-2"></div>
                  <span>Unselected</span>
                </div>
                <div className="flex items-center">
                  <div className="sketch-radio mr-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <span>Selected</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Dropdown</h3>
            <div className="max-w-xs">
              <label className="block mb-1.5 text-caption">Select an option</label>
              <div className="sketch-input w-full flex justify-between items-center cursor-pointer">
                <span>Dropdown Option</span>
                <ChevronDown size={16} />
              </div>
              
              <div className="relative mt-1">
                <div className="sketch-outline absolute w-full bg-white z-10 p-1">
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                  <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Toggle Switch */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Toggle Switch</h3>
            <div className="flex items-center">
              <div 
                className={`sketch-toggle ${isToggleActive ? 'active' : ''}`}
                onClick={() => setIsToggleActive(!isToggleActive)}
              ></div>
              <span className="ml-2">Toggle is {isToggleActive ? 'ON' : 'OFF'}</span>
            </div>
            <div className="mt-2 text-sm">
              Circle knob left = off (grey), right = on (accent blue)
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">4. Data Display Patterns</h2>
          
          {/* Table */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Table</h3>
            <table className="sketch-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="sketch-placeholder w-24"></div>
                  </td>
                  <td>
                    <div className="sketch-placeholder w-20"></div>
                  </td>
                  <td>
                    <div className="sketch-placeholder w-32"></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="sketch-placeholder w-32"></div>
                  </td>
                  <td>
                    <div className="sketch-placeholder w-16"></div>
                  </td>
                  <td>
                    <div className="sketch-placeholder w-28"></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2 text-sm">
              Header row bold; columns separated by single marker strokes; sample text as scribble loops
            </div>
          </div>
          
          {/* Card */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Card</h3>
            <div className="sketch-outline p-4">
              <h4 className="mb-2">Card Title</h4>
              <div className="border-2 border-dashed border-black h-32 flex items-center justify-center mb-2">
                <span className="text-2xl">X</span>
              </div>
              <div className="sketch-placeholder"></div>
              <div className="sketch-placeholder w-3/4"></div>
            </div>
            <div className="mt-2 text-sm">
              Rounded rectangle with header text + placeholder image (dashed box with X)
            </div>
          </div>
          
          {/* Metric Tile */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Metric Tile</h3>
            <div className="sketch-outline p-4 text-center max-w-xs">
              <div className="text-large-metric font-bold mb-1">28,459</div>
              <div className="uppercase text-caption">TOTAL VISITORS</div>
            </div>
            <div className="mt-2 text-sm">
              Large 28pt number centered; caption below in small caps
            </div>
          </div>
          
          {/* Charts */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Charts</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="sketch-outline p-4">
                  <div className="relative h-40">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
                    <div className="absolute left-0 top-0 h-full w-px bg-black"></div>
                    
                    <div className="absolute bottom-0 left-4 w-8 h-20 bg-sketch-midGrey border border-black"></div>
                    <div className="absolute bottom-0 left-16 w-8 h-32 bg-sketch-midGrey border border-black"></div>
                    <div className="absolute bottom-0 left-28 w-8 h-16 bg-sketch-midGrey border border-black"></div>
                    <div className="absolute bottom-0 left-40 w-8 h-24 bg-sketch-midGrey border border-black"></div>
                  </div>
                  <div className="mt-2 text-center">Bar Chart</div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="sketch-outline p-4">
                  <div className="h-40 flex items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full">
                      <div className="absolute inset-0 bg-sketch-midGrey border border-black rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                      <div className="absolute inset-0 bg-sketch-accentBlue border border-black rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%, 0% 70%)' }}></div>
                      <div className="absolute inset-0 bg-gray-300 border border-black rounded-full" style={{ clipPath: 'polygon(50% 50%, 0% 70%, 0% 100%, 50% 100%)' }}></div>
                    </div>
                  </div>
                  <div className="mt-2 text-center">Pie Chart</div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm">
              Charts in mid-grey; axes drawn freehand; no exact values (reinforces low-fi)
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">5. System Feedback</h2>
          
          {/* Toast */}
          <div className="mb-marker-md sketch-card relative">
            <h3 className="mb-marker-sm">Toast</h3>
            <button
              className="sketch-btn mb-4"
              onClick={() => {
                const toast = document.getElementById('demo-toast');
                if (toast) {
                  toast.classList.remove('hidden');
                  setTimeout(() => {
                    toast.classList.add('hidden');
                  }, 3000);
                }
              }}
            >
              Show Toast
            </button>
            
            <div id="demo-toast" className="sketch-toast hidden">
              <div className="flex justify-between items-center">
                <span className="text-caption">Notification message</span>
                <X size={14} />
              </div>
            </div>
            
            <div className="mt-2 text-sm">
              Rounded rectangle top-right; fill mid-grey; text 12pt white; auto-dismiss arrow
            </div>
          </div>
          
          {/* Loader */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Loader</h3>
            <div className="flex flex-col items-center p-4">
              <div className="sketch-loader mb-2"></div>
              <div className="relative">
                <div className="absolute -top-3 -right-6 w-6 h-6 border-t-2 border-r-2 border-black transform rotate-45"></div>
                <div className="absolute -top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-black transform rotate-45"></div>
              </div>
            </div>
            <div className="mt-2 text-sm">
              Circular scribble with 3 motion lines (suggesting spin)
            </div>
          </div>
          
          {/* Error Banner */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Error Banner</h3>
            <div className="sketch-error-banner">
              <span>Something went wrong. Please try again later.</span>
            </div>
            <div className="mt-2 text-sm">
              Full-width red outline; exclamation icon + copy
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">6. Dialogs & Overlays</h2>
          
          {/* Modal */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Modal</h3>
            <button className="sketch-btn" onClick={() => setIsModalOpen(true)}>Open Modal</button>
            
            {isModalOpen && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                <div className="sketch-modal">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Modal Title</h3>
                    <X size={18} className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
                  </div>
                  <div className="sketch-placeholder"></div>
                  <div className="sketch-placeholder w-3/4"></div>
                  <div className="sketch-placeholder w-1/2 mb-4"></div>
                  <div className="flex justify-end mt-auto pt-4">
                    <button 
                      className="sketch-btn"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>
            )}
            
            <div className="border-2 border-black p-4 mt-3 relative">
              <h4 className="mb-2">Modal Preview:</h4>
              <div className="w-48 h-32 bg-white border-2 border-black p-2">
                <div className="border-b border-black pb-1 mb-1 flex justify-between">
                  <span className="font-bold">Modal Title</span>
                  <span>X</span>
                </div>
                <div className="sketch-placeholder"></div>
                <div className="sketch-placeholder w-3/4"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-6 border-2 border-black bg-white transform -rotate-12"></div>
              <div className="absolute -bottom-5 -left-1 w-12 h-6 border-2 border-black bg-white transform -rotate-6"></div>
            </div>
            
            <div className="mt-2 text-sm">
              Centered 480 × 320 px panel; drop shadow scribble; title bold
            </div>
          </div>
          
          {/* Drawer */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Drawer</h3>
            <button className="sketch-btn" onClick={() => setIsDrawerOpen(true)}>Open Drawer</button>
            
            {isDrawerOpen && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                <div className="sketch-drawer open">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Drawer Title</h3>
                    <X size={18} className="cursor-pointer" onClick={() => setIsDrawerOpen(false)} />
                  </div>
                  <div className="sketch-placeholder"></div>
                  <div className="sketch-placeholder w-3/4"></div>
                  <div className="sketch-placeholder w-1/2"></div>
                </div>
              </>
            )}
            
            <div className="border-2 border-black p-4 mt-3">
              <h4 className="mb-2">Drawer Preview:</h4>
              <div className="flex">
                <div className="w-36 h-32 bg-gray-200 border-2 border-black p-1 mr-1">
                  <span className="text-xs">Main Content</span>
                </div>
                <div className="w-20 h-32 bg-white border-2 border-black p-1 flex flex-col">
                  <span className="text-xs border-b border-black pb-1">Title</span>
                  <div className="sketch-placeholder mt-1 h-2"></div>
                  <div className="sketch-placeholder h-2"></div>
                  <span className="text-xs mt-auto">&lt;</span>
                </div>
              </div>
            </div>
            
            <div className="mt-2 text-sm">
              Right-side 320 px panel slides over; chevron arrow handle
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">7. Annotation Conventions</h2>
          
          {/* Scribble-Lorem */}
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Scribble-Lorem</h3>
            <div className="sketch-outline p-4">
              <div className="sketch-placeholder"></div>
              <div className="sketch-placeholder w-3/4"></div>
              <div className="sketch-placeholder w-1/2"></div>
            </div>
            <div className="mt-2 text-sm">
              Scribble-Lorem (~~~) inside shapes signals filler text
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">8. Responsive Hints</h2>
          
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Mobile Design</h3>
            <div className="flex justify-center">
              <div className="border-2 border-black w-[390px] h-[200px] p-4 relative">
                <div className="p-2 text-xs">
                  iPhone 14 (390 × 844 pt)
                </div>
                <div className="border-2 border-black h-12 absolute left-4 right-4 bottom-4 flex justify-between items-center px-2">
                  <span>Tab 1</span>
                  <span>Tab 2</span>
                  <span>Tab 3</span>
                  <span>Tab 4</span>
                  <span>Tab 5</span>
                </div>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-xs">
                  16px outer padding
                </div>
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 text-xs">
                  Collapse sidebar to tab bar with 5 icons
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="sketch-breakline"></div>
              <p className="text-center text-sm mt-1">Use dashed breaklines to indicate scroll areas on long mobile forms</p>
            </div>
          </div>
        </section>
        
        <section className="mb-marker-md">
          <h2 className="mb-marker-sm">9. Accessibility Reminders</h2>
          
          <div className="mb-marker-md sketch-card">
            <h3 className="mb-marker-sm">Focus States</h3>
            <div className="mb-3">
              <button className="sketch-btn outline outline-4 outline-black">Focused Button</button>
            </div>
            <div className="text-sm mb-4">
              Even in low-fi, show focus ring (thicker outline) on at least one element per screen to flag keyboard nav needs
            </div>
            
            <h4 className="mb-2">Color-blind Friendly Elements:</h4>
            <div className="flex items-center">
              <div className="sketch-checkbox mr-2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
              <span>Use text/shape indicators, not just colors</span>
            </div>
            <div className="text-sm mt-2">
              Ensure color-blind users rely on text/shape, not hue alone (e.g., checked checkboxes)
            </div>
          </div>
        </section>
      </div>
      
      <footer className="bg-sketch-midGrey border-t-2 border-black py-4 mt-8">
        <div className="container mx-auto text-center text-white">
          <p>Marker-Style UI Guide - Comic Sans MS - 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

