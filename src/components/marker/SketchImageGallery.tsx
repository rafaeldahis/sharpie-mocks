
import React, { useState } from 'react';

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface SketchImageGalleryProps {
  images: Image[];
  columns?: number;
  className?: string;
}

const SketchImageGallery: React.FC<SketchImageGalleryProps> = ({
  images,
  columns = 3,
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };
  
  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedIndex(null);
  };
  
  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };
  
  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };
  
  return (
    <div className={`sketch-gallery-container ${className}`}>
      <div 
        className="grid gap-4" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden border-2 border-black rounded-md transform rotate-0.3deg hover:rotate-0 transition-transform cursor-pointer" 
            style={{ 
              boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)',
              aspectRatio: '4/3'
            }}
            onClick={() => !imageErrors[index] && openLightbox(index)}
          >
            {!imageErrors[index] ? (
              <>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  onError={() => handleImageError(index)}
                  className="w-full h-full object-cover"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">
                    {image.caption}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 p-4 text-center">
                <p>Image not available</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selectedIndex !== null && !imageErrors[selectedIndex] && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" 
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-md relative transform -rotate-0.8deg" 
            onClick={e => e.stopPropagation()}
            style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}
          >
            <button 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-black rounded-full text-xl z-10 transform rotate-0.8deg hover:rotate-0"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            
            <div className="p-4">
              <div className="relative h-96 border-2 border-black overflow-hidden">
                <img 
                  src={images[selectedIndex].src} 
                  alt={images[selectedIndex].alt} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {images[selectedIndex].caption && (
                <div className="text-center p-4 text-lg font-medium">
                  {images[selectedIndex].caption}
                </div>
              )}
              
              <div className="flex justify-between mt-4">
                <button 
                  className="sketch-btn transform -rotate-1"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  Previous
                </button>
                <button 
                  className="sketch-btn transform rotate-1"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SketchImageGallery;
