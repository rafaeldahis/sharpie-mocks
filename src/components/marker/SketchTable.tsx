
import React from 'react';

interface SketchTableProps {
  headers: string[];
  rows: any[][];
  className?: string;
}

const SketchTable: React.FC<SketchTableProps> = ({ 
  headers, 
  rows, 
  className = '' 
}) => {
  return (
    <table className={`sketch-table ${className}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="font-comic">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="font-comic">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SketchTable;
