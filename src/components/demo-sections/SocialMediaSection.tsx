
import React, { useState } from 'react';
import { SketchCard, SketchSocialCard } from '../marker';
import { Heart, MessageCircle, Share } from 'lucide-react';

interface SocialMediaSectionProps {
  renderStars?: (count: number) => React.ReactNode;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ renderStars }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  // Default renderStars function if none is provided
  const defaultRenderStars = (count: number) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button key={star} className={`sketch-rating-star ${star <= count ? 'active' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill={star <= count ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </button>
    ));
  };

  // Use the provided renderStars or fall back to the default
  const starsRenderer = renderStars || defaultRenderStars;

  return (
    <SketchCard title="Social Media" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Interactive social components:</p>
        
        {/* Review component */}
        <div className="sketch-border bg-white p-4 mb-4 transform rotate-0.5">
          <div className="sketch-review-card">
            <div className="sketch-review-header">
              <h3 className="font-bold text-lg">Rate this product</h3>
            </div>
            <div className="sketch-review-stars mt-3 mb-3">
              {starsRenderer(4)}
            </div>
            <div className="sketch-review-label">Your rating: 4/5 stars</div>
          </div>
        </div>
        
        {/* Social card - now matching the image reference */}
        <SketchSocialCard 
          avatar="JD"
          name="John Doodle"
          time="Posted 2 hours ago"
          content="Just finished my latest sketch! What do you think of these wobbly marker-style UI elements?"
          initialLikes={12}
          initialComments={3}
          className="transform -rotate-0.5"
        />
      </div>
    </SketchCard>
  );
};

export default SocialMediaSection;
