
import React from 'react';
import { SketchCard, SketchTimeline } from '../marker';

interface TimelineSectionProps {
  timelineItems: Array<{
    title: string;
    date: string;
    content: string;
    icon?: React.ReactNode;
  }>;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timelineItems }) => {
  return (
    <SketchCard title="Timeline" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Visualize events over time:</p>
        <div className="sketch-timeline-custom transform rotate-0.5">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="text-sm text-gray-600 mb-1">{item.date}</div>
              <h3 className="text-lg font-bold mb-1 marker-heading">{item.title}</h3>
              <div className="sketch-border bg-white p-3 transform rotate-0.5">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </SketchCard>
  );
};

export default TimelineSection;
