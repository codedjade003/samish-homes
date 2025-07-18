import { useAuth } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

interface Props {
  onToggleProfile: () => void;
  profileDropdownOpen: boolean;
  onLogout: () => void;
}

export default function DesktopHeader({ onToggleProfile, profileDropdownOpen, onLogout }: Props) {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm hidden md:block relative">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold text-blue-800">Samish Homes</h1>
        <div className="flex items-center space-x-6">
          <button className="text-gray-500 hover:text-gray-700 relative">
            <i className="fas fa-bell text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onToggleProfile}>
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="font-medium">{user?.name}</span>
            <i className="fas fa-chevron-down text-xs" />
          </div>
        </div>
      </div>

      {profileDropdownOpen && <ProfileDropdown onLogout={onLogout} />}
    </header>
  );
}
