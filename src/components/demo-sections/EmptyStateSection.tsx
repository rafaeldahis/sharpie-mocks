
import React from 'react';
import { SketchCard } from '../marker';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmptyStateSection: React.FC = () => {
  return (
    <SketchCard title="Empty State" className="mb-6">
      <div className="flex flex-col items-center justify-center p-6 text-center sketch-border border rounded-md">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <FileQuestion size={24} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-medium mb-2">No Items Found</h3>
        <p className="text-gray-500 mb-4 text-sm">
          We couldn't find any items matching your criteria. Try adjusting your search or filters.
        </p>
        <Button variant="outline" className="sketch-btn">Create New Item</Button>
      </div>
    </SketchCard>
  );
};

export default EmptyStateSection;
