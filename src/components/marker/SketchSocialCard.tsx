
import React, { useState } from 'react';
import { Heart, MessageSquare, Share } from 'lucide-react';

interface SketchSocialCardProps {
  avatar: string | React.ReactNode;
  name: string;
  time: string;
  content: React.ReactNode;
  initialLikes?: number;
  initialComments?: number;
  className?: string;
}

const SketchSocialCard: React.FC<SketchSocialCardProps> = ({
  avatar,
  name,
  time,
  content,
  initialLikes = 0,
  initialComments = 0,
  className = '',
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(initialComments);
  
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  
  const handleComment = () => {
    // In a real implementation, this would open a comment form
    setComments(comments + 1);
  };
  
  const handleShare = () => {
    // In a real implementation, this would open share options
    console.log('Share post');
  };
  
  return (
    <div className={`sketch-social-card p-4 sketch-border border-2 border-black bg-white shadow-md transform -rotate-0.5 ${className}`}>
      <div className="sketch-social-card-header flex items-center mb-3">
        <div className="sketch-social-card-avatar w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-black mr-3 sketch-border">
          {typeof avatar === 'string' ? (
            <div className="sketch-social-card-avatar-image font-comic font-bold">
              {avatar.length === 2 ? (
                avatar
              ) : (
                <img src={avatar} alt={`${name}'s avatar`} className="rounded-full" />
              )}
            </div>
          ) : (
            avatar
          )}
        </div>
        <div className="sketch-social-card-meta">
          <div className="sketch-social-card-name font-comic font-bold">{name}</div>
          <div className="sketch-social-card-time text-sm text-gray-500">{time}</div>
        </div>
      </div>
      
      <div className="sketch-social-card-content mb-4 py-2 text-gray-700">
        {content}
      </div>
      
      <div className="sketch-social-card-actions flex border-t-2 border-black sketch-border pt-3">
        <button 
          className={`sketch-social-card-action flex items-center space-x-1 mr-4 ${liked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`}
          onClick={handleLike}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
          <span>Like{likes > 0 ? ` (${likes})` : ''}</span>
        </button>
        
        <button 
          className="sketch-social-card-action flex items-center space-x-1 mr-4 text-gray-600 hover:text-blue-500"
          onClick={handleComment}
        >
          <MessageSquare size={18} />
          <span>Comment{comments > 0 ? ` (${comments})` : ''}</span>
        </button>
        
        <button 
          className="sketch-social-card-action flex items-center space-x-1 text-gray-600 hover:text-green-500"
          onClick={handleShare}
        >
          <Share size={18} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default SketchSocialCard;
