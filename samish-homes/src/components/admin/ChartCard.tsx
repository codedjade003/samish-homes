// components/admin/ChartCard.tsx
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartCardProps {
  title: string;
  selectOptions: string[];
  selected: string;
  onSelectChange: (value: string) => void;
  chartId: string; // Not needed for Chart.js, but kept for structure

}

export default function ChartCard({
  title,
  selectOptions,
  selected,
  onSelectChange,
}: ChartCardProps) {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: title,
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#4F46E5",
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        font: { size: 18 },
        padding: { top: 10, bottom: 20 },
      },
      legend: {
        display: true,
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          font: { size: 14 },
        },
      },
      y: {
        title: {
          display: true,
          text: title.includes("Agent") ? "Properties Sold" : "Listing Volume",
          font: { size: 14 },
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Simulate new data on filter change
    setChartData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: Array(5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 100) + 10),
        },
      ],
    }));
  }, [selected]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1 text-sm"
          value={selected}
          onChange={(e) => onSelectChange(e.target.value)}
        >
          {selectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="h-72">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
