
import React, { useState } from 'react';
import { SketchCard, SketchSocialCard } from '../marker';
import { Share } from 'lucide-react';

interface SocialMediaSectionProps {
  renderStars: (count: number) => JSX.Element[];
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ renderStars }) => {
  const [rating, setRating] = useState(0);

  return (
    <SketchCard title="Social Media" className="mb-6">
      <div className="space-y-8">
        {/* Post Card */}
        <div>
          <p className="mb-4">Interactive social media post card:</p>
          <SketchSocialCard 
            avatar="JD"
            name="John Doodle"
            time="Posted 2 hours ago"
            content="Just finished my latest sketch! What do you think of these wobbly marker-style UI elements?"
            initialLikes={12}
            initialComments={3}
          />
        </div>
        
        {/* Social Share Buttons */}
        <div>
          <p className="mb-4">Share buttons for social media:</p>
          <div className="flex flex-wrap gap-3">
            <button className="sketch-social-share-button twitter sketch-border bg-[#1DA1F2] text-white py-1 px-3 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span>Twitter</span>
            </button>
            
            <button className="sketch-social-share-button facebook sketch-border bg-[#4267B2] text-white py-1 px-3 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Facebook</span>
            </button>
            
            <button className="sketch-social-share-button linkedin sketch-border bg-[#0A66C2] text-white py-1 px-3 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </button>
            
            <button className="sketch-social-share-button pinterest sketch-border bg-[#E60023] text-white py-1 px-3 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M20.8 8.4a9 9 0 1 0-8.8 13.6c.6 0 1.3-.1 1.8-.2"></path>
                <path d="M8.6 13.5c3 4.6 6.8 7 11.4 7"></path>
              </svg>
              <span>Pinterest</span>
            </button>
            
            <button className="sketch-social-share-button share sketch-border bg-gray-600 text-white py-1 px-3 rounded flex items-center space-x-2">
              <Share size={18} />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
        
        {/* Reviews Unit */}
        <div>
          <p className="mb-4">Reviews rating component:</p>
          <div className="sketch-review-card p-4 border sketch-border rounded-md bg-white transform -rotate-0.5">
            <div className="sketch-review-header">
              <h4 className="font-bold text-lg mb-3">Rate this product</h4>
            </div>
            <div className="sketch-review-stars flex space-x-1">
              {renderStars(rating)}
            </div>
            <div className="sketch-review-label mt-2 text-gray-600">
              {rating === 0 ? "Click to rate" : `You rated this ${rating} star${rating !== 1 ? 's' : ''}`}
            </div>
            {rating > 0 && (
              <div className="mt-4">
                <textarea 
                  className="w-full p-3 border rounded sketch-border"
                  placeholder="Share your thoughts about this product..."
                  rows={3}
                ></textarea>
                <button className="sketch-btn bg-blue-500 sketch-btn text-white w-full mt-3 py-2">
                  Submit Review
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default SocialMediaSection;
