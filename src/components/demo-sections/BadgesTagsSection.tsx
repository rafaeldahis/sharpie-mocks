
import React, { useState } from 'react';
import { SketchCard, SketchBadge, SketchTag } from '../marker';

const BadgesTagsSection: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['JavaScript', 'React']);

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  return (
    <SketchCard title="Badges & Tags" className="mb-6">
      <div className="mb-6">
        <p className="mb-4 font-medium">Badges:</p>
        <div className="sketch-border bg-white p-4 flex flex-wrap gap-3">
          <SketchBadge variant="default" className="transform rotate-1">Default</SketchBadge>
          <SketchBadge variant="primary" className="transform -rotate-0.5">Primary</SketchBadge>
          <SketchBadge variant="success" className="transform rotate-0.5">Success</SketchBadge>
          <SketchBadge variant="warning" className="transform -rotate-1">Warning</SketchBadge>
          <SketchBadge variant="danger" className="transform rotate-0.7">Danger</SketchBadge>
        </div>
      </div>
      
      <div>
        <p className="mb-4 font-medium">Tags:</p>
        <div className="sketch-border bg-white p-4 flex flex-wrap gap-3">
          {selectedTags.map((tag, index) => (
            <SketchTag key={index} onRemove={() => removeTag(tag)} className={`transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
              {tag}
            </SketchTag>
          ))}
          <SketchTag className="transform rotate-0.5">CSS</SketchTag>
          <SketchTag className="transform -rotate-0.7">HTML</SketchTag>
        </div>
      </div>
    </SketchCard>
  );
};

export default BadgesTagsSection;
