
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchInput } from "@/components/marker";

const DoodleLaunch = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="p-4 flex items-center justify-between">
        <Link 
          to="/showcase" 
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
        >
          <ArrowLeft size={20} className="transform rotate-1" />
          Back to Showcase
        </Link>

        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
          DoodleLaunch
        </h1>

        <button className="p-2 bg-white rounded-full border-2 border-black transform rotate-1">
          <Menu size={20} className="transform -rotate-1" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto text-center px-4">
          <div className="mb-8 inline-block transform -rotate-1">
            <h2 className="text-4xl md:text-6xl font-bold sketch-border bg-[#C1E1C5] text-black px-6 py-3" style={{ fontFamily: "'Shantell Sans', cursive" }}>
              Launch Your Ideas
            </h2>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            A creative platform for designers who embrace the beauty of imperfection
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SketchButton className="bg-[#C1E1C5] text-black transform rotate-1 px-8 py-3 text-lg">
              Get Started
            </SketchButton>
            <SketchButton className="bg-white text-black border-2 border-black transform -rotate-0.5 px-8 py-3 text-lg">
              Learn More
            </SketchButton>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Features that inspire creativity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SketchCard className="transform rotate-0.5 bg-[#C1E1C5]/10 h-full">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>Sketch & Ideate</h3>
                <p>Turn rough ideas into wireframes and prototypes with our sketching tools</p>
              </div>
            </SketchCard>
            
            <SketchCard className="transform -rotate-0.5 bg-[#C1E1C5]/10 h-full">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>Collaborate</h3>
                <p>Work together with your team in real-time, adding notes and feedback</p>
              </div>
            </SketchCard>
            
            <SketchCard className="transform rotate-0.3 bg-[#C1E1C5]/10 h-full">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>Export & Share</h3>
                <p>Export your designs in multiple formats or share them directly with clients</p>
              </div>
            </SketchCard>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <SketchCard className="transform -rotate-0.5 max-w-3xl mx-auto bg-[#C1E1C5]/10">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                Ready to bring your ideas to life?
              </h2>
              <p className="mb-6 text-lg">
                Join our community of creative minds and start building with DoodleLaunch today.
              </p>
              <div className="flex flex-wrap gap-4">
                <SketchInput 
                  placeholder="Your email address" 
                  className="flex-1 min-w-[200px]"
                />
                <SketchButton className="bg-[#C1E1C5] text-black transform rotate-0.5">
                  Get Early Access <ChevronRight size={16} className="ml-1" />
                </SketchButton>
              </div>
            </div>
          </SketchCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <SketchCard className="transform rotate-0.3 mb-4 bg-[#C1E1C5]/10">
              <div className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="font-bold">How does the sketching tool work?</h3>
                <ChevronDown size={20} />
              </div>
            </SketchCard>
            
            <SketchCard className="transform -rotate-0.5 mb-4 bg-[#C1E1C5]/10">
              <div className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="font-bold">Can I collaborate with my team?</h3>
                <ChevronDown size={20} />
              </div>
            </SketchCard>
            
            <SketchCard className="transform rotate-0.2 mb-4 bg-[#C1E1C5]/10">
              <div className="p-4 flex justify-between items-center cursor-pointer">
                <h3 className="font-bold">What export formats are supported?</h3>
                <ChevronDown size={20} />
              </div>
            </SketchCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                DoodleLaunch
              </h2>
              <p className="text-sm">© 2025 All rights reserved</p>
            </div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-600 hover:text-blue-800 sketch-underline">Terms</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 sketch-underline">Privacy</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 sketch-underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoodleLaunch;
