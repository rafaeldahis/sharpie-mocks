
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, MoreHorizontal, Search, Send, User, Home, Compass, PlusSquare, Bookmark } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchInput } from "@/components/marker";

const SketchGram = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation */}
      <nav className="py-3 px-4 flex items-center justify-between border-b-2 border-black">
        <Link 
          to="/showcase" 
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
        >
          <ArrowLeft size={20} className="transform rotate-1" />
          Back
        </Link>

        <h1 className="text-3xl font-bold transform -rotate-1" style={{ fontFamily: "'Shantell Sans', cursive" }}>
          SketchGram
        </h1>

        <div className="flex items-center gap-2">
          <button className="p-1">
            <Heart size={20} className="transform rotate-1" />
          </button>
          <button className="p-1">
            <MessageCircle size={20} className="transform -rotate-1" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        {/* Stories */}
        <div className="flex overflow-x-auto gap-4 mb-6 pb-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-black p-1 flex items-center justify-center transform rotate-1">
                <div className="w-full h-full rounded-full bg-[#FFB6B6]/70 flex items-center justify-center">
                  <User size={20} />
                </div>
              </div>
              <span className="text-xs mt-1">user_{item}</span>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {/* Post 1 */}
          <SketchCard className="transform rotate-0.5 w-full max-w-lg mx-auto">
            <div className="p-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-[#FFB6B6]">
                    <User size={14} />
                  </div>
                  <span className="font-bold">artist_123</span>
                </div>
                <button>
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <div className="relative aspect-square bg-[#FFB6B6]/10 border-2 border-black mb-2 flex items-center justify-center">
                <div className="transform rotate-5 border-2 border-black p-6 bg-white">
                  <div className="w-32 h-32 border-2 border-dashed border-black rounded-full"></div>
                </div>
              </div>
              
              <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                  <button>
                    <Heart size={20} />
                  </button>
                  <button>
                    <MessageCircle size={20} />
                  </button>
                  <button>
                    <Send size={20} />
                  </button>
                </div>
                <button>
                  <Bookmark size={20} />
                </button>
              </div>
              
              <div>
                <p className="text-sm font-bold">124 likes</p>
                <p className="text-sm"><span className="font-bold">artist_123</span> My latest doodle experiment #art #sketch</p>
                <p className="text-xs text-gray-500 mt-1">View all 12 comments</p>
                <p className="text-xs text-gray-500 mt-1">2 HOURS AGO</p>
              </div>
            </div>
          </SketchCard>
          
          {/* Post 2 */}
          <SketchCard className="transform -rotate-0.5 w-full max-w-lg mx-auto">
            <div className="p-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-[#FFB6B6]">
                    <User size={14} />
                  </div>
                  <span className="font-bold">sketchmaster</span>
                </div>
                <button>
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <div className="relative aspect-square bg-[#FFB6B6]/10 border-2 border-black mb-2 flex items-center justify-center">
                <div className="transform -rotate-3 border-2 border-black p-4 bg-white">
                  <div className="w-32 h-32 border-2 border-black">
                    <div className="w-full h-full p-2">
                      <div className="w-full h-full border-2 border-dashed border-black"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                  <button>
                    <Heart size={20} className="fill-red-500 text-red-500" />
                  </button>
                  <button>
                    <MessageCircle size={20} />
                  </button>
                  <button>
                    <Send size={20} />
                  </button>
                </div>
                <button>
                  <Bookmark size={20} />
                </button>
              </div>
              
              <div>
                <p className="text-sm font-bold">243 likes</p>
                <p className="text-sm"><span className="font-bold">sketchmaster</span> Playing with shapes and lines #minimalist #design</p>
                <p className="text-xs text-gray-500 mt-1">View all 26 comments</p>
                <p className="text-xs text-gray-500 mt-1">5 HOURS AGO</p>
              </div>
            </div>
          </SketchCard>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black py-2">
        <div className="flex justify-around">
          <button className="p-2">
            <Home size={24} className="transform rotate-1" />
          </button>
          <button className="p-2">
            <Search size={24} className="transform -rotate-1" />
          </button>
          <button className="p-2">
            <PlusSquare size={24} className="transform rotate-0.5" />
          </button>
          <button className="p-2">
            <Compass size={24} className="transform -rotate-0.5" />
          </button>
          <button className="p-2">
            <User size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SketchGram;
