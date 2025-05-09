
import React, { useState, useRef } from 'react';
import { FileUpload, X } from 'lucide-react';

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
        className={`sketch-file-upload-dropzone ${dragActive ? 'sketch-file-upload-active' : ''}`}
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
          className="sketch-file-upload-input"
        />
        
        <div className="sketch-file-upload-content">
          <FileUpload className="sketch-file-upload-icon" />
          <p className="sketch-file-upload-text">Drag and drop files here</p>
          <p className="sketch-file-upload-subtext">or click to browse</p>
          <button 
            type="button" 
            className="sketch-btn sketch-file-upload-button"
            onClick={handleButtonClick}
          >
            Select Files
          </button>
        </div>
      </div>
      
      {error && (
        <div className="sketch-error-banner mt-4">
          {error}
        </div>
      )}
      
      {files.length > 0 && (
        <div className="sketch-file-upload-files">
          {files.map((file, index) => (
            <div key={index} className="sketch-file-upload-file">
              <div className="sketch-file-upload-file-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="sketch-file-upload-file-info">
                <div className="sketch-file-upload-file-name">{file.name}</div>
                <div className="sketch-file-upload-file-size">{file.size}</div>
              </div>
              <button 
                className="sketch-file-upload-file-remove" 
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
