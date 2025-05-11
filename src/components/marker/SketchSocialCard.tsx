
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
    <div className="rounded-lg p-4 bg-white" style={{
      border: '2px solid black',
      boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.15)',
      transform: 'rotate(-0.5deg)',
      position: 'relative'
    }}>
      {/* Header with avatar and user info */}
      <div className="flex items-center mb-3">
        <div className="mr-3" style={{
          position: 'relative',
          width: '48px',
          height: '48px'
        }}>
          {typeof avatar === 'string' ? (
            avatar.length === 2 ? (
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 font-bold border-2 border-black" style={{
                transform: 'rotate(0.5deg)'
              }}>
                {avatar}
              </div>
            ) : (
              <img 
                src={avatar} 
                alt={`${name}'s avatar`} 
                className="w-12 h-12 rounded-full object-cover border-2 border-black" 
                style={{ transform: 'rotate(0.5deg)' }}
              />
            )
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-black bg-gray-200">
              {avatar}
            </div>
          )}
        </div>
        <div>
          <div className="font-bold text-lg">{name}</div>
          <div className="text-gray-500 text-sm">{time}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="my-4 py-2" style={{
        borderTop: '1px dashed #ddd',
        borderBottom: '1px dashed #ddd'
      }}>
        {content}
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center pt-1">
        <button 
          onClick={handleLike}
          className="flex items-center mr-4 focus:outline-none"
          style={{ color: liked ? '#e53e3e' : 'inherit' }}
        >
          <Heart 
            size={20} 
            className="mr-1" 
            fill={liked ? "currentColor" : "none"}
            style={{ transform: 'rotate(-1deg)' }}
          />
          <span>Like {likes > 0 ? `(${likes})` : ''}</span>
        </button>
        
        <button 
          onClick={handleComment}
          className="flex items-center mr-4 focus:outline-none"
        >
          <MessageSquare size={20} className="mr-1" style={{ transform: 'rotate(1deg)' }} />
          <span>Comment {comments > 0 ? `(${comments})` : ''}</span>
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center focus:outline-none"
        >
          <Share size={20} className="mr-1" style={{ transform: 'rotate(-0.5deg)' }} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default SketchSocialCard;
