import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBuilding,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function RecentLeads() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Leads</h2>
        <Link to="/agent/clients" className="text-sm text-indigo-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {/* Lead 1 */}
        <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition duration-150">
          <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Robert Garcia</p>
            <p className="text-sm text-gray-500">Looking for a 3BR home in downtown</p>
            <div className="mt-1 flex items-center text-xs text-gray-500 gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>(555) 123-4567</span>
              <span>•</span>
              <FontAwesomeIcon icon={faClock} />
              <span>2 days ago</span>
            </div>
          </div>
          <div className="ml-auto">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              New
            </span>
          </div>
        </div>

        {/* Lead 2 */}
        <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition duration-150">
          <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Sunrise Developers</p>
            <p className="text-sm text-gray-500">Commercial property investment</p>
            <div className="mt-1 flex items-center text-xs text-gray-500 gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@sunrisedev.com</span>
              <span>•</span>
              <FontAwesomeIcon icon={faClock} />
              <span>1 week ago</span>
            </div>
          </div>
          <div className="ml-auto">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              Follow Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
