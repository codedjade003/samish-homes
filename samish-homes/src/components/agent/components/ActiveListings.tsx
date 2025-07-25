import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ActiveListings() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Active Listings</h2>
        <Link to="/agent/listings" className="text-sm text-indigo-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {/* Listing 1 */}
        <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition duration-150">
          <div className="h-16 w-16 rounded-md bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=100&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">321 Beachfront Dr</p>
            <p className="text-sm text-gray-500">3 BR • 2 BA • 1,850 sqft</p>
            <div className="mt-1 flex items-center text-xs text-gray-500 gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Waterfront District</span>
              <span>•</span>
              <FontAwesomeIcon icon={faTag} />
              <span>₦675,000</span>
            </div>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mb-1">
              Active
            </span>
            <span className="text-xs text-gray-500">4 views today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
