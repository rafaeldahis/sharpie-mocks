
import React from 'react';
import { SketchCard, SketchNotificationBadge } from '../marker';
import { Bell, MessageSquare, Clock } from 'lucide-react';

const NotificationBadgesSection: React.FC = () => {
  return (
    <SketchCard title="Notification Badges" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Notification badges for different elements:</p>
        <div className="sketch-border bg-white p-4 flex space-x-8 justify-center">
          <div className="sketch-notification-container transform rotate-1">
            <div className="sketch-notification-icon">
              <Bell size={20} />
            </div>
            <span className="sketch-notification-badge sketch-notification-badge-blue sketch-notification-badge-top-right">3</span>
          </div>
          <div className="sketch-notification-container transform -rotate-0.5">
            <div className="sketch-notification-icon">
              <MessageSquare size={20} />
            </div>
            <span className="sketch-notification-badge sketch-notification-badge-red sketch-notification-badge-top-right">12</span>
          </div>
          <div className="sketch-notification-container transform rotate-0.5">
            <div className="sketch-notification-icon">
              <Clock size={20} />
            </div>
            <span className="sketch-notification-badge sketch-notification-badge-yellow sketch-notification-badge-top-right">5</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default NotificationBadgesSection;
