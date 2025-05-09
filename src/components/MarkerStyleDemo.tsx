import React from 'react';
import { Star } from 'lucide-react';
import {
  // Core Design System
  TypographySection,
  ButtonsSection,
  FormElementsSection,
  LoadingStatesSection,
  NavigationElementsSection,
  MessagesSection,
  TableSection,
  IconographySection,
  ColorPaletteSection,
  GridSpacingSection,
  TooltipsSection,
  NumericStepperSection,
  
  // Ready-to-Use Components
  ChartsSection,
  ModalDrawerSection,
  BadgesTagsSection,
  NotificationBadgesSection,
  ProgressSection,
  FileUploadSection,
  ImageGallerySection,
  TimelineSection,
  CalendarSection,
  SocialMediaSection,
  PricingTableSection,
  TestimonialSection,
  FAQSection,
  PasswordFieldSection,
  AvatarSection,
  EmptyStateSection,
  MiniTrendSection
} from './demo-sections';

const MarkerStyleDemo: React.FC = () => {
  console.log("MarkerStyleDemo component rendering");
  
  // Data for the components
  const barChartData = [
    { value: 65, color: '#FF5733', label: 'Jan' },
    { value: 40, color: '#33FF57', label: 'Feb' },
    { value: 85, color: '#3357FF', label: 'Mar' },
    { value: 70, color: '#F3C13A', label: 'Apr' },
    { value: 55, color: '#9B59B6', label: 'May' },
  ];
  
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

  const [rating, setRating] = React.useState(0);

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
      {/* Core Design System */}
      <h2 className="text-3xl font-bold mb-6 sketch-heading sketch-underline">1. Core Design System</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <TypographySection />
        <ColorPaletteSection />
        <ButtonsSection />
        <GridSpacingSection />
        <FormElementsSection dropdownOptions={dropdownOptions} />
        <LoadingStatesSection />
        <NavigationElementsSection />
        <TableSection tableHeaders={tableHeaders} tableRows={tableRows} />
        <MessagesSection />
        <IconographySection />
        <TooltipsSection />
        <NumericStepperSection />
      </div>

      {/* Ready-to-Use Components */}
      <h2 className="text-3xl font-bold mb-6 sketch-heading sketch-underline">2. Ready-to-Use Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartsSection barChartData={barChartData} chartData={chartData} />
        <ModalDrawerSection />
        <ProgressSection steps={steps} />
        <BadgesTagsSection />
        <NotificationBadgesSection />
        <FileUploadSection />
        <ImageGallerySection galleryImages={galleryImages} />
        <TimelineSection timelineItems={timelineItems} />
        <CalendarSection calendarEvents={calendarEvents} />
        <FAQSection />
        <PasswordFieldSection />
        <AvatarSection />
        <EmptyStateSection />
        <MiniTrendSection />
        {/* Make SocialMedia and Testimonial sections appear side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <SocialMediaSection renderStars={renderStars} />
          </div>
          <div className="w-full md:w-1/2">
            <TestimonialSection />
          </div>
        </div>
        <PricingTableSection pricingTiers={pricingTiers} />
      </div>
    </div>
  );
};

export default MarkerStyleDemo;
