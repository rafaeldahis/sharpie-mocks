
import React from 'react';
import { SketchCard, SketchTable } from '../marker';
import type { TableRow } from '../marker/SketchTable';

interface TableSectionProps {
  tableHeaders: string[];
  tableRows: any[][];
}

const TableSection: React.FC<TableSectionProps> = ({ tableHeaders, tableRows }) => {
  // Sample data for the enhanced table with status and actions
  const enhancedTableData: TableRow[] = [
    {
      cells: ["John Smith", "john@example.com", "Admin"],
      status: { text: "Active", variant: "success" },
      actions: [
        { icon: "edit", onClick: () => console.log("Edit John") },
        { icon: "delete", onClick: () => console.log("Delete John") }
      ]
    },
    {
      cells: ["Sarah Johnson", "sarah.j@example.com", "Editor"],
      status: { text: "Active", variant: "success" },
      actions: [
        { icon: "edit", onClick: () => console.log("Edit Sarah") },
        { icon: "delete", onClick: () => console.log("Delete Sarah") }
      ]
    },
    {
      cells: ["Michael Brown", "michael.b@example.com", "User"],
      status: { text: "Inactive", variant: "danger" },
      actions: [
        { icon: "edit", onClick: () => console.log("Edit Michael") },
        { icon: "delete", onClick: () => console.log("Delete Michael") }
      ]
    }
  ];

  const enhancedHeaders = ["Name", "Email", "Role"];

  return (
    <SketchCard title="Table" className="mb-6">
      <SketchTable 
        headers={enhancedHeaders} 
        rows={enhancedTableData} 
        showStatus={true}
        showActions={true}
      />
    </SketchCard>
  );
};

export default TableSection;
