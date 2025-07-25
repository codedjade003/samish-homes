import { Link, useLocation, useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faHome,
  faUsers,
  faHandshake,
  faFileAlt,
  faChartLine,
  faCalendarAlt,
  faWallet,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { label: 'Dashboard', icon: faTachometerAlt, path: '/agent/dashboard' },
  { label: 'Listings', icon: faHome, path: '/agent/listings' },
  { label: 'Clients', icon: faUsers, path: '/agent/clients' },
  { label: 'Referrals', icon: faHandshake, path: '/agent/referrals' },
  { label: 'Proposals', icon: faFileAlt, path: '/agent/proposals' },
  { label: 'Reports', icon: faChartLine, path: '/agent/reports' },
  { label: 'Visits', icon: faCalendarAlt, path: '/agent/visits' },
  { label: 'Commission', icon: faWallet, path: '/agent/commission' },
];

const bottomItems = [
  { label: 'Settings', icon: faCog, path: '/settings' },
  { label: 'Logout', icon: faSignOutAlt, action: 'logout' },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SidebarPanel({ open, onClose }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname.startsWith(path);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'JD';

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`w-64 bg-white border-r border-gray-200 flex-shrink-0 z-50 md:static fixed top-[64px] left-0 h-[calc(100vh-64px)] transition-transform duration-200 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block`}
      >
        <div className="flex flex-col justify-between h-full px-4 py-4">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-red-600">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {navItems.map(({ label, icon, path }) => (
              <Link
                key={label}
                to={path}
                onClick={onClose}
                className={`flex items-center px-4 py-2 text-[15px] font-semibold rounded-md transition-all ${
                  isActive(path)
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`mr-3 w-4 h-4 ${
                    isActive(path) ? 'text-white' : 'text-indigo-600'
                  }`}
                />
                {label}
              </Link>
            ))}
          </nav>

          {/* Bottom / Footer Items */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center p-3 bg-indigo-50 rounded-md">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                {initials}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">{user?.name || 'Agent Name'}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role || 'agent'}</p>
              </div>
            </div>

            {bottomItems.map(({ label, icon, path, action }) =>
              action === 'logout' ? (
                <button
                  key={label}
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="w-full flex items-center px-3 py-2 rounded-md text-[15px] font-semibold text-gray-800 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={icon} className="mr-3 w-4 h-4 text-indigo-600" />
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  to={path!}
                  onClick={onClose}
                  className="flex items-center px-3 py-2 rounded-md text-[15px] font-semibold text-gray-800 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={icon} className="mr-3 w-4 h-4 text-indigo-600" />
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
