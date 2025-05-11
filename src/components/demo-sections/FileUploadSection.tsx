
import React from 'react';
import { SketchCard, SketchFileUpload } from '../marker';
import { useIsMobile } from '../../hooks/use-mobile';

const FileUploadSection: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <SketchCard title="File Upload" className="mb-4 sm:mb-6">
      <div className="space-y-2 xs:space-y-3 sm:space-y-4">
        <p className={`mb-2 xs:mb-3 sm:mb-4 font-medium text-xs xs:text-sm ${isMobile ? '' : 'sm:text-base'}`}>
          Drag and drop file upload:
        </p>
        <div className="sketch-border bg-white p-1 xs:p-2 sm:p-4 transform rotate-0.5">
          <SketchFileUpload 
            accept=".jpg,.png,.pdf"
            multiple
            onFileChange={(files) => console.log(`Uploaded ${files.length} files`)}
            className="sketch-border bg-white"
          />
        </div>
      </div>
    </SketchCard>
  );
};

export default FileUploadSection;
