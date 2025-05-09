
import React from 'react';

type IconType = 'search' | 'edit' | 'delete' | 'home' | 'settings' | 'user' | 'heart' | 'check' | 'bell' | 'bookmark' | 'calendar' | 'star';

interface SketchIconographyProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

// Hand-drawn SVG paths for each icon
const iconPaths: Record<IconType, string> = {
  search: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z",
  edit: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
  delete: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z",
  home: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5 1.586V14H5a1 1 0 0 1-1-1v-5.1l4 3.893Z",
  settings: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z",
  user: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M8 9a5.006 5.006 0 0 0-5 5c0 .524.175.937.95.937h8.1c.775 0 .95-.413.95-.937a5.006 5.006 0 0 0-5-5zm-4 5c0-2.206 1.794-4 4-4s4 1.794 4 4H4z",
  heart: "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641.944-.64 2.5.025 2.151.913 3.5 3.786 5.647C6.06 12.712 7.65 13.568 8 14.3c.35-.732 1.94-1.588 3.454-3.1 2.77-2.746 3.63-4.008 3.638-6.062.002-1.072-.182-1.855-.645-2.548-1.3-1.9-3.936-1.605-5.465-.199l-.98.792Z",
  check: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z",
  // New icons
  bell: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",
  bookmark: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z",
  calendar: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z",
  star: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
};

const SketchIconography: React.FC<SketchIconographyProps> = ({
  icon,
  size = 24,
  color = 'currentColor',
  className = ''
}) => {
  // Add randomness to the path for a hand-drawn effect
  const getWobblyPath = (path: string) => {
    // Simple implementation with some random jitter
    // In a real implementation, we'd add more sophisticated wobbling
    return path.replace(/([0-9]+\.[0-9]+|[0-9]+)/g, (match) => {
      const num = parseFloat(match);
      const jitter = Math.random() * 0.2 - 0.1; // Random value between -0.1 and 0.1
      return (num + jitter).toFixed(2);
    });
  };

  // Add slight rotation for sketch effect
  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
  };

  return (
    <div 
      className={`sketch-icon ${className}`} 
      style={{ 
        width: size, 
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        fill={color}
        className="sketch-icon-svg"
        style={{ 
          transform: `rotate(${getRandomRotation()}deg)`,
          filter: 'url(#sketch-filter)'
        }}
      >
        {/* Add a subtle filter for the sketch effect */}
        <defs>
          <filter id={`sketch-filter-${icon}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
        
        {/* Use the wobbly path for the icon */}
        <path d={getWobblyPath(iconPaths[icon])} filter={`url(#sketch-filter-${icon})`} />
        
        {/* Add some random dots to make it look more hand-drawn */}
        {Array.from({ length: 3 }).map((_, i) => (
          <circle 
            key={i}
            cx={8 + Math.random() * 8 - 4}
            cy={8 + Math.random() * 8 - 4}
            r={0.5}
            fill={color}
            opacity={0.3}
          />
        ))}
        
        {/* Add some random short lines */}
        {Array.from({ length: 2 }).map((_, i) => {
          const x1 = 8 + Math.random() * 6 - 3;
          const y1 = 8 + Math.random() * 6 - 3;
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
    </div>
  );
};

export default SketchIconography;
