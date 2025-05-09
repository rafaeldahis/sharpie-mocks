
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
  return (
    <SketchCard title="Image Gallery" className="mb-6">
      <div className="space-y-4">
        <p>Responsive image gallery with captions:</p>
        <SketchImageGallery 
          images={galleryImages}
          columns={3}
        />
      </div>
    </SketchCard>
  );
};

export default ImageGallerySection;
