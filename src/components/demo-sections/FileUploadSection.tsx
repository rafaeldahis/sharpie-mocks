
import React from 'react';
import { SketchCard, SketchFileUpload } from '../marker';

const FileUploadSection: React.FC = () => {
  return (
    <SketchCard title="File Upload" className="mb-6">
      <div className="space-y-4">
        <p className="mb-4 font-medium">Drag and drop file upload:</p>
        <div className="transform rotate-0.5">
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
