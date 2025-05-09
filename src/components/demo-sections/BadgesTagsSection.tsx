
import React, { useState } from 'react';
import { SketchCard, SketchBadge, SketchTag } from '../marker';

const BadgesTagsSection: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['JavaScript', 'React']);

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  return (
    <SketchCard title="Badges & Tags" className="mb-6">
      <div className="mb-4">
        <p className="mb-2">Badges:</p>
        <div className="flex flex-wrap gap-2">
          <SketchBadge variant="default">Default</SketchBadge>
          <SketchBadge variant="primary">Primary</SketchBadge>
          <SketchBadge variant="success">Success</SketchBadge>
          <SketchBadge variant="warning">Warning</SketchBadge>
          <SketchBadge variant="danger">Danger</SketchBadge>
        </div>
      </div>
      
      <div>
        <p className="mb-2">Tags:</p>
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag, index) => (
            <SketchTag key={index} onRemove={() => removeTag(tag)}>
              {tag}
            </SketchTag>
          ))}
          <SketchTag>CSS</SketchTag>
          <SketchTag>HTML</SketchTag>
        </div>
      </div>
    </SketchCard>
  );
};

export default BadgesTagsSection;
