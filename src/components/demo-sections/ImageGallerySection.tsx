
import React from 'react';
import { SketchCard, SketchImageGallery } from '../marker';

interface ImageGallerySectionProps {
  galleryImages: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const ImageGallerySection: React.FC<ImageGallerySectionProps> = ({ galleryImages }) => {
  // Make sure all image URLs are valid by prefixing with Unsplash base URL if needed
  const processedImages = galleryImages.map(image => {
    // If the image source doesn't start with http, add the Unsplash URL prefix
    if (!image.src.startsWith('http')) {
      return {
        ...image,
        src: `https://images.unsplash.com/${image.src}`
      };
    }
    return image;
  });

  return (
    <SketchCard title="Image Gallery" className="mb-6">
      <div className="space-y-4">
        <p>Responsive image gallery with captions:</p>
        <SketchImageGallery 
          images={processedImages}
          columns={3}
        />
      </div>
    </SketchCard>
  );
};

export default ImageGallerySection;
