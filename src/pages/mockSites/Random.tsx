
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { 
  SketchButton, 
  SketchBadge, 
  SketchInput, 
  SketchToggle,
  SketchRadio, 
  SketchProgressBar
} from "@/components/marker";

const Random = () => {
  const [uiElements, setUiElements] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Array of possible UI elements to display
  const possibleElements = [
    {
      id: 1,
      component: "Button",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Buttons</h3>
          <div className="flex flex-wrap gap-2">
            <SketchButton className="bg-[#9b87f5]">Primary</SketchButton>
            <SketchButton className="bg-white border-2 border-black text-black">Secondary</SketchButton>
            <SketchButton className="bg-red-500">Delete</SketchButton>
          </div>
        </div>
      )
    },
    {
      id: 2,
      component: "Input",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Input Fields</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Text Input</label>
              <SketchInput placeholder="Type something..." />
            </div>
            <div>
              <label className="block mb-2">Email Input</label>
              <SketchInput placeholder="email@example.com" type="email" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      component: "Toggle",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Toggles</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Active Toggle</span>
              <SketchToggle className="active" />
            </div>
            <div className="flex items-center justify-between">
              <span>Inactive Toggle</span>
              <SketchToggle />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      component: "Badge",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Badges</h3>
          <div className="flex flex-wrap gap-2">
            <SketchBadge>Default</SketchBadge>
            <SketchBadge variant="primary">Primary</SketchBadge>
            <SketchBadge variant="success">Success</SketchBadge>
            <SketchBadge variant="warning">Warning</SketchBadge>
            <SketchBadge variant="danger">Danger</SketchBadge>
          </div>
        </div>
      )
    },
    {
      id: 5,
      component: "Radio",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Radio Buttons</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SketchRadio checked={true} readOnly />
              <span>Option One</span>
            </div>
            <div className="flex items-center gap-2">
              <SketchRadio />
              <span>Option Two</span>
            </div>
            <div className="flex items-center gap-2">
              <SketchRadio />
              <span>Option Three</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      component: "Progress",
      render: () => (
        <div className="p-4">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Progress Bars</h3>
          <div className="space-y-4">
            <div>
              <span className="block mb-2">25% Complete</span>
              <SketchProgressBar progress={25} color="#9b87f5" />
            </div>
            <div>
              <span className="block mb-2">50% Complete</span>
              <SketchProgressBar progress={50} color="#9b87f5" />
            </div>
            <div>
              <span className="block mb-2">75% Complete</span>
              <SketchProgressBar progress={75} color="#9b87f5" />
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // Colors for cards
  const colors = [
    'bg-[#9b87f5]/10',
    'bg-[#FFB6B6]/10',
    'bg-[#C1E1C5]/10',
    'bg-[#BAD7F2]/10',
    'bg-[#FFE29F]/10',
    'bg-[#FFCF8B]/10'
  ];
  
  // Function to get random elements
  const getRandomElements = () => {
    // Shuffle the array of possible elements
    const shuffled = [...possibleElements].sort(() => 0.5 - Math.random());
    
    // Take first 5 or fewer
    const selected = shuffled.slice(0, 5);
    
    // Assign random colors to each element
    return selected.map((element, index) => ({
      ...element,
      color: colors[index % colors.length]
    }));
  };
  
  // Refresh function
  const refreshElements = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setUiElements(getRandomElements());
      setIsRefreshing(false);
    }, 500);
  };
  
  // Initial load
  useEffect(() => {
    setUiElements(getRandomElements());
  }, []);

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
          
          <button 
            className={`p-2 bg-white rounded-full border-2 border-black transform rotate-1 ${isRefreshing ? 'animate-spin-once' : ''}`}
            onClick={refreshElements}
            disabled={isRefreshing}
          >
            <RefreshCw size={20} className="transform -rotate-1" />
          </button>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-[#9b87f5] text-white" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Random UI
          </h1>
          <p className="text-xl mt-4 font-comic">A showcase of UI elements in a bento-box style layout</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uiElements.map((element, index) => (
            <SketchCard 
              key={element.id} 
              className={`${element.color} transform ${index % 2 === 0 ? 'rotate-0.5' : '-rotate-0.5'} ${index === 0 ? 'md:col-span-2' : ''}`}
              style={{ backgroundColor: element.color }}
            >
              {element.render()}
            </SketchCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Random;
