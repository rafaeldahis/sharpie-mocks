
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Share2, Smartphone } from "lucide-react";
import { SketchCard, SketchInput, SketchButton } from "@/components/marker";

const SketchGram = () => {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(prev => prev.filter(item => item !== id));
    } else {
      setLiked(prev => [...prev, id]);
    }
  };
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      user: "artsy_doodler",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop",
      caption: "Just finished this sketch during my lunch break! #creativity #art",
      likes: 124,
      comments: 18,
      timeAgo: "2h"
    },
    {
      id: 2,
      user: "sketch_master",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop",
      caption: "Working on some new tech-inspired drawings. What do you think?",
      likes: 89,
      comments: 7,
      timeAgo: "5h"
    },
    {
      id: 3,
      user: "doodle_day",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop",
      caption: "Simple lines, but there's something about them I really like.",
      likes: 256,
      comments: 24,
      timeAgo: "8h"
    }
  ];

  return (
    <div className="bg-[#FFB6B6] min-h-screen p-4">
      <div className="max-w-md mx-auto">
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
          <h1 className="text-4xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            SketchGram
          </h1>
          <p className="text-lg mt-2 font-comic">A social media feed for hand-drawn art and doodles</p>
        </div>

        {/* Phone frame */}
        <div className="border-[12px] border-black rounded-[36px] bg-white relative max-w-[320px] mx-auto sketch-border transform rotate-0.5">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
          
          <div className="p-3">
            {/* App header */}
            <div className="flex justify-between items-center py-2 border-b-2 border-black mb-4">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                SketchGram
              </h2>
              <Smartphone size={24} className="transform rotate-2" />
            </div>

            {/* Stories */}
            <div className="flex gap-2 overflow-x-auto py-2 mb-4">
              {["You", "artsy", "doodle", "sketch", "draw"].map((story, i) => (
                <div key={i} className="flex-shrink-0 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden mb-1 transform" style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      {i === 0 ? "+" : i}
                    </div>
                  </div>
                  <span className="text-xs">{story}</span>
                </div>
              ))}
            </div>

            {/* Feed */}
            <div className="space-y-6 overflow-y-auto max-h-[400px] sketch-scrollbar">
              {posts.map(post => (
                <SketchCard key={post.id} className="border-2 border-black bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs">
                          {post.user.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <span className="font-bold">{post.user}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.timeAgo}</span>
                  </div>

                  <div className="border-2 border-black mb-2">
                    <img 
                      src={post.image} 
                      alt={`Post by ${post.user}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-2">
                      <button onClick={() => toggleLike(post.id)} className="transform hover:scale-110">
                        <Heart 
                          size={20} 
                          className={liked.includes(post.id) ? "fill-red-500 text-red-500" : ""} 
                        />
                      </button>
                      <button className="transform hover:scale-110">
                        <MessageCircle size={20} />
                      </button>
                      <button className="transform hover:scale-110">
                        <Share2 size={20} />
                      </button>
                    </div>
                    <span className="text-sm font-bold">{post.likes} likes</span>
                  </div>

                  <p className="text-sm mb-1">
                    <span className="font-bold">{post.user}</span> {post.caption}
                  </p>
                  
                  <p className="text-xs text-gray-500 mb-2">
                    View all {post.comments} comments
                  </p>

                  <div className="flex gap-2">
                    <SketchInput 
                      className="text-xs py-1 flex-grow"
                      placeholder="Add a comment..."
                    />
                    <SketchButton className="text-xs py-1 px-2">Post</SketchButton>
                  </div>
                </SketchCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchGram;
