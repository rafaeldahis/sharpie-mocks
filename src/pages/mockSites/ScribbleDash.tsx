
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Table, UserPlus, Filter, Download, ChevronDown } from "lucide-react";
import { SketchCard, SketchButton, SketchBadge, SketchInput } from "@/components/marker";

const ScribbleDash = () => {
  // Mock user data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2h ago"
    },
    {
      id: 2,
      name: "Sam Williams",
      email: "sam@example.com",
      role: "Editor",
      status: "Inactive",
      lastActive: "1d ago"
    },
    {
      id: 3,
      name: "Jamie Smith",
      email: "jamie@example.com",
      role: "Viewer",
      status: "Active",
      lastActive: "5m ago"
    },
    {
      id: 4,
      name: "Casey Brown",
      email: "casey@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "3h ago"
    },
    {
      id: 5,
      name: "Taylor Wilson",
      email: "taylor@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Just now"
    }
  ];

  return (
    <div className="bg-[#BAD7F2] min-h-screen p-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            ScribbleDash
          </h1>
          <p className="text-xl mt-4 font-comic">An internal tool with a sketchy interface for managing user data</p>
        </div>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <SketchCard className="h-full bg-white border-2 border-black p-0">
              <div className="p-4 border-b-2 border-black">
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                  Dashboard
                </h2>
              </div>
              <div className="p-0">
                {["Users", "Teams", "Projects", "Settings", "Reports"].map((item, i) => (
                  <div 
                    key={i} 
                    className={`px-4 py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors ${i === 0 ? 'bg-gray-100' : ''}`}
                    style={{ transform: i === 0 ? "rotate(-0.5deg)" : "rotate(0.3deg)" }}
                  >
                    <span className={i === 0 ? "font-bold" : ""}>{item}</span>
                  </div>
                ))}
              </div>
            </SketchCard>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <SketchCard className="h-full bg-white border-2 border-black">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                  User Management
                </h2>
                <SketchButton className="flex items-center gap-1 transform rotate-0.5">
                  <UserPlus size={16} />
                  Add User
                </SketchButton>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <SketchInput 
                    placeholder="Search users..." 
                    className="pl-10 w-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} />
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 border-2 border-black rounded-md transform rotate-0.5 bg-white">
                    <Filter size={16} />
                    Filter
                    <ChevronDown size={14} />
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 border-2 border-black rounded-md transform -rotate-0.5 bg-white">
                    <Download size={16} />
                    Export
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border-2 border-black transform rotate-0.5">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider transform -rotate-0.5">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider transform rotate-0.5">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider transform -rotate-0.5">
                        Role
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider transform rotate-0.5">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider transform -rotate-0.5">
                        Last Active
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-bold text-gray-700 uppercase tracking-wider transform rotate-0.5">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          {user.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-4 py-3">
                          <SketchBadge 
                            variant={user.role === "Admin" ? "primary" : user.role === "Editor" ? "success" : "default"}
                            className="text-xs"
                          >
                            {user.role}
                          </SketchBadge>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${user.status === "Active" ? "bg-green-500" : "bg-gray-300"}`}></span>
                          <span className="text-sm">{user.status}</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {user.lastActive}
                        </td>
                        <td className="px-4 py-3 text-right space-x-2">
                          <button className="text-blue-500 hover:text-blue-700">Edit</button>
                          <button className="text-red-500 hover:text-red-700">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">
                  Showing 5 of 24 users
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((page, i) => (
                    <button 
                      key={i}
                      className={`w-8 h-8 flex items-center justify-center border-2 border-black rounded-md transform ${i === 0 ? 'bg-blue-500 text-white rotate-1' : 'bg-white -rotate-0.5'}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </SketchCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScribbleDash;
