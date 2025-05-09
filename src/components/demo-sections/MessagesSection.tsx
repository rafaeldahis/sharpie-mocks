
import React from 'react';
import { SketchCard } from '../marker';

const MessagesSection: React.FC = () => {
  return (
    <SketchCard title="Error & Success Messages" className="mb-6">
      <div className="mb-4">
        <div className="sketch-error-banner mb-4">
          An error occurred! Please try again later.
        </div>
      </div>

      <div className="mb-4">
        <div className="sketch-warning-banner mb-4">
          Warning: Your session will expire in 5 minutes.
        </div>
      </div>

      <div className="mb-4">
        <div className="sketch-success-banner mb-4">
          Success! Your changes have been saved.
        </div>
      </div>

      <div className="mb-4">
        <div className="sketch-toast">
          This is a toast notification
        </div>
      </div>

      <div className="sketch-breakline"></div>
    </SketchCard>
  );
};

export default MessagesSection;
