
import React, { useState } from 'react';
import { SketchCard, SketchPagination } from '../marker';

const PaginationSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <SketchCard title="Pagination Controls" className="mb-6">
      <div className="space-y-4">
        <p>Hand-drawn pagination for multi-page content:</p>
        <SketchPagination 
          totalPages={5}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </SketchCard>
  );
};

export default PaginationSection;
