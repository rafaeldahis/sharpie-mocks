
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, LayoutDashboard } from "lucide-react";
import { SketchButton, SketchCard } from "@/components/marker";

const DoodleLaunch = () => {
  return (
    <div className="bg-[#C1E1C5] min-h-screen p-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            DoodleLaunch
          </h1>
          <p className="text-xl mt-4 font-comic">A creative landing page for a design tool that embraces imperfection</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="transform -rotate-1">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                Design with Freedom
              </h2>
              <p className="text-lg mb-4">
                DoodleLaunch is the perfect design tool for those who embrace the beauty of imperfection. Create unique, hand-drawn style designs without the constraints of perfection.
              </p>
              <p className="text-lg mb-6">
                Join thousands of designers who have freed themselves from the tyranny of straight lines and perfect circles.
              </p>
              <div className="flex gap-4 mb-6">
                <SketchButton className="transform rotate-0.5 bg-black text-white px-6 py-3">
                  Start Free Trial
                </SketchButton>
                <SketchButton variant="outline" className="transform -rotate-0.5">
                  Watch Demo
                </SketchButton>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop" 
              alt="Design Tool Interface" 
              className="sketch-border transform rotate-1"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Features that Inspire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Imperfect Lines", 
                desc: "Create beautifully imperfect designs with our hand-drawn line tools",
                icon: <LayoutDashboard size={30} className="transform rotate-2" />
              },
              { 
                title: "Sketch Library", 
                desc: "Access thousands of sketch elements for your designs",
                icon: <LayoutDashboard size={30} className="transform -rotate-1" />
              },
              { 
                title: "Collaborative", 
                desc: "Work with your team in real-time on your sketchy designs",
                icon: <LayoutDashboard size={30} className="transform rotate-1" />
              }
            ].map((feature, i) => (
              <SketchCard key={i} className="bg-white border-2 border-black">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 bg-[#C1E1C5] p-3 rounded-full sketch-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                    {feature.title}
                  </h3>
                  <p>{feature.desc}</p>
                </div>
              </SketchCard>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <SketchCard className="inline-block bg-white border-2 border-black p-6">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>
              Join Our Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="sketch-input px-4 py-2 flex-grow"
              />
              <SketchButton className="transform rotate-0.5">
                Subscribe
              </SketchButton>
            </div>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

export default DoodleLaunch;
