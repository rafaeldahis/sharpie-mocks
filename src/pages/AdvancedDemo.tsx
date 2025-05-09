
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationLayout } from '@/components/advanced-demo/navigation-layout';
import { FormControls } from '@/components/advanced-demo/form-controls';
import { DataDisplay } from '@/components/advanced-demo/data-display';
import { FeedbackOverlays } from '@/components/advanced-demo/feedback-overlays';
import { MediaUtility } from '@/components/advanced-demo/media-utility';
import { MobileExtras } from '@/components/advanced-demo/mobile-extras';
import { ChevronLeft } from 'lucide-react';

const AdvancedDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto space-y-12">
        <div className="flex items-center mb-6">
          <Link to="/" className="flex items-center text-primary gap-2 mb-4 hover:underline">
            <ChevronLeft size={18} />
            <span>Back to Main Demo</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold sketch-heading sketch-underline mb-8">Advanced Component Library</h1>
        
        <NavigationLayout />
        <div className="sketch-breakline" />
        
        <FormControls />
        <div className="sketch-breakline" />
        
        <DataDisplay />
        <div className="sketch-breakline" />
        
        <FeedbackOverlays />
        <div className="sketch-breakline" />
        
        <MediaUtility />
        <div className="sketch-breakline" />
        
        <MobileExtras />
      </div>
    </div>
  );
};

export default AdvancedDemo;
