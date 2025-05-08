
import React, { useState, useRef, useEffect } from 'react';

interface SketchTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

const SketchTooltip: React.FC<SketchTooltipProps> = ({
  content,
  children,
  position = 'top',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const calculatePosition = () => {
    if (!childRef.current || !tooltipRef.current) return;
    
    const childRect = childRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    switch (position) {
      case 'top':
        top = -tooltipRect.height - 8;
        left = (childRect.width - tooltipRect.width) / 2;
        break;
      case 'right':
        top = (childRect.height - tooltipRect.height) / 2;
        left = childRect.width + 8;
        break;
      case 'bottom':
        top = childRect.height + 8;
        left = (childRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = (childRect.height - tooltipRect.height) / 2;
        left = -tooltipRect.width - 8;
        break;
    }
    
    setCoords({ top, left });
  };
  
  const showTooltip = () => {
    setIsVisible(true);
  };
  
  const hideTooltip = () => {
    setIsVisible(false);
  };
  
  useEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, position]);

  return (
    <div 
      className={`sketch-tooltip-container ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      ref={childRef}
    >
      {children}
      
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={`sketch-tooltip sketch-tooltip-${position}`}
          style={{ 
            top: coords.top, 
            left: coords.left,
          }}
        >
          <div className="sketch-tooltip-content">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default SketchTooltip;
