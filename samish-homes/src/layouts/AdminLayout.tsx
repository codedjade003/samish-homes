import { useState } from "react";
import AdminTopbar from "../components/admin/AdminTopbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      <AdminSidebar isCollapsed={isCollapsed} toggle={() => setIsCollapsed(!isCollapsed)} />
      <div className="flex-1 overflow-auto">
        <AdminTopbar />
        <main className="p-6">
          <Outlet /> {/* 👈 This replaces children */}
        </main>
      </div>
    </div>
  );
}
