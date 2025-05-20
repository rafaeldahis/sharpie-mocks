
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, List, Pause, Play, SkipBack, SkipForward, User, Volume2 } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchInput } from "@/components/marker";

const DoodleTunes = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const songs = [
    { id: 1, title: "Sketchy Beat", artist: "The Doodlers", duration: "3:24", active: true },
    { id: 2, title: "Pencil Melody", artist: "Draw & Listen", duration: "2:56", active: false },
    { id: 3, title: "Canvas Dreams", artist: "Art Sounds", duration: "4:12", active: false },
    { id: 4, title: "Line Rhythm", artist: "The Doodlers", duration: "3:45", active: false },
    { id: 5, title: "Marker Wave", artist: "Draw & Listen", duration: "3:02", active: false },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4">
        {/* Top Bar */}
        <div className="mb-6 flex items-center">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-[#FFE29F] text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            DoodleTunes
          </h1>
          <p className="text-xl mt-4 font-comic">A music player with playful controls and visualizations</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Player and Controls */}
          <div className="w-full md:w-2/3">
            {/* Now Playing Card */}
            <SketchCard className="mb-6 transform rotate-0.5">
              <div className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                  <div className="w-40 h-40 bg-[#FFE29F] border-2 border-black transform -rotate-1 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-black flex items-center justify-center">
                      <Music />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                      Sketchy Beat
                    </h2>
                    <p className="text-lg mb-2">The Doodlers</p>
                    <p className="text-sm text-gray-600">From the album "Hand Drawn Sounds"</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full mb-1 relative">
                    <div className="h-full bg-[#FFE29F] rounded-full w-1/3 border-r-2 border-black"></div>
                    <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>1:08</span>
                    <span>3:24</span>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex justify-center items-center gap-4">
                  <button className="p-2 transform -rotate-1">
                    <SkipBack size={24} />
                  </button>
                  <button 
                    className="w-12 h-12 bg-[#FFE29F] border-2 border-black rounded-full flex items-center justify-center transform rotate-1"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button className="p-2 transform rotate-1">
                    <SkipForward size={24} />
                  </button>
                </div>
              </div>
            </SketchCard>
            
            {/* Visualization */}
            <SketchCard className="mb-6 transform -rotate-0.5">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                  Visualization
                </h3>
                
                <div className="h-32 border-2 border-black bg-white p-2">
                  <div className="h-full flex items-end justify-around">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-[#FFE29F] border border-black"
                        style={{ height: `${Math.random() * 80 + 20}%`, transform: `rotate(${Math.random() * 2 - 1}deg)` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </SketchCard>
            
            {/* Volume and Other Controls */}
            <SketchCard className="transform rotate-0.3">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Volume2 size={20} />
                  <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                    <div className="h-full bg-[#FFE29F] rounded-full w-3/4"></div>
                    <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <SketchButton className="flex-1 transform rotate-0.5 bg-[#FFE29F] text-black">
                    Shuffle
                  </SketchButton>
                  <SketchButton className="flex-1 transform -rotate-0.5 bg-white border-2 border-black text-black">
                    Repeat
                  </SketchButton>
                  <button className="p-2 border-2 border-black rounded transform rotate-0.3">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </SketchCard>
          </div>
          
          {/* Right Side - Playlist */}
          <div className="w-full md:w-1/3">
            <SketchCard className="h-full transform -rotate-0.3">
              <div className="p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                    Playlist
                  </h3>
                  <button>
                    <List size={20} />
                  </button>
                </div>
                
                <div className="mb-4">
                  <SketchInput 
                    placeholder="Search songs..." 
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  {songs.map((song) => (
                    <div 
                      key={song.id} 
                      className={`p-3 border-2 border-black rounded transform ${song.active ? 'bg-[#FFE29F]/20 -rotate-0.5' : 'rotate-0.3 hover:bg-gray-50'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className={`font-medium ${song.active ? 'font-bold' : ''}`}>{song.title}</p>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{song.duration}</span>
                          {song.active && <Play size={16} className="text-[#FFE29F]" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SketchCard>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 pt-4 border-t-2 border-dashed border-black">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-[#FFE29F]">
                <User size={16} />
              </div>
              <p>John's Music</p>
            </div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-600 hover:text-blue-800 sketch-underline">Settings</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 sketch-underline">Help</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Music = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default DoodleTunes;
