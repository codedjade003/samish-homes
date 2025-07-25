import AdminStatsGrid from "../../components/admin/AdminStatsGrid";
import ChartCard from "../admin/ChartCard";
import RecentPropertiesTable from "../admin/RecentPropertiesTable";
import { useState } from "react";
import RecentUsers from "../admin/RecentUsers";

export default function AdminDashboard() {

  const [propertyRange, setPropertyRange] = useState("Last 90 days");
  const [agentRange, setAgentRange] = useState("Top 10");


  return (
      <>
      <AdminStatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Property Performance"
          selectOptions={["Last 7 days", "Last 30 days", "Last 90 days", "Last year"]}
          selected={propertyRange}
          onSelectChange={setPropertyRange}
          chartId="propertyChart"
        />
        <ChartCard
          title="Agent Performance"
          selectOptions={["Top 5", "Top 10", "All Agents"]}
          selected={agentRange}
          onSelectChange={setAgentRange}
          chartId="agentChart"
        />
      </div>

      <RecentPropertiesTable />
      <RecentUsers />
      </>
  );
}
