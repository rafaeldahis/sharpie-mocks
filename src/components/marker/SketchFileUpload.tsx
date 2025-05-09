
import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileItem {
  name: string;
  size: string;
  type: string;
}

interface SketchFileUploadProps {
  onFileChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  className?: string;
}

const SketchFileUpload: React.FC<SketchFileUploadProps> = ({
  onFileChange,
  accept = '*',
  multiple = false,
  maxSize = 10, // 10MB default limit
  className = '',
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    setError(null);
    const newFiles: File[] = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File '${file.name}' exceeds the ${maxSize}MB limit.`);
        continue;
      }
      
      newFiles.push(file);
    }
    
    if (newFiles.length > 0) {
      const fileItems: FileItem[] = newFiles.map(file => ({
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type
      }));
      
      setFiles(prev => multiple ? [...prev, ...fileItems] : fileItems);
      
      if (onFileChange) {
        onFileChange(newFiles);
      }
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={`sketch-file-upload-container ${className}`}>
      <div 
        className={`sketch-file-upload-dropzone p-6 border-2 border-dashed rounded-md ${dragActive ? 'bg-blue-50 border-blue-400' : 'border-gray-300'} text-center`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          ref={inputRef}
          type="file" 
          accept={accept}
          onChange={handleChange}
          multiple={multiple}
          className="sketch-file-upload-input hidden"
        />
        
        <div className="sketch-file-upload-content py-6">
          <Upload className="sketch-file-upload-icon w-12 h-12 mx-auto text-gray-400 mb-3" />
          <p className="sketch-file-upload-text font-medium text-gray-700 mb-1">Drag and drop files here</p>
          <p className="sketch-file-upload-subtext text-sm text-gray-500 mb-4">or click to browse</p>
          <button 
            type="button" 
            className="sketch-btn bg-blue-500 text-white px-6 py-2 rounded-md transform rotate-0.5"
            onClick={handleButtonClick}
          >
            Select Files
          </button>
        </div>
      </div>
      
      {error && (
        <div className="sketch-error-banner mt-4 bg-red-50 text-red-700 p-3 rounded-md">
          {error}
        </div>
      )}
      
      {files.length > 0 && (
        <div className="sketch-file-upload-files mt-4 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="sketch-file-upload-file flex items-center p-2 border sketch-border rounded-md bg-gray-50 transform rotate-0.5">
              <div className="sketch-file-upload-file-icon mr-3 text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="sketch-file-upload-file-info flex-grow">
                <div className="sketch-file-upload-file-name font-medium text-gray-700">{file.name}</div>
                <div className="sketch-file-upload-file-size text-xs text-gray-500">{file.size}</div>
              </div>
              <button 
                className="sketch-btn-icon w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-red-500 transform rotate-1" 
                onClick={() => removeFile(index)}
                aria-label="Remove file"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SketchFileUpload;
