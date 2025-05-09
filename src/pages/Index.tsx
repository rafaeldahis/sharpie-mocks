
import React from "react";
import MarkerStyleDemo from "@/components/MarkerStyleDemo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
              <p className="font-bold">Using the CSS styles:</p>
              <p className="pl-6 mt-2">
                Simply tell your AI tool: "Apply the sketch CSS styles from <span className="font-medium text-blue-600">github.com/rafaeldahis/sharpie-mocks</span> to my UI components"
              </p>
            </div>
            
            <div className="p-3 bg-white rounded-md border border-gray-200 mt-2 transform -rotate-0.5deg">
              <p className="font-bold">Quick implementation examples:</p>
              <div className="mt-2">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {/* B2C Example */}
                    <CarouselItem>
                      <div className="p-2 border-l-2 border-blue-400">
                        <p className="italic">"Create a hand-drawn e-commerce product page with sketch styles showing a product image, pricing, reviews, and an 'Add to Cart' button"</p>
                      </div>
                    </CarouselItem>
                    
                    {/* B2B Example */}
                    <CarouselItem>
                      <div className="p-2 border-l-2 border-green-400">
                        <p className="italic">"Design a sketch-style dashboard for a B2B analytics platform with wobbly charts, key metrics cards, and a hand-drawn navigation sidebar"</p>
                      </div>
                    </CarouselItem>
                    
                    {/* Marketplace Example */}
                    <CarouselItem>
                      <div className="p-2 border-l-2 border-purple-400">
                        <p className="italic">"Make a sketch wireframe of a marketplace app with listing cards, filters, search bar, and a map view using marker styles"</p>
                      </div>
                    </CarouselItem>
                    
                    {/* Internal Tool Example */}
                    <CarouselItem>
                      <div className="p-2 border-l-2 border-orange-400">
                        <p className="italic">"Create a hand-drawn admin panel for managing user permissions with a sketch-style table, action buttons, and filter controls"</p>
                      </div>
                    </CarouselItem>
                    
                    {/* Productivity App Example */}
                    <CarouselItem>
                      <div className="p-2 border-l-2 border-red-400">
                        <p className="italic">"Design a sketch wireframe for a task management app with a calendar view, task cards, priority indicators, and status markers"</p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 bg-white sketch-border border border-black" />
                  <CarouselNext className="absolute right-0 bg-white sketch-border border border-black" />
                </Carousel>
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
