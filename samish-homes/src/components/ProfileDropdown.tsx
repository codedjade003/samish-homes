interface Props {
  onLogout: () => void;
}

export default function ProfileDropdown({ onLogout }: Props) {
  return (
    <div className="absolute right-6 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
      <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Sign out
      </button>
    </div>
  );
}
