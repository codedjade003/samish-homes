import { FaUserTie, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "555-1234",
    properties: 12,
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@example.com",
    phone: "555-5678",
    properties: 8,
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "555-9012",
    properties: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    status: "Inactive",
  },
];

export default function AgentsView() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">All Agents</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Agent", "Email", "Phone", "Properties", "Status", "Actions"].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {agents
              .filter((a) => filter === "All" || a.status === filter)
              .map((agent) => (
                <tr key={agent.id}>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                    <img src={agent.image} className="w-10 h-10 rounded-full" />
                    <span className="text-sm font-medium text-gray-900">{agent.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.properties}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      agent.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {agent.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <a href="#" className="text-primary hover:text-indigo-900"><FaEdit /></a>
                    <a href="#" className="text-danger hover:text-red-900"><FaTrash /></a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
