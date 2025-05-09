
import React from 'react';
import { SketchCard, SketchTimeline } from '../marker';

const TimelineSection: React.FC = () => {
  const timelineItems = [
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
          <SketchTimeline items={timelineItems} />
        </div>
      </div>
    </SketchCard>
  );
};

export default TimelineSection;
