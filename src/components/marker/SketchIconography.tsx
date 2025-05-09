
import React from 'react';
import { Search, Edit, Trash2, Home, Settings, User, Heart, Check, Bell, Bookmark, Calendar, Star } from 'lucide-react';

type IconType = 'search' | 'edit' | 'delete' | 'home' | 'settings' | 'user' | 'heart' | 'check' | 'bell' | 'bookmark' | 'calendar' | 'star';

interface SketchIconographyProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

const SketchIconography: React.FC<SketchIconographyProps> = ({
  icon,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  // Generate a unique ID for the filter
  const filterId = `sketch-filter-${icon}-${Math.random().toString(36).substring(2, 9)}`;
  
  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
  };
  
  // Map icon type to Lucide React component
  const renderIcon = () => {
    switch(icon) {
      case 'search':
        return <Search size={size} color={color} />;
      case 'edit':
        return <Edit size={size} color={color} />;
      case 'delete':
        return <Trash2 size={size} color={color} />;
      case 'home':
        return <Home size={size} color={color} />;
      case 'settings':
        return <Settings size={size} color={color} />;
      case 'user':
        return <User size={size} color={color} />;
      case 'heart':
        return <Heart size={size} color={color} />;
      case 'check':
        return <Check size={size} color={color} />;
      case 'bell':
        return <Bell size={size} color={color} />;
      case 'bookmark':
        return <Bookmark size={size} color={color} />;
      case 'calendar':
        return <Calendar size={size} color={color} />;
      case 'star':
        return <Star size={size} color={color} />;
      default:
        return <div>Icon not found</div>;
    }
  };

  return (
    <div 
      className={`sketch-icon ${className}`} 
      style={{ 
        width: size, 
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        className="sketch-icon-svg absolute"
        style={{ 
          transform: `rotate(${getRandomRotation()}deg)`,
          opacity: 0.2
        }}
      >
        <defs>
          <filter id={filterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
        
        {/* Add some random dots to make it look more hand-drawn */}
        {Array.from({ length: 3 }).map((_, i) => (
          <circle 
            key={i}
            cx={12 + Math.random() * 8 - 4}
            cy={12 + Math.random() * 8 - 4}
            r={0.5}
            fill={color}
            opacity={0.3}
          />
        ))}
        
        {/* Add some random short lines */}
        {Array.from({ length: 2 }).map((_, i) => {
          const x1 = 12 + Math.random() * 6 - 3;
          const y1 = 12 + Math.random() * 6 - 3;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x1 + Math.random() * 2 - 1}
              y2={y1 + Math.random() * 2 - 1}
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        })}
      </svg>
      
      {/* Render the actual icon on top */}
      <div 
        style={{ 
          transform: `rotate(${getRandomRotation()}deg)`,
          position: 'relative',
          zIndex: 1
        }}
      >
        {renderIcon()}
      </div>
    </div>
  );
};

export default SketchIconography;
