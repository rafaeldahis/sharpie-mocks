
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, ChevronDown, FileText, Grid, Home, Menu, MessageCircle, Search, Settings, User, Users } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchInput, SketchTable, SketchToggle } from "@/components/marker";

const ScribbleDash = () => {
  // Define the table data
  const projectTableHeaders = ["Project Name", "Status", "Team", "Deadline"];
  const projectTableRows = [
    ["Website Redesign", 
      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
        Completed
      </span>, 
      "3 members", 
      "May 15, 2025"],
    ["Mobile App Development", 
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
        In Progress
      </span>, 
      "5 members", 
      "June 22, 2025"],
    ["Brand Strategy", 
      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
        Pending
      </span>, 
      "2 members", 
      "July 10, 2025"]
  ];
  
  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 border-r-2 border-black p-4 flex flex-col h-screen">
        <div className="flex items-center mb-8">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-8 transform -rotate-1" style={{ fontFamily: "'Shantell Sans', cursive" }}>
          ScribbleDash
        </h1>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="transform rotate-0.5">
              <a href="#" className="flex items-center gap-2 p-2 bg-[#BAD7F2] rounded-md border-2 border-black">
                <Home size={16} />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="transform -rotate-0.5">
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <Users size={16} />
                <span>Team</span>
              </a>
            </li>
            <li className="transform rotate-0.3">
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <FileText size={16} />
                <span>Documents</span>
              </a>
            </li>
            <li className="transform -rotate-0.2">
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <MessageCircle size={16} />
                <span>Messages</span>
              </a>
            </li>
            <li className="transform rotate-0.4">
              <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <Settings size={16} />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="border-t-2 border-dashed border-black pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-[#BAD7F2]">
              <User size={14} />
            </div>
            <div>
              <p className="text-sm font-bold">User Name</p>
              <p className="text-xs">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Dashboard
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <SketchInput
                placeholder="Search..."
                className="w-40 md:w-64"
              />
              <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="p-2 border-2 border-black rounded-md">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SketchCard className="transform rotate-0.5 bg-[#BAD7F2]/10">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Total Users</h3>
              <p className="text-3xl font-bold">1,284</p>
              <p className="text-sm text-green-600">↑ 12% from last month</p>
            </div>
          </SketchCard>
          
          <SketchCard className="transform -rotate-0.5 bg-[#BAD7F2]/10">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Active Projects</h3>
              <p className="text-3xl font-bold">32</p>
              <p className="text-sm text-red-600">↓ 3% from last month</p>
            </div>
          </SketchCard>
          
          <SketchCard className="transform rotate-0.3 bg-[#BAD7F2]/10">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Completion Rate</h3>
              <p className="text-3xl font-bold">78%</p>
              <p className="text-sm text-green-600">↑ 5% from last month</p>
            </div>
          </SketchCard>
        </div>

        {/* Table Section */}
        <SketchCard className="mb-8 transform -rotate-0.3">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Recent Projects</h3>
              <SketchButton className="text-sm bg-[#BAD7F2] text-black transform rotate-0.5">
                View All
              </SketchButton>
            </div>
            
            <div className="overflow-x-auto">
              <SketchTable 
                headers={projectTableHeaders} 
                rows={projectTableRows} 
              />
            </div>
          </div>
        </SketchCard>

        {/* Settings Card */}
        <SketchCard className="transform rotate-0.5">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Quick Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <Grid size={16} className="mr-2" />
                  <span>Compact View</span>
                </label>
                <SketchToggle />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <Bell size={16} className="mr-2" />
                  <span>Notifications</span>
                </label>
                <SketchToggle className="active" />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>Team Updates</span>
                </label>
                <SketchToggle className="active" />
              </div>
            </div>
          </div>
        </SketchCard>
      </div>
    </div>
  );
};

export default ScribbleDash;
