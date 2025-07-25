
import { useState } from "react";
import AdminStatsGrid from "../AdminStatsGrid";
import ChartCard from "../ChartCard";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminAnalyticsView() {
  const [propertyRange, setPropertyRange] = useState("Last 90 days");
  const [agentRange, setAgentRange] = useState("Top 10");
  const [signupRange, setSignupRange] = useState("Last 90 days");
  const [conversionRange, setConversionRange] = useState("Last 30 days");

  const pieData = {
    labels: ["Organic Search", "Social Media", "Direct", "Referral"],
    datasets: [
      {
        label: "Traffic Sources",
        data: [40, 25, 20, 15],
        backgroundColor: ["#6366F1", "#10B981", "#F59E0B", "#EF4444"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      <AdminStatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Property Performance"
          selectOptions={["Last 7 days", "Last 30 days", "Last 90 days", "Last year"]}
          selected={propertyRange}
          onSelectChange={setPropertyRange}
          chartId="propertyPerformance"
        />
        <ChartCard
          title="Agent Performance"
          selectOptions={["Top 5", "Top 10", "All Agents"]}
          selected={agentRange}
          onSelectChange={setAgentRange}
          chartId="agentPerformance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly User Signups"
          selectOptions={["Last 30 days", "Last 90 days", "Last year"]}
          selected={signupRange}
          onSelectChange={setSignupRange}
          chartId="userSignups"
        />
        <ChartCard
          title="Lead Conversion Rate"
          selectOptions={["Last 30 days", "Last 90 days"]}
          selected={conversionRange}
          onSelectChange={setConversionRange}
          chartId="conversionRate"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Traffic Sources</h2>
          <div className="h-72">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Listings vs Sales Comparison</h2>
          <ChartCard
            title="Listings vs Sales"
            selectOptions={["Last 30 days", "Last 90 days"]}
            selected={"Last 30 days"}
            onSelectChange={() => {}}
            chartId="listingsSales"
          />
        </div>
      </div>
    </div>
  );
}
