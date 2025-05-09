
import React from 'react';
import { SketchCard, SketchIconography } from '../marker';

const IconographySection: React.FC = () => {
  return (
    <SketchCard title="Iconography" className="mb-6">
      <div className="space-y-4">
        <p>Hand-drawn icon set for common actions:</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          <div className="flex flex-col items-center">
            <SketchIconography icon="search" />
            <span className="text-sm mt-1">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="edit" />
            <span className="text-sm mt-1">Edit</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="delete" />
            <span className="text-sm mt-1">Delete</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="home" />
            <span className="text-sm mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="settings" />
            <span className="text-sm mt-1">Settings</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="user" />
            <span className="text-sm mt-1">User</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="heart" />
            <span className="text-sm mt-1">Favorite</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="check" />
            <span className="text-sm mt-1">Done</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="bell" />
            <span className="text-sm mt-1">Notifications</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="bookmark" />
            <span className="text-sm mt-1">Bookmark</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="calendar" />
            <span className="text-sm mt-1">Calendar</span>
          </div>
          <div className="flex flex-col items-center">
            <SketchIconography icon="star" />
            <span className="text-sm mt-1">Star</span>
          </div>
        </div>
      </div>
    </SketchCard>
  );
};

export default IconographySection;
