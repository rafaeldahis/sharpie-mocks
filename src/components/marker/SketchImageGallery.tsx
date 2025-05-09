
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
      <div className={`sketch-gallery-grid sketch-gallery-columns-${columns}`}>
        {images.map((image, index) => (
          <div key={index} className="sketch-gallery-item" onClick={() => openLightbox(index)}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="sketch-gallery-image" 
            />
            {image.caption && (
              <div className="sketch-gallery-caption">{image.caption}</div>
            )}
          </div>
        ))}
      </div>
      
      {selectedIndex !== null && (
        <div className="sketch-gallery-lightbox" onClick={closeLightbox}>
          <div className="sketch-gallery-lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="sketch-gallery-lightbox-close" 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button 
              className="sketch-gallery-lightbox-prev" 
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="sketch-gallery-lightbox-image-container">
              <img 
                src={images[selectedIndex].src} 
                alt={images[selectedIndex].alt} 
                className="sketch-gallery-lightbox-image" 
              />
              {images[selectedIndex].caption && (
                <div className="sketch-gallery-lightbox-caption">
                  {images[selectedIndex].caption}
                </div>
              )}
            </div>
            <button 
              className="sketch-gallery-lightbox-next" 
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SketchImageGallery;
