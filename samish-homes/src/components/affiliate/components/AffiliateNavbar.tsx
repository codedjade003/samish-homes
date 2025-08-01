// src/components/affiliate/layout/AffiliateNavbar.tsx
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AffiliateNavbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-samish-primary rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faHome} className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold text-samish-dark">Samish Realty</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {['Dashboard', 'Properties', 'Affiliates', 'Earnings'].map(label => (
            <a key={label} href="#" className="text-samish-dark hover:text-samish-primary font-medium">
              {label}
            </a>
          ))}
        </nav>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-samish-dark">
            <i className="fas fa-bars text-xl" />
          </button>
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
