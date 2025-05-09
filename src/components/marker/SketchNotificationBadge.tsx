
import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';

type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
type BadgeColor = 'blue' | 'red' | 'green' | 'yellow' | 'orange';

interface SketchNotificationBadgeProps {
  count: number;
  maxCount?: number;
  position?: BadgePosition;
  color?: BadgeColor;
  icon?: 'bell' | 'message' | 'clock';
  className?: string;
}

const SketchNotificationBadge: React.FC<SketchNotificationBadgeProps> = ({
  count,
  maxCount = 99,
  position = 'top-right',
  color = 'blue',
  icon = 'bell',
  className = '',
}) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();
  
  const getPositionClass = () => {
    switch(position) {
      case 'top-left':
        return '-top-2 -left-2';
      case 'bottom-right':
        return '-bottom-2 -right-2';
      case 'bottom-left':
        return '-bottom-2 -left-2';
      default:
        return '-top-2 -right-2';
    }
  };
  
  const getColorClass = () => {
    switch(color) {
      case 'red':
        return 'bg-red-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'orange':
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  const renderIcon = () => {
    switch(icon) {
      case 'message':
        return <MessageSquare size={24} />;
      case 'clock':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return <Bell size={24} />;
    }
  };
  
  return (
    <div className={`sketch-notification-container relative inline-block ${className}`}>
      <div className="sketch-notification-icon w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center sketch-border">
        {renderIcon()}
      </div>
      <span className={`absolute ${getPositionClass()} ${getColorClass()} text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border border-black transform rotate-3 sketch-border font-bold`}>
        {displayCount}
      </span>
    </div>
  );
};

export default SketchNotificationBadge;
