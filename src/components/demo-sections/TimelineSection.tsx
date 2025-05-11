
import React from 'react';
import { SketchCard, SketchTimeline } from '../marker';

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
  // Use the provided timelineItems or fall back to default items
  const items = timelineItems || [
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

  return (
    <SketchCard title="Timeline" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Visualize events over time:</p>
        <div className="sketch-border bg-white p-4 transform rotate-0.5">
          <SketchTimeline items={items} className="p-4" />
        </div>
      </div>
    </SketchCard>
  );
};

export default TimelineSection;
