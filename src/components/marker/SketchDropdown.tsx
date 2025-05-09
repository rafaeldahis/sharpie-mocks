
import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface SketchDropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (option: string) => void;
  className?: string;
}

const SketchDropdown: React.FC<SketchDropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div ref={dropdownRef} className={`sketch-dropdown-container ${className}`}>
      <button 
        className="sketch-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{selected || placeholder}</span>
        <ArrowDown className="sketch-dropdown-icon" />
      </button>
      
      {isOpen && (
        <div className="sketch-dropdown-menu">
          {options.map((option, index) => (
            <div 
              key={index}
              className="sketch-dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SketchDropdown;
