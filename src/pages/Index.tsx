
import React, { useEffect, useState } from "react";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import markdownContent from "@/sharpie-mocks.md?raw";

const Index = () => {
  console.log("Index component rendering");
  
  const [currentItem, setCurrentItem] = useState(0);
  
  // Set up auto-scrolling of the carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % 5); // We have 5 examples
    }, 5000); // 5 seconds interval
    
    return () => clearInterval(intervalId);
  }, []);

  const examples = [
    {
      border: "border-l-2 border-blue-400",
      text: "\"Create a hand-drawn e-commerce product page with sketch styles showing a product image, pricing, reviews, and an 'Add to Cart' button\""
    },
    {
      border: "border-l-2 border-green-400",
      text: "\"Design a sketch-style dashboard for a B2B analytics platform with wobbly charts, key metrics cards, and a hand-drawn navigation sidebar\""
    },
    {
      border: "border-l-2 border-purple-400",
      text: "\"Make a sketch wireframe of a marketplace app with listing cards, filters, search bar, and a map view using marker styles\""
    },
    {
      border: "border-l-2 border-orange-400",
      text: "\"Create a hand-drawn admin panel for managing user permissions with a sketch-style table, action buttons, and filter controls\""
    },
    {
      border: "border-l-2 border-red-400",
      text: "\"Design a sketch wireframe for a task management app with a calendar view, task cards, priority indicators, and status markers\""
    }
  ];

  const downloadMarkdown = () => {
    // Create a blob with the markdown content
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sharpie-mocks.md';
    
    // Trigger a click on the anchor to start the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "Markdown file downloaded successfully",
      duration: 2000,
    });
  };

  const downloadPNG = () => {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = '/sharpie-style-reference.png';
    a.download = 'sharpie-style-reference.png';
    
    // Trigger a click on the anchor to start the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    
    toast({
      title: "Downloaded!",
      description: "Style reference PNG downloaded successfully",
      duration: 2000,
    });
  };

  const instructionText = "Apply this design system with your AI tool to create hand-drawn UIs with wobbly elements and marker aesthetics. Make sure to use the specified fonts and styling.";

  console.log("Index component about to render JSX");

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
          <div className="space-y-4 marker-text">
            <div className="p-3 bg-white rounded-md border border-gray-200 transform rotate-0.4deg">
              <div className="flex items-center gap-2">
                <Download 
                  size={24}  
                  className="cursor-pointer text-gray-500 hover:text-blue-600" 
                  onClick={downloadMarkdown}
                  aria-label="Download markdown design system file"
                />
                <p className="text-black">
                  <span className="font-medium">1 - Download this markdown design system file and attach it to your prompt (issues? <span className="text-blue-600 cursor-pointer hover:underline" onClick={downloadPNG}>download a .png file instead</span>)</span>
                </p>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-md border border-gray-200 transform -rotate-0.5deg">
              <div className="flex items-center gap-2">
                <Download 
                  size={24}
                  className="cursor-pointer text-gray-500 hover:text-blue-600" 
                  onClick={() => {
                    // Create a blob with the instruction text
                    const blob = new Blob([instructionText], { type: 'text/plain' });
                    // Create a URL for the blob
                    const url = URL.createObjectURL(blob);
                    // Create an anchor element
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'instructions.txt';
                    // Trigger a click on the anchor to start the download
                    document.body.appendChild(a);
                    a.click();
                    // Clean up
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    toast({
                      title: "Downloaded!",
                      description: "Instructions downloaded successfully",
                      duration: 2000,
                    });
                  }}
                  aria-label="Download instruction text"
                />
                <p className="text-black">
                  <span className="font-medium">2 - Add to your prompt: "{instructionText}"</span>
                </p>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-md border border-gray-200 mt-2 transform -rotate-0.5deg">
              <p className="font-bold">Quick implementation examples:</p>
              <div className="mt-2 w-full overflow-hidden">
                <div className={`p-2 ${examples[currentItem].border} animate-fade-in`} key={currentItem}>
                  <p className="italic">{examples[currentItem].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MarkerStyleDemo />
    </div>
  );
};

export default Index;
