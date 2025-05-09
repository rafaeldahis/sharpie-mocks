
import React from 'react';
import { SketchCard, SketchTestimonialCard } from '../marker';

const TestimonialSection: React.FC = () => {
  return (
    <SketchCard title="Testimonial Card" className="mb-6">
      <div className="space-y-4">
        <p>Customer testimonial card with rating:</p>
        <SketchTestimonialCard 
          quote="This sketch UI kit is amazing! It gives my projects a unique hand-drawn feel that stands out from the typical flat designs everyone is using."
          name="Jane Smith"
          role="UX Designer"
          avatar="JS"
          rating={5}
        />
      </div>
    </SketchCard>
  );
};

export default TestimonialSection;
