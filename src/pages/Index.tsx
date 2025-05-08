
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
            Generate sketch-style interfaces by using natural language prompts with AI prototyping tools:
          </p>
          <div className="space-y-4 marker-text">
            <div className="p-3 bg-white rounded-md border border-gray-200">
              <p className="font-bold">Example prompts you can use:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>"Create a playful sign-up form with hand-drawn sketch buttons and inputs"</li>
                <li>"Design a dashboard with sketch-style cards and wobbly borders"</li>
                <li>"Show me a sketch-style navigation with tabs and a hand-drawn logo"</li>
              </ul>
            </div>
            <p>To integrate the components in your code:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include styles: <code className="bg-white px-1 py-0.5">import '@/styles/marker-styles.css'</code></li>
              <li>Use utility classes: <code className="bg-white px-1 py-0.5">className="sketch-btn sketch-card marker-text"</code></li>
              <li>Or import components: <code className="bg-white px-1 py-0.5">import {'{ SketchButton, SketchCard }'} from '@/components/marker'</code></li>
            </ul>
            <p className="italic mt-2">
              This design system brings a playful, hand-drawn aesthetic that makes AI-generated interfaces feel more creative and approachable!
            </p>
          </div>
        </div>
      </div>
      
      <MarkerStyleDemo />
    </div>
  );
};

export default Index;
