
import React from 'react';

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
  return (
    <div className={`sketch-timeline-container ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="sketch-timeline-item">
          <div className="sketch-timeline-dot">
            {item.icon || <div className="sketch-timeline-default-dot"></div>}
          </div>
          <div className={`sketch-timeline-content ${index % 2 ? 'sketch-timeline-content-alt' : ''}`}>
            <div className="sketch-timeline-date">{item.date}</div>
            <h3 className="sketch-timeline-title">{item.title}</h3>
            <div className="sketch-timeline-description">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SketchTimeline;
