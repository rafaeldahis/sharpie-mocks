
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
      <div className="mb-12 p-4 sketch-card bg-[#F6F6F7]">
        <h2 className="text-2xl font-bold marker-heading mb-4">Using with AI Prototyping Tools</h2>
        <div className="space-y-4">
          <p className="marker-text">
            To add these sketch-style elements to your project in any AI prototyping tool:
          </p>
          <div className="space-y-4 marker-text">
            <div className="p-3 bg-white rounded-md border border-gray-200">
              <p className="font-bold">Copy the CSS styles:</p>
              <ol className="list-decimal pl-6 mt-2">
                <li>Ask your AI tool to "Copy the CSS styles for marker/sketch styles from this page"</li>
                <li>Then say: "Apply these sketch styles to my UI components"</li>
                <li>Or try: "Create a hand-drawn version of my interface using these sketch styles"</li>
              </ol>
            </div>
            
            <div className="p-3 bg-white rounded-md border border-gray-200 mt-2">
              <p className="font-bold">Quick implementation:</p>
              <p className="mt-2 italic">"Add these marker-style CSS classes to my project and create a hand-drawn sketch interface with wobbly borders and Comic Sans font"</p>
            </div>
            
            <p className="italic mt-4">
              This design system brings a playful, hand-drawn aesthetic that makes interfaces feel more creative and approachable!
            </p>
          </div>
        </div>
      </div>
      
      <MarkerStyleDemo />
    </div>
  );
};

export default Index;
