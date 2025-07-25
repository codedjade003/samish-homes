import { FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";

const leads = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-1212",
    interest: "3-bedroom apartment in Lekki",
    status: "New",
  },
  {
    id: 2,
    name: "Mary Lee",
    email: "mary.lee@example.com",
    phone: "555-3434",
    interest: "Duplex in Ajah",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Daniel Obi",
    email: "daniel.obi@example.com",
    phone: "555-5656",
    interest: "Land in Ibeju-Lekki",
    status: "Converted",
  },
];

export default function LeadsView() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Leads Management</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Lead", "Email", "Phone", "Interest", "Status", "Actions"].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.interest}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    lead.status === "Converted"
                      ? "bg-green-100 text-green-800"
                      : lead.status === "Contacted"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {lead.status}
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
