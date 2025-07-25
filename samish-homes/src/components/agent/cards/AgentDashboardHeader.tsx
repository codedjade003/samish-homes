// src/components/agent/components/AgentDashboardHeader.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onAddListingClick: () => void;
};

export default function DashboardHeader({ onAddListingClick }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Agent Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>
      <div className="mt-4 md:mt-0">
        <button
          onClick={onAddListingClick}
          className="gradient-bg text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition duration-200 flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Listing
        </button>
      </div>
    </div>
  );
}
