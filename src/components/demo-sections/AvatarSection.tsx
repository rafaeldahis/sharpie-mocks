
import React from 'react';
import { SketchCard } from '../marker';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AvatarSection: React.FC = () => {
  return (
    <SketchCard title="Avatar & Avatar Group" className="mb-6">
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
    </SketchCard>
  );
};

export default AvatarSection;
