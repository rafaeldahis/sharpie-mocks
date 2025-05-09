
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
    <div className={`sketch-social-card ${className}`}>
      <div className="sketch-social-card-header">
        <div className="sketch-social-card-avatar">
          {typeof avatar === 'string' ? (
            <div className="sketch-social-card-avatar-image">
              {avatar.length === 2 ? (
                avatar
              ) : (
                <img src={avatar} alt={`${name}'s avatar`} />
              )}
            </div>
          ) : (
            avatar
          )}
        </div>
        <div className="sketch-social-card-meta">
          <div className="sketch-social-card-name">{name}</div>
          <div className="sketch-social-card-time">{time}</div>
        </div>
      </div>
      
      <div className="sketch-social-card-content">
        {content}
      </div>
      
      <div className="sketch-social-card-actions">
        <button 
          className={`sketch-social-card-action ${liked ? 'sketch-social-card-action-active' : ''}`}
          onClick={handleLike}
        >
          <Heart size={18} />
          <span>Like{likes > 0 ? ` (${likes})` : ''}</span>
        </button>
        
        <button 
          className="sketch-social-card-action"
          onClick={handleComment}
        >
          <MessageSquare size={18} />
          <span>Comment{comments > 0 ? ` (${comments})` : ''}</span>
        </button>
        
        <button 
          className="sketch-social-card-action"
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
