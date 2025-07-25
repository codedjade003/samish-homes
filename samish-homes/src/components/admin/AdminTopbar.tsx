import { FaBell, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

export default function AdminTopbar() {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700">
            <FaBell />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaEnvelope />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FaQuestionCircle />
        </button>
      </div>
    </header>
  );
}
