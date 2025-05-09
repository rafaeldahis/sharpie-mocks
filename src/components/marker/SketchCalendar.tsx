
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(date);
    if (onDateClick) onDateClick(date);
  };
  
  // Check if a date has events
  const hasEvents = (day: number) => {
    return events.some(event => {
      const eventDate = event.date;
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth.getMonth() &&
        eventDate.getFullYear() === currentMonth.getFullYear()
      );
    });
  };
  
  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = event.date;
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth.getMonth() &&
        eventDate.getFullYear() === currentMonth.getFullYear()
      );
    });
  };
  
  // Check if a date is selected
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };
  
  // Check if a date is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };
  
  // Generate the calendar grid
  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    // Previous month's days
    const prevMonthDays = [];
    const daysInPrevMonth = getDaysInMonth(year, month - 1);
    for (let i = daysInPrevMonth - firstDayOfMonth + 1; i <= daysInPrevMonth; i++) {
      prevMonthDays.push(
        <div key={`prev-${i}`} className="sketch-calendar-day sketch-calendar-day-outside">
          {i}
        </div>
      );
    }
    
    // Current month's days
    const currentMonthDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dayHasEvents = hasEvents(day);
      const dayIsSelected = isSelected(day);
      const dayIsToday = isToday(day);
      const dayEvents = getEventsForDay(day);
      
      currentMonthDays.push(
        <div 
          key={`current-${day}`}
          className={`
            sketch-calendar-day 
            ${dayIsToday ? 'sketch-calendar-day-today' : ''} 
            ${dayIsSelected ? 'sketch-calendar-day-selected' : ''}
            ${dayHasEvents ? 'sketch-calendar-day-has-events' : ''}
          `}
          onClick={() => handleDateClick(day)}
        >
          {day}
          {dayHasEvents && (
            <div className="sketch-calendar-day-events">
              {dayEvents.map((event, index) => (
                <div 
                  key={index}
                  className="sketch-calendar-day-event-indicator"
                  style={{ backgroundColor: event.color || '#2179FF' }}
                ></div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Next month's days
    const nextMonthDays = [];
    const totalDaysDisplayed = prevMonthDays.length + currentMonthDays.length;
    const remainingDays = 42 - totalDaysDisplayed; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      nextMonthDays.push(
        <div key={`next-${i}`} className="sketch-calendar-day sketch-calendar-day-outside">
          {i}
        </div>
      );
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
  
  const formatMonth = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };
  
  return (
    <div className={`sketch-calendar-container ${className}`}>
      <div className="sketch-calendar-header">
        <button 
          className="sketch-calendar-nav-btn sketch-calendar-prev-btn"
          onClick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <ArrowLeft size={16} />
        </button>
        <h3 className="sketch-calendar-title">{formatMonth(currentMonth)}</h3>
        <button 
          className="sketch-calendar-nav-btn sketch-calendar-next-btn"
          onClick={goToNextMonth}
          aria-label="Next month"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="sketch-calendar-weekdays">
        {daysOfWeek.map(day => (
          <div key={day} className="sketch-calendar-weekday">{day}</div>
        ))}
      </div>
      <div className="sketch-calendar-grid">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default SketchCalendar;
