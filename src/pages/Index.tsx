
import React from "react";
import { Link } from "react-router-dom";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-comic marker-heading font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-[#FFFF00] text-black">
          Sharpie Mocks
        </h1>
        <p className="text-xl mt-4 font-comic">A sketch-style design system for playful interfaces</p>
      </div>
      
      <MarkerStyleDemo />
      
      <div className="mt-8 text-center">
        <a 
          href="/docs/MarkerStyleGuide.md" 
          className="sketch-btn bg-sketch-accentBlue text-white font-comic inline-block"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Documentation
        </a>
      </div>
    </div>
  );
};

export default Index;
