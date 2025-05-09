
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { List, Tree, Info, ChevronDown, ChevronUp, ChevronRight, LayoutGrid, LayoutList, Menu, Sparkles, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export const DataDisplay = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [expandedNodes, setExpandedNodes] = useState<{[key: string]: boolean}>({
    'documents': true,
    'images': false,
    'downloads': false
  });
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string>('name');

  // Mock data
  const teamMembers = [
    { id: 'user1', name: 'Olivia Kim', role: 'Product Designer', src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=256&h=256&fit=crop&crop=focalpoint' },
    { id: 'user2', name: 'Alex Morgan', role: 'Developer', src: '' },
    { id: 'user3', name: 'Taylor Swift', role: 'Developer', src: '' },
    { id: 'user4', name: 'Carlos Rodriguez', role: 'Project Manager', src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=256&h=256&fit=crop&crop=focalpoint' }
  ];

  const emailItems = [
    { id: 1, from: 'Eliza Smith', subject: 'New design system feedback', excerpt: 'I checked out the sketchy components and...', time: '10:45 AM', unread: true, selected: false },
    { id: 2, from: 'Jonas Felix', subject: 'Project timeline update', excerpt: 'We need to adjust the timeline for the next...', time: '09:20 AM', unread: false, selected: false },
    { id: 3, from: 'Andrea Wong', subject: 'Quick question about the navigation', excerpt: 'I was wondering if the side navigation could...', time: 'Yesterday', unread: false, selected: false },
    { id: 4, from: 'Miguel Santos', subject: 'Design review meeting', excerpt: 'Let\'s schedule the design review for next...', time: 'Yesterday', unread: true, selected: false },
  ];

  // Tree view data structure
  const treeData = {
    name: 'Project Files',
    children: [
      {
        id: 'documents',
        name: 'Documents',
        children: [
          { id: 'doc1', name: 'Project Brief.docx' },
          { id: 'doc2', name: 'Requirements.pdf' },
          { id: 'doc3', name: 'Meeting Notes.md' },
        ]
      },
      {
        id: 'images',
        name: 'Images',
        children: [
          { id: 'img1', name: 'logo.png' },
          { id: 'img2', name: 'header.jpg' },
          { id: 'img3', name: 'icon-set.svg' },
        ]
      },
      {
        id: 'downloads',
        name: 'Downloads',
        children: [
          { id: 'dl1', name: 'report-q1.xlsx' },
          { id: 'dl2', name: 'data-backup.zip' }
        ]
      }
    ]
  };

  const chartData = [
    { month: 'Jan', users: 320, revenue: 2100, growth: 5 },
    { month: 'Feb', users: 350, revenue: 2400, growth: 8 },
    { month: 'Mar', users: 410, revenue: 2900, growth: 12 },
    { month: 'Apr', users: 490, revenue: 3200, growth: 15 },
    { month: 'May', users: 530, revenue: 3800, growth: 8 },
    { month: 'Jun', users: 590, revenue: 4100, growth: 10 },
  ];

  // Table data
  const tableData = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'James Wilson', email: 'james@example.com', role: 'Admin', status: 'Active' },
  ];

  const toggleItemSelection = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === emailItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(emailItems.map(item => item.id));
    }
  };

  const toggleNodeExpansion = (nodeId: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const handleHeaderClick = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Sort table data
  const sortedTableData = [...tableData].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  // Render tree node recursively
  const renderTreeNode = (node: any, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = node.id ? expandedNodes[node.id] : true;
    
    return (
      <div key={node.id || 'root'} style={{ marginLeft: `${level * 16}px` }}>
        <div className="flex items-center py-1">
          {hasChildren && (
            <button 
              onClick={() => node.id && toggleNodeExpansion(node.id)}
              className="mr-1 sketch-btn-icon w-5 h-5 p-0 flex items-center justify-center"
            >
              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
          )}
          {!hasChildren && <span className="w-5"></span>}
          <span className="ml-1">{node.name}</span>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="pl-2 border-l ml-2 sketch-border-muted">
            {node.children.map((child: any) => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold sketch-heading mb-6">3. Data Display</h2>
      
      {/* Avatar & Avatar Group */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Avatar & Avatar Group</h3>
        <div className="border sketch-border p-4">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Individual Avatars:</h4>
            <div className="flex gap-4">
              <div className="text-center">
                <Avatar className="sketch-border">
                  <AvatarImage src={teamMembers[0].src} alt={teamMembers[0].name} />
                  <AvatarFallback>OK</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">{teamMembers[0].name}</p>
              </div>
              
              <div className="text-center">
                <Avatar className="sketch-border">
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">{teamMembers[1].name}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Avatar Group:</h4>
            <div className="flex">
              {teamMembers.map((member, i) => (
                <Avatar
                  key={member.id}
                  className={cn("sketch-border border-2 border-white", i !== 0 && "-ml-3")}
                  style={{ zIndex: teamMembers.length - i }}
                >
                  {member.src ? (
                    <AvatarImage src={member.src} alt={member.name} />
                  ) : (
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
              ))}
              <Avatar className="sketch-border border-2 border-white -ml-3 bg-gray-200 text-gray-600">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      
      {/* Selectable List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Selectable List / Collection View</h3>
        <div className="border sketch-border">
          <div className="border-b sketch-border p-3 flex justify-between items-center">
            <div className="flex items-center">
              <input 
                type="checkbox"
                checked={selectedItems.length === emailItems.length}
                onChange={toggleSelectAll}
                className="sketch-checkbox mr-3"
              />
              <span className="font-medium">Inbox</span>
              {selectedItems.length > 0 && (
                <span className="ml-2 text-sm text-gray-500">
                  {selectedItems.length} selected
                </span>
              )}
            </div>
            <div className="flex items-center">
              <button className="sketch-btn-icon">
                <Search size={16} />
              </button>
              <button className="sketch-btn-icon ml-2">
                <Menu size={16} />
              </button>
            </div>
          </div>
          
          <div>
            {emailItems.map((email) => {
              const isSelected = selectedItems.includes(email.id);
              return (
                <div 
                  key={email.id}
                  className={cn(
                    "border-b sketch-border p-3 flex items-center gap-3 cursor-pointer",
                    isSelected ? "bg-gray-100" : "",
                    email.unread ? "font-semibold" : ""
                  )}
                  onClick={() => toggleItemSelection(email.id)}
                >
                  <input 
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleItemSelection(email.id)}
                    className="sketch-checkbox"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <span className="font-medium">{email.from}</span>
                      <span className="text-xs text-gray-500">{email.time}</span>
                    </div>
                    <div className="text-sm">{email.subject}</div>
                    <div className="text-xs text-gray-500 truncate">{email.excerpt}</div>
                  </div>
                  {email.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Tree View */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Tree-view / Nested List</h3>
        <div className="border sketch-border p-4">
          <div className="mb-2 font-medium flex items-center gap-2">
            <Tree size={16} />
            <span>Project File Structure</span>
          </div>
          <div className="p-2 border sketch-border rounded-md">
            {renderTreeNode(treeData)}
          </div>
        </div>
      </div>
      
      {/* Empty State */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Empty-state Templates</h3>
        <div className="border sketch-border p-6">
          <div className="text-center p-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Info size={24} className="text-gray-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">No projects found</h4>
            <p className="text-gray-500 mb-6">You haven't created any projects yet. Get started by creating your first project.</p>
            <button className="sketch-btn">
              Create Project
            </button>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Line, Area & Stacked-Bar Charts</h3>
        <div className="border sketch-border p-4">
          <div className="mb-6">
            <h4 className="font-medium mb-2">Monthly User Growth</h4>
            <div className="h-60 relative">
              {/* Line chart */}
              <div className="absolute inset-0">
                <div className="h-full flex items-end">
                  {chartData.map((item, i) => {
                    const height = (item.users / 600) * 100;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div className="relative w-full h-[200px] flex items-end justify-center">
                          <div 
                            className="w-1 bg-blue-500 rounded-t-sm"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2">{item.month}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Y-axis grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div key={line} className="border-b border-gray-200 h-10 relative">
                    <span className="absolute -left-6 top-0 text-xs text-gray-500">
                      {600 - line * 150}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Revenue Growth</h4>
            <div className="h-60 relative sketch-border border p-4">
              <div className="text-gray-500 text-center py-12">
                <p>A more complex chart would be rendered here.</p>
                <p className="text-sm">Consider using a proper charting library like Recharts for production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sparklines */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Sparkline / Mini-Trend Indicators</h3>
        <div className="border sketch-border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Sparkline Cards */}
            {['Users', 'Revenue', 'Growth'].map((metric, i) => (
              <div key={i} className="sketch-card p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{metric}</h4>
                  <Sparkles size={16} className="text-yellow-500" />
                </div>
                <div className="text-2xl font-bold mb-3">
                  {metric === 'Users' && '590'}
                  {metric === 'Revenue' && '$4,100'}
                  {metric === 'Growth' && '+10%'}
                </div>
                <div className="h-8 flex items-end gap-[2px]">
                  {chartData.map((item, j) => {
                    const sparkValue = metric === 'Users' ? item.users / 6 : 
                                      metric === 'Revenue' ? item.revenue / 50 : 
                                      item.growth / 0.5;
                    return (
                      <div 
                        key={j} 
                        className={`flex-1 ${metric === 'Growth' ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ height: `${sparkValue}%` }}
                      ></div>
                    );
                  })}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Last 6 months
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Data Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Enhanced Data-Grid Features</h3>
        <div className="border sketch-border">
          <div className="border-b sketch-border p-3 flex justify-between items-center">
            <h4 className="font-medium">Team Members</h4>
            <div className="flex gap-2">
              <button className="sketch-btn-icon">
                <LayoutList size={16} />
              </button>
              <button className="sketch-btn-icon">
                <LayoutGrid size={16} />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="sketch-table w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleHeaderClick('id')}>
                    <div className="flex items-center">
                      ID
                      {sortColumn === 'id' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleHeaderClick('name')}>
                    <div className="flex items-center">
                      Name
                      {sortColumn === 'name' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleHeaderClick('email')}>
                    <div className="flex items-center">
                      Email
                      {sortColumn === 'email' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleHeaderClick('role')}>
                    <div className="flex items-center">
                      Role
                      {sortColumn === 'role' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-2 cursor-pointer" onClick={() => handleHeaderClick('status')}>
                    <div className="flex items-center">
                      Status
                      {sortColumn === 'status' && (
                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedTableData.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.email}</td>
                    <td className="px-4 py-2">{row.role}</td>
                    <td className="px-4 py-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="border-t sketch-border p-3 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing 1-5 of 5 items
            </div>
            <div className="flex gap-1">
              <button className="sketch-btn-icon" disabled>
                &lt;
              </button>
              <button className="sketch-btn-icon bg-gray-200">1</button>
              <button className="sketch-btn-icon" disabled>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
