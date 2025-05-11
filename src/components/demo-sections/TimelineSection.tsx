
import React from 'react';
import { SketchCard, SketchTimeline } from '../marker';
import { useIsMobile } from '../../hooks/use-mobile';

interface TimelineItem {
  title: string;
  date: string;
  content: string;
  icon?: React.ReactNode;
}

interface TimelineSectionProps {
  timelineItems?: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timelineItems }) => {
  const isMobile = useIsMobile();
  
  // Use the provided timelineItems or fall back to default items
  const allItems = timelineItems || [
    {
      title: "Project Started",
      date: "January 2023",
      content: "Initial concept and planning phase began."
    },
    {
      title: "Design Phase",
      date: "March 2023",
      content: "Created wireframes and design mockups."
    },
    {
      title: "Development",
      date: "May 2023",
      content: "Started the development process with React and TypeScript."
    },
    {
      title: "Beta Testing",
      date: "August 2023",
      content: "Initial testing with beta users."
    },
    {
      title: "Launch",
      date: "October 2023",
      content: "Official product launch."
    }
  ];
  
  // Only show 3 items
  const items = allItems.slice(0, 3);

  return (
    <SketchCard title="Timeline" className="mb-6">
      <div className="space-y-4">
        <p className={`mb-4 font-medium text-sm ${isMobile ? '' : 'sm:text-base'}`}>Visualize events over time:</p>
        <div className="sketch-border bg-white p-2 sm:p-4 transform rotate-0.5 overflow-hidden rounded-md">
          <SketchTimeline items={items} className={isMobile ? "p-2" : "p-4"} />
        </div>
      </div>
    </SketchCard>
  );
};

export default TimelineSection;
