
import React, { useState } from 'react';
import { SketchCard, SketchSocialCard } from '../marker';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SocialMediaSectionProps {
  renderStars?: (count: number) => React.ReactNode;
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ renderStars }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const isMobile = useIsMobile();

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <SketchCard title="Social" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium text-sm sm:text-base">Interactive social components:</p>
        
        {/* Social card */}
        <SketchSocialCard 
          avatar="JD"
          name="John Doodle"
          time="Posted 2 hours ago"
          content="Just finished my latest sketch! What do you think of these wobbly marker-style UI elements?"
          initialLikes={12}
          initialComments={3}
          className="transform -rotate-0.5"
        />
        
        {/* Avatar section (moved from AvatarSection) */}
        <div className="sketch-border bg-white p-3 sm:p-4 transform rotate-0.5">
          <h3 className="font-bold text-base sm:text-lg mb-3">Avatars</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Avatar className="sketch-border border">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="sketch-border border">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar className="sketch-border border">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <Avatar className="border-2 border-white sketch-border">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white sketch-border">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white sketch-border">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 border-2 border-white sketch-border">
                  <span className="text-xs font-medium">+3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default SocialMediaSection;
