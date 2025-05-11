
import React from 'react';
import { SketchCard, SketchBadge, SketchTag } from '../marker';

const BadgesTagsSection: React.FC = () => {
  return (
    <SketchCard title="Badges & Tags" className="mb-6">
      <div className="mb-6">
        <p className="mb-4 font-medium">Badges:</p>
        <div className="flex flex-wrap gap-3">
          <SketchBadge variant="default" className="transform rotate-1">Default</SketchBadge>
          <SketchBadge variant="primary" className="transform -rotate-0.5">Primary</SketchBadge>
          <SketchBadge variant="success" className="transform rotate-0.5">Success</SketchBadge>
          <SketchBadge variant="warning" className="transform -rotate-1">Warning</SketchBadge>
          <SketchBadge variant="danger" className="transform rotate-0.7">Danger</SketchBadge>
        </div>
      </div>
      
      <div>
        <p className="mb-4 font-medium">Tags:</p>
        <div className="flex flex-wrap gap-3">
          <SketchTag onRemove={() => {}} className="transform rotate-1">JavaScript</SketchTag>
          <SketchTag onRemove={() => {}} className="transform -rotate-0.5">React</SketchTag>
          <SketchTag className="transform rotate-0.5">CSS</SketchTag>
          <SketchTag className="transform -rotate-0.7">HTML</SketchTag>
        </div>
      </div>
    </SketchCard>
  );
};

export default BadgesTagsSection;
