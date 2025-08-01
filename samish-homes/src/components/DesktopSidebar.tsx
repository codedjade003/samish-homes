import { useAuth } from "../context/useAuth";

export default function DesktopSidebar() {
  const { user, logout } = useAuth();

  const navItems = [
    { label: "Dashboard", href: "#" },
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-blue-800 text-white">
        <div className="flex items-center h-16 px-4 border-b border-blue-700">
          <h2 className="text-xl font-semibold">Samish Homes</h2>
        </div>

        <nav className="flex-1 overflow-y-auto space-y-1 px-4 py-4">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-700 mt-auto">
          <div className="flex items-center space-x-3">
            <img src="https://via.placeholder.com/40" className="w-8 h-8 rounded-full" alt="User" />
            <div>
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-blue-200 capitalize">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-4 text-sm text-left text-white hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
