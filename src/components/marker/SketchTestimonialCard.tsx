
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
      stars.push(<Star key={`star-${i}`} className="sketch-testimonial-star" fill="#FFC107" stroke="#FFC107" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="star-half" className="sketch-testimonial-star" fill="#FFC107" stroke="#FFC107" />);
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
    
    return <div className="sketch-testimonial-rating flex space-x-1">{stars}</div>;
  };
  
  return (
    <div className={`sketch-testimonial-card sketch-border p-4 bg-white ${className} transform rotate-1 border-2 border-black`}>
      <div className="sketch-testimonial-quote mb-4">
        <svg className="sketch-testimonial-quote-mark w-8 h-8 text-gray-400 mb-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="sketch-testimonial-text text-gray-700 font-comic italic">{quote}</p>
      </div>
      
      {rating !== undefined && renderStars()}
      
      <div className="sketch-testimonial-divider h-px bg-gray-200 my-4 sketch-border"></div>
      
      <div className="sketch-testimonial-author flex items-center">
        {avatar && (
          <div className="sketch-testimonial-avatar mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 sketch-border border border-gray-300">
            {typeof avatar === 'string' ? (
              avatar.length <= 2 ? (
                <div className="sketch-testimonial-avatar-initials font-comic font-bold">{avatar}</div>
              ) : (
                <img src={avatar} alt={`${name}'s avatar`} className="rounded-full" />
              )
            ) : (
              avatar
            )}
          </div>
        )}
        <div className="sketch-testimonial-info">
          <div className="sketch-testimonial-name font-comic font-bold">{name}</div>
          {role && <div className="sketch-testimonial-role text-gray-500 text-sm">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default SketchTestimonialCard;
