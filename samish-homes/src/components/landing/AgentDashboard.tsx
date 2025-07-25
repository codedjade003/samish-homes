import {
  faDollarSign,
  faUsers,
  faHome,
  faWallet,
  faArrowUp,
  faCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import DashboardHeader from "../agent/cards/AgentDashboardHeader";
import StatCard from "../agent/cards/StatCard";
import SalesTargetCard from "../agent/cards/SalesTargetCard";
import RecentProposalsTable from "../agent/cards/RecentProposalsTable";
import RecentLeads from "../agent/cards/RecentLeads";
import RecentActivity from "../agent/cards/RecentActivity";
import ActiveListings from "../agent/components/ActiveListings";
import RecentListings from "../agent/cards/RecentListings";
import PropertyModal from "../agent/modals/PropertyModal";
import type { Property } from "../agent/types/Property";
import AddListingModal from "../agent/modals/AddListingModal";

export default function AgentDashboard() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [isAddListingOpen, setAddListingOpen] = useState(false);


  const handleOpenModal = (property: Property) => {
    setSelectedProperty(property);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setShowDetailsModal(false);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto w-full">
      <DashboardHeader onAddListingClick={() => setAddListingOpen(true)} />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={faDollarSign}
          iconBg="bg-green-100"
          iconColor="text-green-600"
          label="Total Sales"
          value="₦12,450,000"
          subtext="12% from last month"
          subtextColor="text-green-600"
          subIcon={faArrowUp}
        />
        <StatCard
          icon={faUsers}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          label="Active Leads"
          value="24"
          subtext="3 new today"
          subtextColor="text-blue-600"
          subIcon={faArrowUp}
        />
        <StatCard
          icon={faHome}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          label="Active Listings"
          value="8"
          subtext="4 residential, 4 commercial"
          subtextColor="text-purple-600"
          subIcon={faCircle}
        />
        <StatCard
          icon={faWallet}
          iconBg="bg-indigo-100"
          iconColor="text-indigo-600"
          label="Available Balance"
          value="₦2,450,000"
          subtext="₦820,000 pending"
          subtextColor="text-indigo-600"
          subIcon={faClock}
        />
      </div>

      {/* Sales Target + Proposals Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <SalesTargetCard />
        </div>
        <div className="lg:col-span-2">
        <RecentActivity />
        </div>
      </div>
      {/* Recent Activity */}
      <div className="mb-6">
          <RecentProposalsTable />
      </div>
      {/* Recent Listings */}
      <div className="mb-6">
        <RecentListings onPropertyClick={handleOpenModal} />
      </div>
      {/* Leads + Active Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RecentLeads />
        <ActiveListings />
      </div>
      {/* View Details Modal */}
      {selectedProperty && (
        <PropertyModal
          isOpen={showDetailsModal}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
      )}
      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setAddListingOpen(false)}
      />
    </div>
  );
}
