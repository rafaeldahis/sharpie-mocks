
import React from "react";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-[#FFFF00] text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
          Sharpie Mocks
        </h1>
        <p className="text-xl mt-4 font-comic">A complete sketch-style design system to communicate product ideas</p>
        
        <div className="flex items-center justify-center gap-2 mt-4 font-comic">
          <a 
            href="https://github.com/rafaeldahis/sharpie-mocks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-1">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            /sharpie-mocks
          </a>
          <span className="text-gray-600 mx-1">by</span>
          <a 
            href="https://x.com/rafaeldahis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-1">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
            @rafaeldahis
          </a>
        </div>
      </div>
      
      {/* AI Prototyping Instructions */}
      <div className="mb-12 p-6 relative bg-[#F6F6F7]" style={{
        border: 'none',
        boxShadow: 'none',
        borderRadius: '8px',
      }}>
        <div className="absolute inset-0 -z-10" style={{
          border: '2.5px solid black',
          borderRadius: '8px',
          transform: 'rotate(-0.7deg)',
          background: '#F6F6F7',
          boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
          clipPath: "polygon(1% 5%, 3% 1%, 7% 3%, 15% 0%, 25% 2%, 35% 1%, 45% 0%, 55% 2%, 65% 3%, 75% 1%, 85% 2%, 95% 1%, 99% 4%, 98% 15%, 100% 25%, 99% 35%, 100% 45%, 99% 55%, 98% 65%, 100% 75%, 98% 85%, 99% 95%, 95% 97%, 85% 99%, 75% 98%, 65% 100%, 55% 99%, 45% 100%, 35% 98%, 25% 99%, 15% 97%, 5% 98%, 1% 95%)",
        }}></div>
        
        <h2 className="text-2xl font-bold marker-heading mb-4">Using with AI Prototyping Tools</h2>
        <div className="space-y-4">
          <p className="marker-text">
            To add these sketch-style elements to your project in any AI prototyping tool:
          </p>
          <div className="space-y-4 marker-text">
            <div className="p-3 bg-white rounded-md border border-gray-200 transform rotate-0.4deg">
              <p className="font-bold">Copy the CSS styles:</p>
              <ol className="list-decimal pl-6 mt-2">
                <li>Ask your AI tool to "Copy the CSS styles for marker/sketch styles from this page"</li>
                <li>Then say: "Apply these sketch styles to my UI components"</li>
                <li>Or try: "Create a hand-drawn version of my interface using these sketch styles"</li>
              </ol>
            </div>
            
            <div className="p-3 bg-white rounded-md border border-gray-200 mt-2 transform -rotate-0.5deg">
              <p className="font-bold">Quick implementation:</p>
              <p className="mt-2 italic">"Add these marker-style CSS classes to my project and create a hand-drawn sketch interface with wobbly borders and Comic Sans font"</p>
            </div>
          </div>
        </div>
      </div>
      
      <MarkerStyleDemo />
    </div>
  );
};

export default Index;
