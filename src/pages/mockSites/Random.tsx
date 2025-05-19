
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import {
  SketchCard,
  SketchBadge,
  SketchButton,
  SketchToggle,
  SketchProgressBar,
  SketchNotificationBadge,
  SketchTable,
  SketchDropdown,
  SketchPagination,
  SketchInput,
  SketchRadio,
  SketchCheckbox,
  SketchTooltip,
  SketchSocialCard,
  SketchTestimonialCard,
  SketchPricingTable,
  SketchTimeline,
  SketchSteps
} from "@/components/marker";

// Define UI element types
const UI_ELEMENTS = [
  "buttons",
  "formControls",
  "badgesAndTags",
  "progress",
  "toggles",
  "socialCard",
  "testimonials",
  "timeline",
  "steps",
];

const COLORS = [
  "#9b87f5",
  "#FFB6B6",
  "#BAD7F2",
  "#FFE29F",
  "#C1E1C5",
  "#FFCF8B",
  "#D6BCFA",
  "#FDE1D3",
  "#D3E4FD",
  "#FFDEE2"
];

const Random = () => {
  const [displayedElements, setDisplayedElements] = useState<string[]>([]);
  const [elementColors, setElementColors] = useState<{[key: string]: string}>({});
  
  const randomizeDisplay = () => {
    // Shuffle UI elements and pick 5
    const shuffled = [...UI_ELEMENTS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    // Generate random colors for each element
    const newColors: {[key: string]: string} = {};
    selected.forEach(element => {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      newColors[element] = randomColor;
    });
    
    setDisplayedElements(selected);
    setElementColors(newColors);
  };
  
  // Initialize random elements on first render
  useEffect(() => {
    randomizeDisplay();
  }, []);
  
  const renderElement = (element: string) => {
    switch(element) {
      case "buttons":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Buttons"
            style={{ backgroundColor: elementColors[element] }}
          >
            <div className="flex flex-wrap gap-3">
              <SketchButton variant="primary">Primary</SketchButton>
              <SketchButton variant="secondary">Secondary</SketchButton>
              <SketchButton variant="outline">Outline</SketchButton>
              <SketchButton variant="delete">Delete</SketchButton>
              <SketchButton disabled>Disabled</SketchButton>
            </div>
          </SketchCard>
        );
        
      case "formControls":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Form Controls"
            style={{ backgroundColor: elementColors[element] }}
          >
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Text input</label>
                <SketchInput placeholder="Enter some text..." />
              </div>
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block mb-1">Checkbox</label>
                  <SketchCheckbox label="Check me" />
                </div>
                <div>
                  <label className="block mb-1">Radio</label>
                  <div className="flex gap-2">
                    <SketchRadio name="radio" label="Option 1" checked />
                    <SketchRadio name="radio" label="Option 2" />
                  </div>
                </div>
              </div>
            </div>
          </SketchCard>
        );
        
      case "badgesAndTags":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Badges & Tags"
            style={{ backgroundColor: elementColors[element] }}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <SketchBadge variant="primary">Primary</SketchBadge>
                <SketchBadge variant="success">Success</SketchBadge>
                <SketchBadge variant="warning">Warning</SketchBadge>
                <SketchBadge variant="danger">Danger</SketchBadge>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-2.5 py-0.5 text-sm bg-gray-100 border-2 border-black rounded-md">Design</div>
                <div className="inline-flex items-center px-2.5 py-0.5 text-sm bg-gray-100 border-2 border-black rounded-md">UI/UX</div>
                <div className="inline-flex items-center px-2.5 py-0.5 text-sm bg-gray-100 border-2 border-black rounded-md">Sketch</div>
              </div>
            </div>
          </SketchCard>
        );
        
      case "progress":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Progress"
            style={{ backgroundColor: elementColors[element] }}
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress 25%</span>
                  <span>25%</span>
                </div>
                <SketchProgressBar value={25} color="#2179FF" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress 65%</span>
                  <span>65%</span>
                </div>
                <SketchProgressBar value={65} color="#33CC66" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress 90%</span>
                  <span>90%</span>
                </div>
                <SketchProgressBar value={90} color="#FF5733" />
              </div>
            </div>
          </SketchCard>
        );
        
      case "toggles":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Toggles & Notifications"
            style={{ backgroundColor: elementColors[element] }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <SketchToggle defaultChecked={true} />
                  <span>On</span>
                </div>
                <div className="flex items-center gap-2">
                  <SketchToggle defaultChecked={false} />
                  <span>Off</span>
                </div>
              </div>
              <div className="flex justify-around pt-4">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <SketchNotificationBadge count={3} position="top-right" color="red" />
                </div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9V5a2 2 0 0 1 2-2h3.19M15 5h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.99a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h.01" />
                    <path d="M7 16.5 10 19l7-7" />
                    <path d="M8.5 11.5 10 13l7-7" />
                  </svg>
                  <SketchNotificationBadge count={5} position="top-right" color="blue" />
                </div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  <SketchNotificationBadge count={2} position="top-right" color="green" />
                </div>
              </div>
            </div>
          </SketchCard>
        );
        
      case "steps":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Steps Process"
            style={{ backgroundColor: elementColors[element] }}
          >
            <SketchSteps 
              steps={[
                { label: "Cart", completed: true },
                { label: "Shipping", active: true },
                { label: "Payment", completed: false },
                { label: "Confirm", completed: false }
              ]} 
            />
          </SketchCard>
        );
        
      case "timeline":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Timeline"
            style={{ backgroundColor: elementColors[element] }}
          >
            <SketchTimeline 
              items={[
                { 
                  title: "Project Started", 
                  content: "Kickoff meeting with team",
                  date: "March 1, 2025",
                  icon: "✓"
                },
                { 
                  title: "Design Phase", 
                  content: "Creating wireframes & mockups",
                  date: "March 15, 2025",
                  icon: "✓"
                },
                { 
                  title: "Development", 
                  content: "Building the application",
                  date: "April 1, 2025",
                  icon: "⚒️"
                }
              ]}
            />
          </SketchCard>
        );
        
      case "socialCard":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Social Card"
            style={{ backgroundColor: elementColors[element] }}
          >
            <SketchSocialCard 
              avatar="JS"
              name="Jane Smith"
              time="3 hours ago"
              content="Just finished my sketchy UI design system! I love how expressive and playful it feels. Perfect for creative projects. #DesignSystem #UI #Sketch"
              initialLikes={42}
              initialComments={7}
            />
          </SketchCard>
        );
        
      case "testimonials":
        return (
          <SketchCard 
            className={`border-2 border-black`} 
            title="Testimonials"
            style={{ backgroundColor: elementColors[element] }}
          >
            <SketchTestimonialCard 
              quote="This design system brings so much personality to our application! Our users love it."
              name="Alex Johnson"
              role="Product Designer"
              rating={5}
              avatar=""
            />
          </SketchCard>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto p-4 pb-20">
      <div className="mb-6 flex items-center justify-between">
        <Link 
          to="/showcase" 
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
        >
          <ArrowLeft size={20} className="transform rotate-1" />
          Back to Showcase
        </Link>
        
        <button 
          onClick={randomizeDisplay}
          className="flex items-center gap-2 bg-black text-[#FFFF00] px-3 py-2 rounded-md border-2 border-black hover:bg-gray-800 transition-colors"
        >
          <RefreshCw size={18} className="animate-spin-once" />
          <span>Refresh Display</span>
        </button>
      </div>

      <div className="text-center mb-10">
        <div className="inline-block transform -rotate-2 bg-[#9b87f5] text-white px-8 py-3 border-2 border-black shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Random
          </h1>
        </div>
        <p className="text-lg mt-4">A showcase of UI elements in a bento-box style layout</p>
        <p className="text-sm mt-2 italic">Showing 5 random components - click refresh for more!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedElements.map((element, index) => (
          <div key={index} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
            {renderElement(element)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random;

