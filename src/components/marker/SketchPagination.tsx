
import React from 'react';

interface SketchPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const SketchPagination: React.FC<SketchPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className = ''
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page, current page, and last page
    // For small number of pages, show all
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // For many pages, show first, current-1, current, current+1, last
      pages.push(1);
      
      if (currentPage > 2) {
        pages.push('...');
      }
      
      if (currentPage > 1 && currentPage < totalPages) {
        pages.push(currentPage);
      }
      
      if (currentPage < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages.map((page, index) => {
      if (page === '...') {
        return (
          <span 
            key={`ellipsis-${index}`} 
            className="sketch-pagination-ellipsis px-3 py-1"
          >
            ...
          </span>
        );
      }
      
      return (
        <button
          key={page}
          onClick={() => onPageChange(page as number)}
          className={`sketch-pagination-item ${currentPage === page ? 'active' : ''}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className={`sketch-pagination ${className}`}>
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`sketch-pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
      >
        &larr; Prev
      </button>
      
      <div className="sketch-pagination-pages">
        {renderPageNumbers()}
      </div>
      
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`sketch-pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default SketchPagination;
