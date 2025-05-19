
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Music } from "lucide-react";
import { SketchCard, SketchButton, SketchProgressBar } from "@/components/marker";

const DoodleTunes = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  // Mock playlist data
  const playlist = [
    {
      id: 1,
      title: "Sketchy Beats",
      artist: "The Doodlers",
      duration: "3:42",
      cover: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=150&auto=format&fit=crop",
      progress: 100
    },
    {
      id: 2,
      title: "Pencil Pusher",
      artist: "Draw & Play",
      duration: "2:50",
      cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&auto=format&fit=crop",
      progress: 0
    },
    {
      id: 3,
      title: "Marker Melody",
      artist: "Artful Sounds",
      duration: "4:15",
      cover: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&auto=format&fit=crop",
      progress: 0
    },
    {
      id: 4,
      title: "Hand-Drawn Harmony",
      artist: "The Illustrators",
      duration: "3:28",
      cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&auto=format&fit=crop",
      progress: 0
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const currentSong = playlist[currentSongIndex];

  return (
    <div className="bg-[#FFE29F] min-h-screen p-4">
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
            DoodleTunes
          </h1>
          <p className="text-xl mt-4 font-comic">A music player with playful controls and visualizations</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Album Art & Player Controls */}
            <div className="md:w-1/2">
              <SketchCard className="bg-white border-2 border-black">
                <div className="aspect-square relative mb-6">
                  <img 
                    src={currentSong.cover}
                    alt={`${currentSong.title} by ${currentSong.artist}`}
                    className="w-full h-full object-cover sketch-border transform rotate-0.5"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 rounded-full bg-white sketch-border flex items-center justify-center transform -rotate-3">
                      <Music size={20} />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                    {currentSong.title}
                  </h2>
                  <p className="text-gray-600">
                    {currentSong.artist}
                  </p>
                </div>

                <div className="mb-4">
                  <SketchProgressBar 
                    value={isPlaying ? 45 : (currentSong.progress || 0)}
                    className="h-3 transform -rotate-0.5"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>1:42</span>
                    <span>{currentSong.duration}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 mb-4">
                  <button className="sketch-btn-icon transform rotate-1 hover:rotate-3 hover:scale-110 transition-transform">
                    <Shuffle size={20} />
                  </button>
                  <button 
                    className="sketch-btn-icon transform -rotate-1 hover:rotate-1 hover:scale-110 transition-transform"
                    onClick={prevSong}
                  >
                    <SkipBack size={24} />
                  </button>
                  <button 
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center sketch-border transform rotate-0.5 hover:-rotate-1 hover:scale-110 transition-transform"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </button>
                  <button 
                    className="sketch-btn-icon transform rotate-1 hover:-rotate-1 hover:scale-110 transition-transform"
                    onClick={nextSong}
                  >
                    <SkipForward size={24} />
                  </button>
                  <button className="sketch-btn-icon transform -rotate-1 hover:rotate-1 hover:scale-110 transition-transform">
                    <Repeat size={20} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 size={18} />
                  <SketchProgressBar 
                    value={75}
                    className="h-2 transform rotate-0.5"
                  />
                </div>
              </SketchCard>
            </div>

            {/* Playlist */}
            <div className="md:w-1/2">
              <SketchCard className="bg-white border-2 border-black">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                  My Playlist
                </h3>
                
                <div className="space-y-3">
                  {playlist.map((song, index) => (
                    <div 
                      key={song.id}
                      className={`p-3 border-2 ${index === currentSongIndex ? 'bg-gray-100 border-black' : 'border-gray-200'} rounded-md flex items-center gap-3 cursor-pointer transform ${index === currentSongIndex ? 'rotate-0.5' : '-rotate-0.3'}`}
                      onClick={() => {
                        setCurrentSongIndex(index);
                        setIsPlaying(true);
                      }}
                    >
                      <div className="w-10 h-10 flex-shrink-0">
                        <img 
                          src={song.cover}
                          alt={song.title}
                          className="w-full h-full object-cover sketch-border"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium">{song.title}</div>
                        <div className="text-sm text-gray-600">{song.artist}</div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {song.duration}
                      </div>
                      {index === currentSongIndex && isPlaying && (
                        <div className="flex items-end h-6">
                          <div className="w-1 h-3 bg-blue-500 mx-0.5 animate-bounce"></div>
                          <div className="w-1 h-5 bg-blue-500 mx-0.5 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-2 bg-blue-500 mx-0.5 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          <div className="w-1 h-4 bg-blue-500 mx-0.5 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <SketchButton className="w-full transform rotate-0.5">
                    Add Songs
                  </SketchButton>
                </div>
              </SketchCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoodleTunes;
