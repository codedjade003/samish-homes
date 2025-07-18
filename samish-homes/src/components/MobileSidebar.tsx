import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: Props) {
  const { user, logout } = useAuth();

  // Close on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const navItems = [
    { label: "Dashboard", href: "#" },
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-800 text-white transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-blue-700">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={onClose} className="text-white hover:text-blue-200">
          <i className="fas fa-times" />
        </button>
      </div>

      <nav className="mt-4 space-y-1 px-4">
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
          onClick={() => {
            logout();
            onClose();
          }}
          className="mt-4 text-sm text-left text-white hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
