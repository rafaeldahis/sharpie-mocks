
import React from "react";
import { Link } from "react-router-dom";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
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
