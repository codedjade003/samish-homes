import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHandshake,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const activityItems = [
  {
    icon: faHome,
    bg: 'bg-blue-100',
    color: 'text-blue-600',
    title: 'New listing added',
    description: '4-bedroom duplex in Lekki Phase 1',
    time: '2 hours ago',
  },
  {
    icon: faHandshake,
    bg: 'bg-green-100',
    color: 'text-green-600',
    title: 'Referral received',
    description: 'From Sarah Johnson for a client interested in VI',
    time: '5 hours ago',
  },
  {
    icon: faFileContract,
    bg: 'bg-purple-100',
    color: 'text-purple-600',
    title: 'Proposal sent',
    description: 'For the 3-bedroom apartment in Ikoyi to Mr. Adebayo',
    time: '1 day ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <Link to="/agent/clients" className="text-sm text-indigo-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {activityItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className={`${item.bg} ${item.color} h-10 w-10 rounded-full flex items-center justify-center`}>
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
