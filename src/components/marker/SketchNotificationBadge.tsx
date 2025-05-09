
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
        return 'sketch-notification-badge-top-left';
      case 'bottom-right':
        return 'sketch-notification-badge-bottom-right';
      case 'bottom-left':
        return 'sketch-notification-badge-bottom-left';
      default:
        return 'sketch-notification-badge-top-right';
    }
  };
  
  const getColorClass = () => {
    switch(color) {
      case 'red':
        return 'sketch-notification-badge-red';
      case 'green':
        return 'sketch-notification-badge-green';
      case 'yellow':
        return 'sketch-notification-badge-yellow';
      case 'orange':
        return 'sketch-notification-badge-orange';
      default:
        return 'sketch-notification-badge-blue';
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
    <div className={`sketch-notification-container ${className}`}>
      <div className="sketch-notification-icon">
        {renderIcon()}
      </div>
      <span className={`sketch-notification-badge ${getPositionClass()} ${getColorClass()}`}>
        {displayCount}
      </span>
    </div>
  );
};

export default SketchNotificationBadge;
