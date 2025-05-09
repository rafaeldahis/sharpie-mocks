
import React from 'react';
import { SketchCard, SketchTable } from '../marker';

interface TableSectionProps {
  tableHeaders: string[];
  tableRows: any[][];
}

const TableSection: React.FC<TableSectionProps> = ({ tableHeaders, tableRows }) => {
  // Sample data for the enhanced table with status and actions
  const enhancedTableData = [
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
      <div className="space-y-6">
        {/* Original simple table */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Basic Table</h3>
          <SketchTable headers={tableHeaders} rows={tableRows} />
        </div>
        
        {/* Enhanced table with status and actions */}
        <div>
          <h3 className="text-lg font-medium mb-2">Enhanced Table with Status & Actions</h3>
          <SketchTable 
            headers={enhancedHeaders} 
            rows={enhancedTableData} 
            showStatus={true}
            showActions={true}
          />
        </div>
      </div>
    </SketchCard>
  );
};

export default TableSection;
