import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Properties", id: "featured" },
    { label: "Agents", id: "agents" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // Scroll to section
const handleScroll = (id: string) => {
  if (id === "agents") {
    navigate("/login");
    setMobileOpen(false);
    return;
  }

  if (window.location.pathname !== "/") {
    navigate("/");
    // Delay scroll until after route change
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    }, 100); // slight delay to wait for page render
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
    setActiveSection(id);
  }
};

  // Track scroll position and update active nav link
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (id && id !== "agents") {
                setActiveSection(id);
              }
            }
          });
        },
        {
          rootMargin: "-50% 0px -45% 0px",
          threshold: 0.1,
        }
      );

      const sectionElements = navItems
        .filter((item) => item.id !== "agents") // exclude agents
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => !!el);

      sectionElements.forEach((el) => observer.observe(el));
      return () => sectionElements.forEach((el) => observer.unobserve(el));
    }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span
              className="text-xl font-bold text-blue-800 cursor-pointer"
              onClick={() => handleScroll("hero")}
            >
              Samish Homes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <span
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`cursor-pointer text-sm font-medium px-1 pt-1 inline-flex items-center transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300"
                }`}
              >
                {item.label}
              </span>
            ))}

              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden -mr-2 flex items-center">
          <button
            onClick={() => navigate("/login")}
            className="w-full mt-4 flex justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-sm px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`block text-base font-medium py-2 cursor-pointer transition-all ${
                activeSection === item.id
                  ? "text-blue-700 border-l-4 pl-3 border-blue-600 bg-blue-50"
                  : "text-gray-600 pl-3 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </span>
          ))}

          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-auth-modal", { detail: "login" }))
            }
            className="w-full mt-4 flex justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
