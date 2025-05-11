
import React from 'react';
import { SketchCard, SketchNotificationBadge } from '../marker';
import { Bell, MessageSquare, Clock } from 'lucide-react';

const NotificationBadgesSection: React.FC = () => {
  return (
    <SketchCard title="Notification Badges" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Notification badges for different elements:</p>
        <div className="flex justify-center space-x-12 py-4">
          <SketchNotificationBadge 
            count={3} 
            icon="bell" 
            color="blue"
            className="transform rotate-1"
          />
          <SketchNotificationBadge 
            count={12} 
            icon="message" 
            color="red"
            className="transform -rotate-0.5"
          />
          <SketchNotificationBadge 
            count={5} 
            icon="clock" 
            color="yellow"
            className="transform rotate-0.5"
          />
        </div>
      </div>
    </SketchCard>
  );
};

export default NotificationBadgesSection;
