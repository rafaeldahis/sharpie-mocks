
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
        <p>Visualize events over time:</p>
        <SketchTimeline items={timelineItems} />
      </div>
    </SketchCard>
  );
};

export default TimelineSection;
