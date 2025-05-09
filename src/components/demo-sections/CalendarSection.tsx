
import React from 'react';
import { SketchCard, SketchCalendar } from '../marker';

interface CalendarSectionProps {
  calendarEvents: Array<{
    date: Date;
    title: string;
    color: string;
  }>;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ calendarEvents }) => {
  return (
    <SketchCard title="Calendar" className="mb-6">
      <div className="space-y-4">
        <p>Interactive calendar with event indicators:</p>
        <SketchCalendar 
          events={calendarEvents}
          onDateClick={(date) => console.log(`Selected date: ${date.toDateString()}`)}
        />
      </div>
    </SketchCard>
  );
};

export default CalendarSection;
