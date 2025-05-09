import React, { useState, useEffect } from 'react';
import {
  SketchButton,
  SketchInput,
  SketchCheckbox,
  SketchRadio,
  SketchCard,
  SketchToggle,
  SketchPieChart,
  SketchTable,
  SketchLoader,
  SketchPagination,
  SketchTooltip,
  SketchIconography,
  SketchProgressBar,
  SketchBadge,
  SketchTag,
  SketchDropdown,
  SketchNotificationBadge,
  SketchSteps,
  SketchFileUpload,
  SketchImageGallery,
  SketchTimeline,
  SketchCalendar,
  SketchSocialCard,
  SketchPricingTable,
  SketchTestimonialCard
} from './marker';
import { Share, Star, ThumbsUp, MessageSquare } from 'lucide-react';

const MarkerStyleDemo: React.FC = () => {
  console.log("MarkerStyleDemo component rendering");
  
  useEffect(() => {
    console.log("MarkerStyleDemo mounted");
    return () => {
      console.log("MarkerStyleDemo unmounted");
    };
  }, []);
  
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>(['JavaScript', 'React']);
  const [rating, setRating] = useState(0);

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
  
  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };
  
  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
  const steps = [
    { label: 'Step 1', completed: true, active: false },
    { label: 'Step 2', completed: true, active: false },
    { label: 'Step 3', completed: false, active: true },
    { label: 'Step 4', completed: false, active: false },
  ];
  
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475', alt: 'Image 1', caption: 'Circuit Board' },
    { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d', alt: 'Image 2', caption: 'Person using MacBook' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', alt: 'Image 3', caption: 'Foggy mountains' },
    { src: 'https://images.unsplash.com/photo-1506744140801-50d01698950b', alt: 'Image 4', caption: 'Serene lake' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', alt: 'Image 5', caption: 'Mountains aerial view' },
    { src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3', alt: 'Image 6', caption: 'Rocky mountain' },
  ];
  
  const timelineItems = [
    { 
      title: 'Project Started', 
      date: 'January 2023', 
      content: 'Initial concept and planning phase began.' 
    },
    { 
      title: 'Design Phase', 
      date: 'March 2023', 
      content: 'Created wireframes and design mockups.' 
    },
    { 
      title: 'Development', 
      date: 'May 2023', 
      content: 'Started the development process with React and TypeScript.' 
    },
    { 
      title: 'Beta Testing', 
      date: 'August 2023', 
      content: 'Initial testing with beta users.' 
    },
    { 
      title: 'Launch', 
      date: 'October 2023', 
      content: 'Official product launch.' 
    },
  ];
  
  const calendarEvents = [
    { date: new Date(2025, 4, 10), title: 'Meeting', color: '#2179FF' },
    { date: new Date(2025, 4, 15), title: 'Conference', color: '#2179FF' },
    { date: new Date(2025, 4, 16), title: 'Deadline', color: '#FF5733' },
  ];
  
  const pricingTiers = [
    {
      name: 'Basic',
      price: 0,
      period: 'month',
      description: 'Perfect for getting started',
      features: [
        { name: 'Up to 5 projects', included: true },
        { name: 'Basic components', included: true },
        { name: 'Community support', included: true },
        { name: 'Custom domains', included: false },
        { name: 'Advanced analytics', included: false },
      ],
      buttonText: 'Start for Free',
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'Everything you need for a growing business',
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'All components', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom domains', included: true },
        { name: 'Advanced analytics', included: false },
      ],
      buttonText: 'Upgrade to Pro',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'Advanced features for large teams',
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'All components', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Custom domains', included: true },
        { name: 'Advanced analytics', included: true },
      ],
      buttonText: 'Contact Sales',
    },
  ];

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <button 
        key={i} 
        className={`sketch-rating-star ${i < count ? 'active' : ''}`}
        onClick={() => handleRatingChange(i + 1)}
      >
        {i < count ? 
          <Star fill="#FFC107" stroke="#FFC107" size={20} /> : 
          <Star size={20} />
        }
      </button>
    ));
  };

  console.log("MarkerStyleDemo about to render JSX");
  
  return (
    <div className="container mx-auto p-4 font-comic">
      <p className="mb-8 text-center text-lg">All marker style components on a single page.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Typography */}
        <SketchCard title="Typography" className="mb-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold marker-heading mb-2 sketch-border inline-block px-2 py-1 bg-[#FFFF00] rotate-1">Heading 1</h1>
              <p className="text-sm text-gray-500">Class: text-4xl font-bold marker-heading</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold marker-heading mb-2">Heading 2</h2>
              <p className="text-sm text-gray-500">Class: text-3xl font-bold marker-heading</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold marker-heading mb-2">Heading 3</h3>
              <p className="text-sm text-gray-500">Class: text-2xl font-bold marker-heading</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold marker-heading mb-2">Heading 4</h4>
              <p className="text-sm text-gray-500">Class: text-xl font-bold marker-heading</p>
            </div>
            
            <div>
              <p className="text-base marker-text mb-2">Regular paragraph text</p>
              <p className="text-sm text-gray-500">Class: text-base marker-text</p>
            </div>
            
            <div>
              <p className="text-sm marker-caption mb-2">Small caption text</p>
              <p className="text-sm text-gray-500">Class: text-sm marker-caption</p>
            </div>
            
            <div>
              <p className="mb-2">
                <span className="font-bold">Bold text</span> and 
                <span className="italic"> italic text</span> and
                <span className="underline"> underlined text</span> and
                <span className="line-through"> strikethrough</span>
              </p>
              <p className="text-sm text-gray-500">Classes: font-bold, italic, underline, line-through</p>
            </div>
            
            <div>
              <p className="text-base marker-text sketch-border inline-block px-2 py-1 -rotate-1 bg-white">Outlined text</p>
              <p className="text-sm text-gray-500 mt-2">Class: sketch-border + inline-block</p>
            </div>
          </div>
        </SketchCard>

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

        {/* Pagination */}
        <SketchCard title="Pagination Controls" className="mb-6">
          <div className="space-y-4">
            <p>Hand-drawn pagination for multi-page content:</p>
            <SketchPagination 
              totalPages={5}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </SketchCard>

        {/* Tooltips */}
        <SketchCard title="Tooltips" className="mb-6">
          <div className="space-y-4">
            <p>Hover over these elements to see tooltips:</p>
            <div className="flex flex-wrap gap-4 items-center">
              <SketchTooltip content="This is a button with a tooltip">
                <SketchButton variant="primary">Hover Me</SketchButton>
              </SketchTooltip>
              
              <SketchTooltip content="Information about this feature" position="top">
                <div className="sketch-btn inline-flex items-center justify-center w-8 h-8 p-0 bg-blue-100 text-blue-500 rounded-full">
                  i
                </div>
              </SketchTooltip>
              
              <SketchTooltip content="Click to edit this item" position="bottom">
                <div className="sketch-btn inline-flex items-center justify-center w-8 h-8 p-0">
                  <SketchIconography icon="edit" />
                </div>
              </SketchTooltip>
            </div>
          </div>
        </SketchCard>

        {/* Iconography */}
        <SketchCard title="Iconography" className="mb-6">
          <div className="space-y-4">
            <p>Hand-drawn icon set for common actions:</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
              <div className="flex flex-col items-center">
                <SketchIconography icon="search" />
                <span className="text-sm mt-1">Search</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="edit" />
                <span className="text-sm mt-1">Edit</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="delete" />
                <span className="text-sm mt-1">Delete</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="home" />
                <span className="text-sm mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="settings" />
                <span className="text-sm mt-1">Settings</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="user" />
                <span className="text-sm mt-1">User</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="heart" />
                <span className="text-sm mt-1">Favorite</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="check" />
                <span className="text-sm mt-1">Done</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="bell" />
                <span className="text-sm mt-1">Notifications</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="bookmark" />
                <span className="text-sm mt-1">Bookmark</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="calendar" />
                <span className="text-sm mt-1">Calendar</span>
              </div>
              <div className="flex flex-col items-center">
                <SketchIconography icon="star" />
                <span className="text-sm mt-1">Star</span>
              </div>
            </div>
          </div>
        </SketchCard>

        {/* Color Palette */}
        <SketchCard title="Color Palette" className="mb-6">
          <div className="space-y-4">
            <p>Design system color palette:</p>
            
            <h4 className="font-bold mt-3">Primary Colors</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded sketch-border bg-[#2179FF]"></div>
                <span className="text-xs mt-1">Primary</span>
                <span className="text-xs">#2179FF</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded sketch-border bg-[#FF5733]"></div>
                <span className="text-xs mt-1">Secondary</span>
                <span className="text-xs">#FF5733</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded sketch-border bg-[#33CC66]"></div>
                <span className="text-xs mt-1">Accent</span>
                <span className="text-xs">#33CC66</span>
              </div>
            </div>
            
            <h4 className="font-bold mt-3">Grayscale</h4>
            <div className="grid grid-cols-5 gap-2">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded sketch-border bg-black"></div>
                <span className="text-xs mt-1">Black</span>
                <span className="text-xs">#000000</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded sketch-border bg-[#555555]"></div>
                <span className="text-xs mt-1">Dark</span>
                <span className="text-xs">#555555</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded sketch-border bg-[#999999]"></div>
                <span className="text-xs mt-1">Mid</span>
                <span className="text-xs">#999999</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded sketch-border bg-[#f3f3f3]"></div>
                <span className="text-xs mt-1">Light</span>
                <span className="text-xs">#f3f3f3</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded sketch-border bg-white"></div>
                <span className="text-xs mt-1">White</span>
                <span className="text-xs">#FFFFFF</span>
              </div>
            </div>
          </div>
        </SketchCard>

        {/* Grid & Spacing */}
        <SketchCard title="Grid System & Spacing" className="mb-6">
          <div className="space-y-4">
            <p>Grid layout and spacing guidelines:</p>
            
            <h4 className="font-bold mt-3">Grid Example</h4>
            <div className="sketch-grid mb-6">
              <div className="sketch-grid-item"></div>
              <div className="sketch-grid-item"></div>
              <div className="sketch-grid-item"></div>
              <div className="sketch-grid-item"></div>
            </div>
            
            <h4 className="font-bold mt-3">Spacing Scale</h4>
            <div className="flex flex-wrap items-end gap-2">
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">2px</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">4px</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-6 w-6 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">8px</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">12px</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">16px</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-sketch-accentBlue sketch-border"></div>
                <span className="text-xs mt-1">24px</span>
              </div>
            </div>
          </div>
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
        
        {/* Progress Bars */}
        <SketchCard title="Progress Bars" className="mb-6">
          <div className="space-y-4">
            <div>
              <SketchProgressBar value={50} className="mb-2" color="#2179FF" />
              <p className="text-sm text-gray-500">50% Complete (blue)</p>
            </div>
            <div>
              <SketchProgressBar value={75} className="mb-2" color="#33CC66" />
              <p className="text-sm text-gray-500">75% Complete (green)</p>
            </div>
            <div>
              <SketchProgressBar value={90} className="mb-2" color="#FF5733" />
              <p className="text-sm text-gray-500">90% Complete (red)</p>
            </div>
          </div>
        </SketchCard>
        
        {/* Badges and Tags */}
        <SketchCard title="Badges & Tags" className="mb-6">
          <div className="mb-4">
            <p className="mb-2">Badges:</p>
            <div className="flex flex-wrap gap-2">
              <SketchBadge variant="default">Default</SketchBadge>
              <SketchBadge variant="primary">Primary</SketchBadge>
              <SketchBadge variant="success">Success</SketchBadge>
              <SketchBadge variant="warning">Warning</SketchBadge>
              <SketchBadge variant="danger">Danger</SketchBadge>
            </div>
          </div>
          
          <div>
            <p className="mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag, index) => (
                <SketchTag key={index} onRemove={() => removeTag(tag)}>
                  {tag}
                </SketchTag>
              ))}
              <SketchTag>CSS</SketchTag>
              <SketchTag>HTML</SketchTag>
            </div>
          </div>
        </SketchCard>
        
        {/* Dropdown Menu */}
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
        
        {/* Notification Badges */}
        <SketchCard title="Notification Badges" className="mb-6">
          <div className="space-y-4">
            <p>Notification badges for different elements:</p>
            <div className="flex space-x-8 justify-center">
              <SketchNotificationBadge count={3} color="blue" />
              <SketchNotificationBadge count={12} color="red" icon="message" />
              <SketchNotificationBadge count={5} color="yellow" icon="clock" />
            </div>
          </div>
        </SketchCard>
        
        {/* Steps */}
        <SketchCard title="Steps" className="mb-6">
          <div className="space-y-4">
            <p>Progress steps for multi-stage processes:</p>
            <SketchSteps steps={steps} />
          </div>
        </SketchCard>
        
        {/* File Upload */}
        <SketchCard title="File Upload" className="mb-6">
          <div className="space-y-4">
            <p>Drag and drop file upload:</p>
            <SketchFileUpload 
              accept=".jpg,.png,.pdf"
              multiple
              onFileChange={(files) => console.log(`Uploaded ${files.length} files`)}
            />
          </div>
        </SketchCard>
        
        {/* Image Gallery */}
        <SketchCard title="Image Gallery" className="mb-6">
          <div className="space-y-4">
            <p>Responsive image gallery with captions:</p>
            <SketchImageGallery 
              images={galleryImages}
              columns={3}
            />
          </div>
        </SketchCard>
        
        {/* Timeline */}
        <SketchCard title="Timeline" className="mb-6">
          <div className="space-y-4">
            <p>Visualize events over time:</p>
            <SketchTimeline items={timelineItems} />
          </div>
        </SketchCard>
        
        {/* Calendar */}
        <SketchCard title="Calendar" className="mb-6">
          <div className="space-y-4">
            <p>Interactive calendar with event indicators:</p>
            <SketchCalendar 
              events={calendarEvents}
              onDateClick={(date) => console.log(`Selected date: ${date.toDateString()}`)}
            />
          </div>
        </SketchCard>
        
        {/* Social Media Section */}
        <SketchCard title="Social Media" className="mb-6 col-span-1 md:col-span-2">
          <div className="space-y-8">
            {/* Post Card */}
            <div>
              <p className="mb-4">Interactive social media post card:</p>
              <SketchSocialCard 
                avatar="JD"
                name="John Doodle"
                time="Posted 2 hours ago"
                content="Just finished my latest sketch! What do you think of these wobbly marker-style UI elements?"
                initialLikes={12}
                initialComments={3}
              />
            </div>
            
            {/* Social Share Buttons */}
            <div>
              <p className="mb-4">Share buttons for social media:</p>
              <div className="flex flex-wrap gap-3">
                <button className="sketch-social-share-button twitter">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                    <span>Twitter</span>
                  </div>
                </button>
                
                <button className="sketch-social-share-button facebook">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span>Facebook</span>
                  </div>
                </button>
                
                <button className="sketch-social-share-button linkedin">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                </button>
                
                <button className="sketch-social-share-button pinterest">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                      <path d="M20.8 8.4a9 9 0 1 0-8.8 13.6c.6 0 1.3-.1 1.8-.2"></path>
                      <path d="M8.6 13.5c3 4.6 6.8 7 11.4 7"></path>
                    </svg>
                    <span>Pinterest</span>
                  </div>
                </button>
                
                <button className="sketch-social-share-button share">
                  <div className="flex items-center gap-2">
                    <Share size={18} />
                    <span>Copy Link</span>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Reviews Unit */}
            <div>
              <p className="mb-4">Reviews rating component:</p>
              <div className="sketch-review-card">
                <div className="sketch-review-header">
                  <h4 className="font-bold">Rate this product</h4>
                </div>
                <div className="sketch-review-stars">
                  {renderStars(rating)}
                </div>
                <div className="sketch-review-label mt-2">
                  {rating === 0 ? "Click to rate" : `You rated this ${rating} star${rating !== 1 ? 's' : ''}`}
                </div>
                {rating > 0 && (
                  <div className="mt-4">
                    <SketchInput 
                      label="Review Comments (Optional)"
                      placeholder="Share your thoughts about this product..."
                      className="mb-4"
                    />
                    <SketchButton variant="primary" className="w-full">
                      Submit Review
                    </SketchButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SketchCard>
        
        {/* Pricing Table */}
        <SketchCard title="Pricing Table" className="mb-6 col-span-1 md:col-span-2">
          <div className="space-y-4">
            <p>Pricing comparison table:</p>
            <SketchPricingTable tiers={pricingTiers} />
          </div>
        </SketchCard>
        
        {/* Testimonial Card */}
        <SketchCard title="Testimonial Card" className="mb-6">
          <div className="space-y-4">
            <p>Customer testimonial card with rating:</p>
            <SketchTestimonialCard 
              quote="This sketch UI kit is amazing! It gives my projects a unique hand-drawn feel that stands out from the typical flat designs everyone is using."
              name="Jane Smith"
              role="UX Designer"
              avatar="JS"
              rating={5}
            />
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
