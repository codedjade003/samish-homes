import {
  FaBars,
  FaHome,
  FaUsers,
  FaChartLine,
  FaUserTie,
  FaFileSignature,
  FaUserShield,
  FaCog,
  FaKey,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/useAuth";


interface Props {
  isCollapsed: boolean;
  toggle: () => void;
}

export default function AdminSidebar({ isCollapsed, toggle }: Props) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <aside
      className={`bg-white text-gray-800 shadow-lg ${
        isCollapsed ? "w-20" : "w-64"
      } flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FaHome className="text-primary text-xl" />
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">Samish Homes</span>
          )}
        </div>
        <button className="text-gray-500 hover:text-gray-700" onClick={toggle}>
          <FaBars />
        </button>
      </div>

      {/* Nav */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <SidebarSection title="Main" collapsed={isCollapsed}>
        <SidebarLink icon={<FaChartLine />} label="Dashboard" to="/admin/dashboard" collapsed={isCollapsed} />
        <SidebarLink icon={<FaHome />} label="Properties" to="/admin/properties" collapsed={isCollapsed} />
        <SidebarLink icon={<FaUsers />} label="Users" to="/admin/users" collapsed={isCollapsed} />
        <SidebarLink icon={<FaChartLine />} label="Analytics" to="/admin/analytics" collapsed={isCollapsed} />
        </SidebarSection>

        <SidebarSection title="Management" collapsed={isCollapsed}>
        <SidebarLink icon={<FaUserTie />} label="Agents" to="/admin/agents" collapsed={isCollapsed} />
        <SidebarLink icon={<FaFileSignature />} label="Leads" to="/admin/leads" collapsed={isCollapsed} />
        <SidebarLink icon={<FaUserShield />} label="Owners" to="/admin/owners" collapsed={isCollapsed} />
        </SidebarSection>

        <SidebarSection title="Settings" collapsed={isCollapsed}>
        <SidebarLink icon={<FaCog />} label="System Settings" to="/admin/settings" collapsed={isCollapsed} />
        <SidebarLink icon={<FaKey />} label="Roles & Permissions" to="/admin/roles" collapsed={isCollapsed} />
        </SidebarSection>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Admin"
              className="w-10 h-10 rounded-full"
            />
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            title="Logout"
            className="text-danger hover:text-red-600 ml-4"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </aside>
  );
}

function SidebarSection({ title, children, collapsed }: { title: string; children: React.ReactNode; collapsed: boolean }) {
  return (
    <div className="mb-6">
      {!collapsed && (
        <p className="text-xs uppercase text-gray-500 font-semibold mb-2">{title}</p>
      )}
      {children}
    </div>
  );
}

function SidebarLink({
  icon,
  label,
  to,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center py-2 px-3 rounded-lg mb-2 transition-colors ${
          isActive
            ? "bg-primary text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <span className="mr-3 text-lg">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}

