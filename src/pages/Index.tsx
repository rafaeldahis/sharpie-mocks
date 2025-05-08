
import React from "react";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-comic marker-heading font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-[#FFFF00] text-black">
          Sharpie Mocks
        </h1>
        <p className="text-xl mt-4 font-comic">A complete sketch-style design system for playful interfaces</p>
      </div>
      
      {/* AI Prototyping Instructions */}
      <div className="mb-12 p-4 sketch-card">
        <h2 className="text-2xl font-bold marker-heading mb-4">Using with AI Prototyping Tools</h2>
        <div className="space-y-4">
          <p className="marker-text">
            To use these sketch-style components with AI prototyping tools, follow these simple steps:
          </p>
          <ol className="list-decimal pl-6 space-y-2 marker-text">
            <li>Import the marker styles CSS: <code className="bg-gray-100 px-1 py-0.5">import '@/styles/marker-styles.css'</code></li>
            <li>Use the component classes with your HTML elements: <code className="bg-gray-100 px-1 py-0.5">{"<button className='sketch-btn'>Click Me</button>"}</code></li>
            <li>Or import the React components: <code className="bg-gray-100 px-1 py-0.5">import {'{ SketchButton }'} from '@/components/marker'</code></li>
            <li>Combine with Tailwind for layout and additional styling</li>
          </ol>
          <p className="marker-text mt-4">
            This design system adds a fun, hand-drawn aesthetic to your interfaces that works great with AI-generated prototypes!
          </p>
        </div>
      </div>
      
      <MarkerStyleDemo />
    </div>
  );
};

export default Index;
