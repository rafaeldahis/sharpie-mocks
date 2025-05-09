
import React from 'react';
import { SketchCard, SketchTable } from '../marker';

interface TableSectionProps {
  tableHeaders: string[];
  tableRows: any[][];
}

const TableSection: React.FC<TableSectionProps> = ({ tableHeaders, tableRows }) => {
  return (
    <SketchCard title="Table" className="mb-6">
      <SketchTable headers={tableHeaders} rows={tableRows} />
    </SketchCard>
  );
};

export default TableSection;
