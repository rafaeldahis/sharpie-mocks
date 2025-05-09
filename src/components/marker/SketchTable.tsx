
import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import SketchBadge from './SketchBadge';

interface TableActionButton {
  icon: 'edit' | 'delete';
  onClick: () => void;
}

interface TableRow {
  cells: React.ReactNode[];
  status?: {
    text: string;
    variant: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  };
  actions?: TableActionButton[];
}

interface SketchTableProps {
  headers: string[];
  rows: TableRow[] | any[][];
  className?: string;
  showStatus?: boolean;
  showActions?: boolean;
}

const SketchTable: React.FC<SketchTableProps> = ({ 
  headers, 
  rows, 
  className = '',
  showStatus = false,
  showActions = false
}) => {
  // Check if the rows are using the TableRow format or the simple array format
  const isStructuredFormat = rows.length > 0 && typeof rows[0] !== 'object' ? false : 
    Array.isArray(rows[0]) ? false : true;

  const renderCell = (cell: React.ReactNode) => (
    <td className="font-comic">{cell}</td>
  );

  const renderStatus = (status: { text: string; variant: string }) => (
    <td className="font-comic">
      <SketchBadge 
        variant={status.variant as any} 
        className="inline-block"
      >
        {status.text}
      </SketchBadge>
    </td>
  );

  const renderActions = (actions: TableActionButton[]) => (
    <td className="font-comic">
      <div className="flex items-center space-x-2">
        {actions.map((action, index) => (
          <button 
            key={index}
            onClick={action.onClick}
            className="sketch-btn-icon"
          >
            {action.icon === 'edit' ? 
              <Edit size={18} className="text-blue-500" /> : 
              <Trash2 size={18} className="text-red-500" />}
          </button>
        ))}
      </div>
    </td>
  );

  return (
    <table className={`sketch-table ${className}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="font-comic">
              {header}
            </th>
          ))}
          {showStatus && <th className="font-comic">Status</th>}
          {showActions && <th className="font-comic">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {isStructuredFormat ? (
          // Render structured format rows
          rows.map((row: TableRow, rowIndex) => (
            <tr key={rowIndex}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="font-comic">
                  {cell}
                </td>
              ))}
              {showStatus && row.status && renderStatus(row.status)}
              {showActions && row.actions && renderActions(row.actions)}
            </tr>
          ))
        ) : (
          // Render simple array format rows
          rows.map((row: any[], rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="font-comic">
                  {cell}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default SketchTable;
