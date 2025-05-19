import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Heart, MessageSquare, Share2, Smartphone, 
  Bookmark, Home, Search, Plus, User, Settings, ChevronRight,
  MoreHorizontal, Smile, Image, Send, Check
} from "lucide-react";
import { SketchButton, SketchCard, SketchBadge, SketchInput } from "@/components/marker";

const SketchGram = () => {
  const [liked, setLiked] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("feed");
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(prev => prev.filter(item => item !== id));
    } else {
      setLiked(prev => [...prev, id]);
    }
  };

  const toggleSave = (id: number) => {
    if (saved.includes(id)) {
      setSaved(prev => prev.filter(item => item !== id));
    } else {
      setSaved(prev => [...prev, id]);
    }
  };
  
  const toggleComments = (id: number) => {
    setShowComments(showComments === id ? null : id);
  };
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      user: "artsy_doodler",
      userFullName: "Artsy Doodler",
      verified: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop",
      caption: "Just finished this sketch during my lunch break! #creativity #art",
      likes: 124,
      comments: [
        { user: "sketch_fan", text: "Love the line work!", time: "1h" },
        { user: "creative_mind", text: "What kind of pens do you use?", time: "45m" }
      ],
      timeAgo: "2h",
      location: "Coffee Shop Studio"
    },
    {
      id: 2,
      user: "sketch_master",
      userFullName: "Sketch Master",
      verified: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop",
      caption: "Working on some new tech-inspired drawings. What do you think?",
      likes: 89,
      comments: [
        { user: "tech_art_lover", text: "So cool! The details are amazing", time: "3h" }
      ],
      timeAgo: "5h",
      location: "Digital Art Studio"
    },
    {
      id: 3,
      user: "doodle_day",
      userFullName: "Doodle Day",
      verified: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop",
      caption: "Simple lines, but there's something about them I really like.",
      likes: 256,
      comments: [
        { user: "art_critic", text: "Sometimes simplicity is the ultimate sophistication", time: "2h" },
        { user: "line_lover", text: "The composition is perfect", time: "1h" },
        { user: "casual_sketcher", text: "I wish I could draw like this!", time: "30m" }
      ],
      timeAgo: "8h",
      location: ""
    }
  ];

  // Mock stories data
  const stories = [
    { user: "You", hasNew: false, isYou: true },
    { user: "artsy", hasNew: true, isYou: false },
    { user: "doodle", hasNew: true, isYou: false },
    { user: "sketch", hasNew: true, isYou: false },
    { user: "draw", hasNew: false, isYou: false },
    { user: "creative", hasNew: true, isYou: false },
    { user: "design", hasNew: true, isYou: false },
  ];

  // Mock suggested accounts
  const suggestedAccounts = [
    { user: "art_daily", name: "Daily Art", mutualFriends: 3 },
    { user: "sketch_ideas", name: "Sketch Ideas", mutualFriends: 1 },
    { user: "doodle_pro", name: "Doodle Pro", mutualFriends: 5 }
  ];

  // Mock notifications
  const notifications = [
    { type: "like", user: "art_lover", content: "liked your post", time: "5m" },
    { type: "comment", user: "doodle_fan", content: "commented: 'This is amazing!'", time: "25m" },
    { type: "follow", user: "sketch_master", content: "started following you", time: "1h" },
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
              <div className="flex items-center">
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                  SketchGram
                </h2>
                <ChevronRight size={16} />
              </div>
              <div className="flex gap-2">
                <button className="transform hover:scale-110">
                  <Heart size={20} />
                </button>
                <button className="transform hover:scale-110">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>

            {/* Navigation tabs */}
            <div className="flex justify-around mb-4 border-b border-gray-200 pb-2">
              <button 
                className={`p-2 ${activeTab === 'feed' ? 'border-b-2 border-black' : ''}`} 
                onClick={() => setActiveTab('feed')}
              >
                <Home size={20} className={`${activeTab === 'feed' ? 'fill-black' : ''}`} />
              </button>
              <button 
                className={`p-2 ${activeTab === 'search' ? 'border-b-2 border-black' : ''}`} 
                onClick={() => setActiveTab('search')}
              >
                <Search size={20} />
              </button>
              <button 
                className={`p-2 ${activeTab === 'post' ? 'border-b-2 border-black' : ''}`} 
                onClick={() => setActiveTab('post')}
              >
                <Plus size={20} className="border-2 border-black rounded-md p-0.5" />
              </button>
              <button 
                className={`p-2 ${activeTab === 'notifications' ? 'border-b-2 border-black' : ''}`} 
                onClick={() => setActiveTab('notifications')}
              >
                <Heart size={20} />
              </button>
              <button 
                className={`p-2 ${activeTab === 'profile' ? 'border-b-2 border-black' : ''}`} 
                onClick={() => setActiveTab('profile')}
              >
                <User size={20} />
              </button>
            </div>

            {activeTab === 'feed' && (
              <>
                {/* Stories */}
                <div className="flex gap-2 overflow-x-auto py-2 mb-4 scrollbar-none">
                  {stories.map((story, i) => (
                    <div key={i} className="flex-shrink-0 text-center">
                      <div className={`w-16 h-16 rounded-full ${story.hasNew ? 'ring-2 ring-blue-500' : 'border-2 border-black'} overflow-hidden mb-1 transform`} style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
                        <div className={`w-full h-full ${story.isYou ? 'bg-gray-200' : 'bg-gray-100'} flex items-center justify-center`}>
                          {story.isYou ? "+" : i}
                        </div>
                      </div>
                      <span className="text-xs">{story.user}</span>
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
                          <div>
                            <div className="flex items-center">
                              <span className="font-bold text-sm">{post.user}</span>
                              {post.verified && (
                                <div className="ml-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                  <Check size={8} className="text-white" />
                                </div>
                              )}
                            </div>
                            {post.location && (
                              <span className="text-xs text-gray-500">{post.location}</span>
                            )}
                          </div>
                        </div>
                        <button>
                          <MoreHorizontal size={20} />
                        </button>
                      </div>

                      <div className="border-2 border-black mb-2">
                        <img 
                          src={post.image} 
                          alt={`Post by ${post.user}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <div className="flex gap-3">
                          <button onClick={() => toggleLike(post.id)} className="transform hover:scale-110">
                            <Heart 
                              size={20} 
                              className={liked.includes(post.id) ? "fill-red-500 text-red-500" : ""} 
                            />
                          </button>
                          <button onClick={() => toggleComments(post.id)} className="transform hover:scale-110">
                            <MessageSquare size={20} />
                          </button>
                          <button className="transform hover:scale-110">
                            <Share2 size={20} />
                          </button>
                        </div>
                        <button onClick={() => toggleSave(post.id)} className="transform hover:scale-110">
                          <Bookmark 
                            size={20}
                            className={saved.includes(post.id) ? "fill-black" : ""}
                          />
                        </button>
                      </div>

                      <p className="text-sm font-bold mb-1">
                        {liked.includes(post.id) ? post.likes + 1 : post.likes} likes
                      </p>

                      <p className="text-sm mb-1">
                        <span className="font-bold">{post.user}</span> {post.caption}
                      </p>
                      
                      <button 
                        className="text-xs text-gray-500 mb-2"
                        onClick={() => toggleComments(post.id)}
                      >
                        View all {post.comments.length} comments
                      </button>

                      {showComments === post.id && (
                        <div className="mb-2 space-y-1 border-t border-dashed border-gray-200 pt-2">
                          {post.comments.map((comment, i) => (
                            <div key={i} className="flex justify-between text-xs">
                              <p>
                                <span className="font-bold">{comment.user}</span> {comment.text}
                              </p>
                              <span className="text-gray-500">{comment.time}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 mb-2">
                        {post.timeAgo} ago
                      </p>

                      <div className="flex gap-2 border-t border-gray-200 pt-2">
                        <button className="transform hover:scale-110">
                          <Smile size={18} />
                        </button>
                        <SketchInput 
                          className="text-xs py-1 flex-grow text-sm"
                          placeholder="Add a comment..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button 
                          className={`text-blue-500 font-semibold text-sm ${!commentText.trim() && 'opacity-50'}`}
                          disabled={!commentText.trim()}
                        >
                          Post
                        </button>
                      </div>
                    </SketchCard>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'search' && (
              <div>
                <div className="mb-4">
                  <SketchInput
                    placeholder="Search"
                    className="w-full"
                    startIcon={<Search size={18} />}
                  />
                </div>
                
                <h3 className="font-bold mb-2">Suggested Accounts</h3>
                
                <div className="space-y-3 mb-4">
                  {suggestedAccounts.map((account, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden mr-2">
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            {account.user.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-sm">{account.user}</div>
                          <div className="text-xs text-gray-500">{account.name}</div>
                        </div>
                      </div>
                      <SketchButton className="text-xs py-1 px-3">Follow</SketchButton>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-bold mb-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["#sketch", "#doodle", "#art", "#creative", "#drawing", "#design", "#handdrawn"].map((tag, i) => (
                    <div key={i} className="inline-block">
                      <SketchBadge variant="primary" className="transform" style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
                        {tag}
                      </SketchBadge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'post' && (
              <div className="text-center py-4">
                <div className="border-2 border-dashed border-black rounded-md p-8 mb-4 flex flex-col items-center justify-center">
                  <Image size={40} className="mb-2" />
                  <p className="font-bold">Upload Sketch</p>
                  <p className="text-xs text-gray-500 mb-4">Share your doodles with the community</p>
                  <SketchButton className="transform rotate-1">
                    <Image size={16} className="mr-1" />
                    Select from gallery
                  </SketchButton>
                </div>
                <SketchInput
                  placeholder="Write a caption..."
                  className="w-full mb-4"
                />
                <SketchButton className="w-full transform -rotate-0.5" disabled>
                  <Send size={16} className="mr-1" />
                  Share Your Sketch
                </SketchButton>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-3">
                <h3 className="font-bold mb-2">Recent Activity</h3>
                {notifications.map((notification, i) => (
                  <div key={i} className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden mr-2">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        {notification.user.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm">
                        <span className="font-bold">{notification.user}</span> {notification.content}
                      </p>
                      <p className="text-xs text-gray-500">{notification.time} ago</p>
                    </div>
                    {notification.type === 'follow' && (
                      <SketchButton className="text-xs py-1 px-3 transform rotate-1">
                        Follow
                      </SketchButton>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden mr-3">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xl">
                        Y
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">your_username</h3>
                      <p className="text-xs text-gray-500">Artist | Doodler</p>
                    </div>
                  </div>
                  <button className="transform hover:scale-110">
                    <Settings size={20} />
                  </button>
                </div>

                <div className="flex justify-around mb-4 text-center text-sm">
                  <div>
                    <p className="font-bold">24</p>
                    <p className="text-xs">Posts</p>
                  </div>
                  <div>
                    <p className="font-bold">486</p>
                    <p className="text-xs">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold">120</p>
                    <p className="text-xs">Following</p>
                  </div>
                </div>

                <div className="mb-4">
                  <SketchButton className="w-full transform rotate-0.5">
                    Edit Profile
                  </SketchButton>
                </div>

                <div className="border-t-2 border-black pt-2">
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="aspect-square bg-gray-200 border border-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchGram;
