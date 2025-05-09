
import React from 'react';
import { SketchCard } from '../marker';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmptyStateSection: React.FC = () => {
  return (
    <SketchCard title="Empty State" className="mb-6">
      <div className="flex flex-col items-center justify-center p-6 text-center sketch-border bg-white">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 sketch-border">
          <FileQuestion size={28} className="text-gray-500" />
        </div>
        <h3 className="text-xl font-bold mb-3 sketch-heading text-black">No Items Found</h3>
        <p className="text-gray-600 mb-5 max-w-xs mx-auto text-base">
          We couldn't find any items matching your criteria. Try adjusting your search or filters.
        </p>
        <Button variant="outline" className="sketch-btn bg-blue-500 text-white px-6 py-2">Create New Item</Button>
      </div>
    </SketchCard>
  );
};

export default EmptyStateSection;
