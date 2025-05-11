
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
  const { isMobile, screenSize } = useIsMobile();

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  // Determine avatar sizes based on screen
  const getAvatarClasses = () => {
    const baseClasses = "sketch-border border";
    if (screenSize === 'xs') {
      return `${baseClasses} w-6 h-6`;
    }
    return baseClasses;
  };

  return (
    <SketchCard title="Social" className="mb-4 sm:mb-6">
      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        <p className={`mb-2 xs:mb-3 sm:mb-4 font-medium text-xs xs:text-sm ${isMobile ? '' : 'sm:text-base'}`}>
          Interactive social components:
        </p>
        
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
        <div className="sketch-border bg-white p-1.5 xs:p-2 sm:p-4 transform rotate-0.5">
          <h3 className="font-bold text-xs xs:text-sm sm:text-lg mb-1.5 xs:mb-2 sm:mb-3">Avatars</h3>
          
          <div className="space-y-3 xs:space-y-3 sm:space-y-4">
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <Avatar className={getAvatarClasses()}>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                <AvatarFallback className="text-[8px] xs:text-xs">JD</AvatarFallback>
              </Avatar>
              <Avatar className={getAvatarClasses()}>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                <AvatarFallback className="text-[8px] xs:text-xs">AS</AvatarFallback>
              </Avatar>
              <Avatar className={getAvatarClasses()}>
                <AvatarFallback className="text-[8px] xs:text-xs">MK</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-1 xs:-space-x-2 sm:-space-x-3">
                <Avatar className={`border-2 border-white sketch-border ${screenSize === 'xs' ? 'w-6 h-6' : ''}`}>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                  <AvatarFallback className="text-[8px] xs:text-xs">JD</AvatarFallback>
                </Avatar>
                <Avatar className={`border-2 border-white sketch-border ${screenSize === 'xs' ? 'w-6 h-6' : ''}`}>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                  <AvatarFallback className="text-[8px] xs:text-xs">AS</AvatarFallback>
                </Avatar>
                <Avatar className={`border-2 border-white sketch-border ${screenSize === 'xs' ? 'w-6 h-6' : ''}`}>
                  <AvatarFallback className="text-[8px] xs:text-xs">MK</AvatarFallback>
                </Avatar>
                <div className={`flex items-center justify-center ${screenSize === 'xs' ? 'w-6 h-6 text-[8px]' : 'w-10 h-10 text-xs'} rounded-full bg-gray-200 border-2 border-white sketch-border`}>
                  <span className="font-medium">+3</span>
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
