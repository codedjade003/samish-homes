import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import AddUserModal from "./AddUserModal";

const users = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Agent",
    status: "Active",
    joined: "2023-05-15",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-03-10",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "Client",
    status: "Pending",
    joined: "2023-06-22",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function RecentUsers() {
    const [modalOpen, setModalOpen] = useState(false);
    
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Users</h2>
      <AddUserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={function (formData: any): void {
                  throw new Error("Function not implemented.");
              } } />
      <button onClick={() => setModalOpen(true)} className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 flex items-center">
          <FaPlus className="mr-2" /> Add New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["User", "Email", "Role", "Status", "Joined", "Actions"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={user.image} alt={user.name} className="h-10 w-10 rounded-full" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.joined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <a href="#" className="text-primary hover:text-indigo-900">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-danger hover:text-red-900">
                    <FaTrash />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{" "}
          <span className="font-medium">48</span> users
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
