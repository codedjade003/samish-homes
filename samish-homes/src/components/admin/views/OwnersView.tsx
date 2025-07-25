import { FaUserShield, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function OwnersView() {
  const [modalOpen, setModalOpen] = useState(false);

  const owners = [
    {
      name: "Lydia Benson",
      email: "lydia.b@example.com",
      phone: "08123456789",
      joined: "2023-01-15",
    },
    {
      name: "James Okafor",
      email: "james.o@example.com",
      phone: "08012345678",
      joined: "2023-04-22",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FaUserShield /> Property Owners
        </h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Owner
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Name", "Email", "Phone", "Joined"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {owners.map((owner, i) => (
              <tr key={i}>
                <td className="px-6 py-4 text-sm text-gray-900">{owner.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{owner.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{owner.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{owner.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
