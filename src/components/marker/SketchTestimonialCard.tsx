
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface SketchTestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  avatar?: string | React.ReactNode;
  rating?: number;
  className?: string;
}

const SketchTestimonialCard: React.FC<SketchTestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  rating,
  className = '',
}) => {
  // Render stars based on rating
  const renderStars = () => {
    if (!rating) return null;
    
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="sketch-testimonial-star" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="star-half" className="sketch-testimonial-star" />);
    }
    
    // Add empty stars to make a total of 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`star-empty-${i}`} 
          className="sketch-testimonial-star sketch-testimonial-star-empty" 
        />
      );
    }
    
    return <div className="sketch-testimonial-rating">{stars}</div>;
  };
  
  return (
    <div className={`sketch-testimonial-card ${className}`}>
      <div className="sketch-testimonial-quote">
        <svg className="sketch-testimonial-quote-mark" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="sketch-testimonial-text">{quote}</p>
      </div>
      
      {rating !== undefined && renderStars()}
      
      <div className="sketch-testimonial-divider"></div>
      
      <div className="sketch-testimonial-author">
        {avatar && (
          <div className="sketch-testimonial-avatar">
            {typeof avatar === 'string' ? (
              avatar.length <= 2 ? (
                <div className="sketch-testimonial-avatar-initials">{avatar}</div>
              ) : (
                <img src={avatar} alt={`${name}'s avatar`} />
              )
            ) : (
              avatar
            )}
          </div>
        )}
        <div className="sketch-testimonial-info">
          <div className="sketch-testimonial-name">{name}</div>
          {role && <div className="sketch-testimonial-role">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default SketchTestimonialCard;
