import { useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { useAuth } from "../context/useAuth";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <MobileHeader onToggleSidebar={() => setSidebarOpen(true)} />

      {/* Desktop Header */}
      <DesktopHeader
        onToggleProfile={() => setProfileDropdownOpen((prev) => !prev)}
        profileDropdownOpen={profileDropdownOpen}
        onLogout={() => {
          localStorage.clear();
          window.location.reload();
        }}
      />

      <div className="flex">
        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
