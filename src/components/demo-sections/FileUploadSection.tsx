
import React from 'react';
import { SketchCard, SketchFileUpload } from '../marker';

const FileUploadSection: React.FC = () => {
  return (
    <SketchCard title="File Upload" className="mb-6">
      <div className="space-y-4">
        <p>Drag and drop file upload:</p>
        <SketchFileUpload 
          accept=".jpg,.png,.pdf"
          multiple
          onFileChange={(files) => console.log(`Uploaded ${files.length} files`)}
        />
      </div>
    </SketchCard>
  );
};

export default FileUploadSection;
