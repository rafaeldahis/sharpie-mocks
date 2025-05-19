
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Grid3x3, Blocks, Box, Music, ShoppingCart, Smartphone, Table, LayoutDashboard } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchBadge, SketchButton, SketchToggle, SketchProgressBar, SketchNotificationBadge } from "@/components/marker";

const Showcase = () => {
  // Mock websites data
  const mockWebsites = [
    {
      id: 1,
      name: "SharpieShop",
      description: "An e-commerce platform with a hand-drawn aesthetic for unique products",
      icon: "shopping-cart",
      link: "/mock/sharpie-shop",
      color: "bg-[#FFCF8B]"
    },
    {
      id: 2,
      name: "DoodleLaunch",
      description: "A creative landing page for a design tool that embraces imperfection",
      icon: "layout-dashboard",
      link: "/mock/doodle-launch",
      color: "bg-[#C1E1C5]"
    },
    {
      id: 3,
      name: "SketchGram",
      description: "A social media feed focused on sharing hand-drawn art and doodles",
      icon: "smartphone",
      link: "/mock/sketch-gram",
      color: "bg-[#FFB6B6]"
    },
    {
      id: 4,
      name: "ScribbleDash",
      description: "An internal tool with a sketchy interface for managing user data",
      icon: "table",
      link: "/mock/scribble-dash",
      color: "bg-[#BAD7F2]"
    },
    {
      id: 5,
      name: "DoodleTunes",
      description: "A music player with playful controls and visualizations",
      icon: "music",
      link: "/mock/doodle-tunes",
      color: "bg-[#FFE29F]"
    },
    {
      id: 6,
      name: "Random",
      description: "A showcase of UI elements in a bento-box style layout",
      icon: "blocks",
      link: "/mock/random",
      color: "bg-[#9b87f5]"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center">
        <Link 
          to="/" 
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
        >
          <ArrowLeft size={20} className="transform rotate-1" />
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-10 relative">
        {/* First banner - "Sharpie Mocks" with original style */}
        <div className="inline-block transform -rotate-2 bg-[#FFFF00] text-black px-8 py-3 border-2 border-black shadow-lg relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Sharpie Mocks
          </h1>
        </div>
        
        {/* Second banner - "Showcase" with black background and bright yellow font */}
        <div className="inline-block transform rotate-1 bg-black text-[#FFFF00] px-6 py-2 shadow-lg relative z-20 -ml-4 mt-2">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Showcase
          </h2>
        </div>
        
        <p className="text-xl mt-8 font-comic">Check out these example applications built with the Sharpie Mocks design system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWebsites.map((site) => (
          <Link 
            key={site.id}
            to={site.link}
            className="block transform transition-transform hover:-rotate-1 hover:scale-105"
          >
            {site.name === "Random" ? (
              <SketchCard className={`h-full ${site.color} border-2 border-black`}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Blocks className="mr-2 transform rotate-2" size={30} />
                    <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>{site.name}</h2>
                  </div>
                  
                  {/* Bento box grid layout */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Item 1: Progress bar */}
                    <div className="p-2 bg-white border-2 border-black rounded-md transform -rotate-1">
                      <p className="text-xs mb-1 font-bold">Progress</p>
                      <SketchProgressBar value={75} color="#FF5733" />
                    </div>
                    
                    {/* Item 2: Toggle switches */}
                    <div className="p-2 bg-white border-2 border-black rounded-md transform rotate-1">
                      <p className="text-xs mb-1 font-bold">Toggles</p>
                      <div className="flex gap-2 justify-around">
                        <SketchToggle defaultChecked={true} />
                        <SketchToggle defaultChecked={false} />
                      </div>
                    </div>
                    
                    {/* Item 3: Buttons */}
                    <div className="p-2 bg-white border-2 border-black rounded-md col-span-2 transform rotate-0.5">
                      <div className="flex gap-2 justify-center">
                        <SketchButton variant="primary" className="text-xs py-1 px-2">Click Me</SketchButton>
                        <SketchButton variant="secondary" className="text-xs py-1 px-2">Cancel</SketchButton>
                      </div>
                    </div>
                    
                    {/* Item 4: Badges */}
                    <div className="p-2 bg-white border-2 border-black rounded-md transform -rotate-0.5">
                      <div className="flex flex-wrap gap-1 justify-center">
                        <SketchBadge variant="primary">New</SketchBadge>
                        <SketchBadge variant="warning">Alert</SketchBadge>
                      </div>
                    </div>
                    
                    {/* Item 5: Notification */}
                    <div className="p-2 bg-white border-2 border-black rounded-md flex justify-center items-center transform rotate-1">
                      <div className="relative">
                        <ShoppingCart size={24} />
                        <SketchNotificationBadge count={3} position="top-right" color="red" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-3">{site.description}</p>
                  <div className="mt-auto pt-4 flex justify-end">
                    <span className="inline-block px-3 py-1 border-2 border-black bg-white rounded-md transform rotate-1 text-sm font-bold">
                      View Demo
                    </span>
                  </div>
                </div>
              </SketchCard>
            ) : (
              <SketchCard className={`h-full ${site.color} border-2 border-black`}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {site.icon === "shopping-cart" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform rotate-2">
                        <circle cx="8" cy="21" r="1"/>
                        <circle cx="19" cy="21" r="1"/>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                      </svg>
                    )}
                    {site.icon === "layout-dashboard" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform -rotate-1">
                        <rect width="7" height="9" x="3" y="3" rx="1"/>
                        <rect width="7" height="5" x="14" y="3" rx="1"/>
                        <rect width="7" height="9" x="14" y="12" rx="1"/>
                        <rect width="7" height="5" x="3" y="16" rx="1"/>
                      </svg>
                    )}
                    {site.icon === "smartphone" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform rotate-1">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                        <path d="M12 18h.01"/>
                      </svg>
                    )}
                    {site.icon === "table" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform -rotate-2">
                        <path d="M12 3v18"/>
                        <rect width="18" height="18" x="3" y="3" rx="2"/>
                        <path d="M3 9h18"/>
                        <path d="M3 15h18"/>
                      </svg>
                    )}
                    {site.icon === "music" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform rotate-2">
                        <path d="M9 18V5l12-2v13"/>
                        <circle cx="6" cy="18" r="3"/>
                        <circle cx="18" cy="16" r="3"/>
                      </svg>
                    )}
                    <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>{site.name}</h2>
                  </div>
                  <p className="text-lg">{site.description}</p>
                  <div className="mt-auto pt-4 flex justify-end">
                    <span className="inline-block px-3 py-1 border-2 border-black bg-white rounded-md transform rotate-1 text-sm font-bold">
                      View Demo
                    </span>
                  </div>
                </div>
              </SketchCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
