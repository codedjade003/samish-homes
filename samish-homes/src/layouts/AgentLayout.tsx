import { useState } from 'react';
import Navbar from '../components/agent/components/Navbar';
import SidebarPanel from '../components/agent/components/SidebarPanel';
import { Outlet } from 'react-router-dom';

const AgentLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar onMobileMenuToggle={() => setSidebarOpen(true)} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <SidebarPanel
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Peel Tab (Mobile Only) */}
        {!isSidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed z-40 top-1/3 left-0 transform -translate-y-1/2 bg-blue-600 text-white px-2 py-3 rounded-r-lg shadow-lg md:hidden"
            aria-label="Open Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Page Content */}
        <main className="flex-1 min-h-[calc(100vh-64px)] overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AgentLayout;
