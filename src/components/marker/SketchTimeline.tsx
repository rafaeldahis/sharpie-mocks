
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
  const isMobile = useIsMobile();
  
  return (
    <div className={`sketch-timeline-container ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`sketch-timeline-item relative ${isMobile ? 'pl-6' : 'pl-8'} pb-8 last:pb-0`}
        >
          {index < items.length - 1 && (
            <div className={`sketch-timeline-line absolute left-3 ${isMobile ? 'left-3' : 'left-4'} top-6 bottom-0 w-0.5 border-r border-dashed border-black -translate-x-1/2`}></div>
          )}
          
          <div className={`sketch-timeline-dot absolute ${isMobile ? 'left-3' : 'left-4'} top-0 -translate-x-1/2 ${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-white border-2 border-black flex items-center justify-center transform rotate-1 z-10`}>
            {item.icon || <div className={`sketch-timeline-default-dot ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} rounded-full bg-sketch-accentBlue`}></div>}
          </div>
          
          <div 
            className={`sketch-timeline-content p-3 sm:p-4 bg-white rounded-md border-2 border-black transform ${index % 2 === 0 ? 'rotate-0.5' : '-rotate-0.5'} mb-4 relative`}
            style={{ boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="sketch-timeline-date text-gray-600 text-xs sm:text-sm mb-1">{item.date}</div>
            <h3 className="sketch-timeline-title font-bold text-base sm:text-xl mb-1">{item.title}</h3>
            <div className="sketch-timeline-description text-sm sm:text-base">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SketchTimeline;
