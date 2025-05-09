
import React from 'react';
import { SketchCard, SketchTestimonialCard } from '../marker';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      text: "This sketch UI kit is absolutely amazing! It's exactly what I needed for my project.",
      author: "Jane Cooper",
      role: "Product Designer",
      rating: 5,
      avatar: "J"
    }
  ];

  return (
    <SketchCard title="Testimonials" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">What people are saying:</p>
        <div className="sketch-border bg-white p-4 transform rotate-0.5">
          {testimonials.map((testimonial, index) => (
            <SketchTestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </SketchCard>
  );
};

export default TestimonialSection;
