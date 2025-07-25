import { FaArrowUp, FaArrowDown, FaHome, FaUserTie, FaFileSignature, FaUsers } from "react-icons/fa";

export default function AdminStatsGrid() {
  const stats = [
    {
      label: "Total Properties",
      value: "247",
      change: "+12%",
      icon: <FaHome />,
      color: "bg-blue-100 text-primary",
      trend: "up",
    },
    {
      label: "Active Agents",
      value: "18",
      change: "+2 new",
      icon: <FaUserTie />,
      color: "bg-green-100 text-secondary",
      trend: "up",
    },
    {
      label: "New Leads",
      value: "56",
      change: "-5%",
      icon: <FaFileSignature />,
      color: "bg-yellow-100 text-yellow-600",
      trend: "down",
    },
    {
      label: "Website Visitors",
      value: "3,452",
      change: "+22%",
      icon: <FaUsers />,
      color: "bg-purple-100 text-indigo-500",
      trend: "up",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p
                className={`text-sm flex items-center ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                {stat.change}
              </p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
