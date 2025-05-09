
import React from 'react';
import { SketchCard, SketchNotificationBadge } from '../marker';

const NotificationBadgesSection: React.FC = () => {
  return (
    <SketchCard title="Notification Badges" className="mb-6">
      <div className="space-y-4">
        <p>Notification badges for different elements:</p>
        <div className="flex space-x-8 justify-center">
          <SketchNotificationBadge count={3} color="blue" />
          <SketchNotificationBadge count={12} color="red" icon="message" />
          <SketchNotificationBadge count={5} color="yellow" icon="clock" />
        </div>
      </div>
    </SketchCard>
  );
};

export default NotificationBadgesSection;
