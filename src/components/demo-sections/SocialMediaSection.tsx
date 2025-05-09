
import React, { useState } from 'react';
import { SketchCard, SketchSocialCard } from '../marker';
import { Heart, MessageCircle, Share } from 'lucide-react';

interface SocialMediaSectionProps {
  renderStars: (count: number) => React.ReactNode;
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
              {renderStars(4)}
            </div>
            <div className="sketch-review-label">Your rating: 4/5 stars</div>
          </div>
        </div>
        
        {/* Social card */}
        <div className="sketch-border bg-white p-4 transform -rotate-0.5">
          <SketchSocialCard 
            avatar="JD"
            name="John Doe"
            time="5 hours ago"
            content="Just launched my new design portfolio using the sketchy UI kit! Check it out and let me know what you think."
            initialLikes={likeCount}
            initialComments={8}
            className=""
          />
        </div>
      </div>
    </SketchCard>
  );
};

export default SocialMediaSection;
