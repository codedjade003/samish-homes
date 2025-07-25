// src/components/agent/cards/RecentProposalsTable.tsx
import { Link } from "react-router-dom";

export default function RecentProposalsTable() {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Proposals</h2>
        <Link to="/agent/proposals" className="text-sm text-indigo-600 hover:underline">View All</Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Property', 'Client', 'Date', 'Amount', 'Status'].map(col => (
                <th key={col} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              {
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                address: "123 Main St",
                type: "Residential",
                client: "Sarah Johnson",
                email: "sarah@email.com",
                date: "May 15, 2023",
                amount: "₦425,000",
                status: "Completed",
                statusColor: "green",
              },
              {
                img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
                address: "456 Oak Ave",
                type: "Commercial",
                client: "TechStart Inc.",
                email: "contact@techstart.com",
                date: "May 10, 2023",
                amount: "₦820,000",
                status: "Pending",
                statusColor: "yellow",
              },
              {
                img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
                address: "789 Pine Rd",
                type: "Residential",
                client: "Michael Chen",
                email: "michael@email.com",
                date: "May 5, 2023",
                amount: "₦375,000",
                status: "Completed",
                statusColor: "green",
              },
            ].map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gray-200 rounded-md overflow-hidden">
                      <img src={item.img} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.address}</div>
                      <div className="text-sm text-gray-500">{item.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{item.client}</div>
                  <div className="text-sm text-gray-500">{item.email}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${item.statusColor}-100 text-${item.statusColor}-800`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
