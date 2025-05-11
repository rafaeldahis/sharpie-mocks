
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

interface TimelineItem {
  title: string;
  date: string;
  content: string;
  icon?: React.ReactNode;
}

interface SketchTimelineProps {
  items: TimelineItem[];
  className?: string;
}

const SketchTimeline: React.FC<SketchTimelineProps> = ({
  items,
  className = '',
}) => {
  const { isMobile, screenSize } = useIsMobile();
  
  // Determine sizes based on screen size
  const getDotSize = () => {
    if (screenSize === 'xs') return 'w-4 h-4';
    if (screenSize === 'sm') return 'w-5 h-5'; 
    return 'w-8 h-8';
  };
  
  const getDotPosition = () => {
    if (screenSize === 'xs') return 'left-2';
    if (screenSize === 'sm') return 'left-3'; 
    return 'left-4';
  };
  
  const getItemPadding = () => {
    if (screenSize === 'xs') return 'pl-5';
    if (screenSize === 'sm') return 'pl-6'; 
    return 'pl-8';
  };
  
  const getInnerDotSize = () => {
    if (screenSize === 'xs') return 'w-1 h-1';
    if (screenSize === 'sm') return 'w-1.5 h-1.5'; 
    return 'w-3 h-3';
  };
  
  return (
    <div className={`sketch-timeline-container ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`sketch-timeline-item relative ${getItemPadding()} pb-4 sm:pb-8 last:pb-0`}
        >
          {index < items.length - 1 && (
            <div className={`sketch-timeline-line absolute ${getDotPosition()} top-6 bottom-0 w-0.5 border-r border-dashed border-black -translate-x-1/2`}></div>
          )}
          
          <div className={`sketch-timeline-dot absolute ${getDotPosition()} top-0 -translate-x-1/2 ${getDotSize()} rounded-full bg-white border-2 border-black flex items-center justify-center transform rotate-1 z-10`}>
            {item.icon || <div className={`sketch-timeline-default-dot ${getInnerDotSize()} rounded-full bg-sketch-accentBlue`}></div>}
          </div>
          
          <div 
            className={`sketch-timeline-content p-1.5 xs:p-2 sm:p-4 bg-white rounded-md border-2 border-black transform ${index % 2 === 0 ? 'rotate-0.5' : '-rotate-0.5'} mb-2 sm:mb-4 relative`}
            style={{ boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="sketch-timeline-date text-gray-600 text-[10px] xs:text-xs sm:text-sm mb-0.5 sm:mb-1">{item.date}</div>
            <h3 className="sketch-timeline-title font-bold text-xs xs:text-sm sm:text-xl mb-0.5 sm:mb-1">{item.title}</h3>
            <div className="sketch-timeline-description text-[10px] xs:text-xs sm:text-base">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SketchTimeline;
