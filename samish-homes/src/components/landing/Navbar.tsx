import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Home", "Properties", "Agents", "About", "Contact"];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-800">Samish Homes</span>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className={`text-sm font-medium ${
                  item === "Home"
                    ? "text-gray-900 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300"
                } px-1 pt-1 inline-flex items-center`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "login" }))}
              className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>

          <div className="md:hidden -mr-2 flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-blue-500"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  item === "Home"
                    ? "bg-blue-50 border-blue-500 text-blue-700 border-l-4"
                    : "text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 border-l-4 border-transparent"
                }`}
              >
                {item}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "login" }))}
                className="w-full flex justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
