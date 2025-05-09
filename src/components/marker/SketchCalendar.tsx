
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface CalendarEvent {
  date: Date;
  title: string;
  color?: string;
}

interface SketchCalendarProps {
  events?: CalendarEvent[];
  onDateClick?: (date: Date) => void;
  className?: string;
}

const SketchCalendar: React.FC<SketchCalendarProps> = ({
  events = [],
  onDateClick,
  className = '',
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Handle date selection
  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      if (onDateClick) onDateClick(selectedDate);
    }
  };
  
  // Function to check if a date has events
  const hasEventOnDate = (day: Date) => {
    return events.some(event => 
      event.date.getDate() === day.getDate() &&
      event.date.getMonth() === day.getMonth() &&
      event.date.getFullYear() === day.getFullYear()
    );
  };

  // Function to get event colors for a specific date
  const getEventsForDay = (day: Date) => {
    return events.filter(event => 
      event.date.getDate() === day.getDate() &&
      event.date.getMonth() === day.getMonth() &&
      event.date.getFullYear() === day.getFullYear()
    );
  };
  
  // Custom day renderer to show event indicators
  const renderDay = (day: Date, selectedDate: Date, props: any) => {
    const dayEvents = getEventsForDay(day);
    const hasEvents = dayEvents.length > 0;
    
    return (
      <div
        {...props}
        className={cn(
          props.className,
          "relative",
          hasEvents && "font-medium"
        )}
      >
        {format(day, "d")}
        {hasEvents && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1">
            {dayEvents.map((event, idx) => (
              <div 
                key={idx}
                style={{ backgroundColor: event.color || '#2179FF' }}
                className="h-1.5 w-1.5 rounded-full"
                title={event.title}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`sketch-calendar-container ${className}`}>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        className={cn(
          "p-3 pointer-events-auto border-2 border-black rounded-md transform",
          "sketch-border"
        )}
        modifiersStyles={{
          selected: { backgroundColor: '#2179FF', color: 'white' },
          today: { backgroundColor: '#f0f8ff', fontWeight: 'bold' }
        }}
        components={{
          Day: ({ date: dayDate, ...props }) => renderDay(dayDate, date as Date, props)
        }}
        showOutsideDays={true}
      />
    </div>
  );
};

export default SketchCalendar;
