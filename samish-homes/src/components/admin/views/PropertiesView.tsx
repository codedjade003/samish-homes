import { useState } from "react";
import AddPropertyModal from "../AddPropertyModal";
import { FaPlus } from "react-icons/fa";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "123 Main St",
    location: "Seattle, WA",
    type: "Single Family",
    price: "$750,000",
    status: "Active",
    agent: "Sarah Johnson",
  },
  {
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    title: "456 Oak Ave",
    location: "Bellevue, WA",
    type: "Condo",
    price: "$450,000",
    status: "Pending",
    agent: "Michael Chen",
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "789 Pine Blvd",
    location: "Redmond, WA",
    type: "Townhouse",
    price: "$620,000",
    status: "Active",
    agent: "David Wilson",
  },
];

export default function PropertiesView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Properties</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Property
        </button>
      </div>

      <AddPropertyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Property", "Type", "Price", "Status", "Agent", "Actions"].map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((prop, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={prop.image} className="h-10 w-10 rounded-md" alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{prop.title}</div>
                      <div className="text-sm text-gray-500">{prop.location}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{prop.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{prop.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      prop.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {prop.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{prop.agent}</td>
                <td className="px-6 py-4 text-sm font-medium">
                  <a href="#" className="text-primary hover:text-indigo-900 mr-3">
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#" className="text-danger hover:text-red-900">
                    <i className="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{" "}
            <span className="font-medium">247</span> properties
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
    </div>
  );
}
