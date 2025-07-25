import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Samish Homes</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property for your needs and budget.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Properties", "Agents", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {["Buy a Home", "Sell a Home", "Rent a Property", "Property Management", "Investment Properties"].map(
                (service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-white">
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Real Estate Ave</p>
              <p>Samish, WA 98221</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@samishhomes.com</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="#"><FaFacebookF className="hover:text-white text-gray-400" /></a>
              <a href="#"><FaTwitter className="hover:text-white text-gray-400" /></a>
              <a href="#"><FaInstagram className="hover:text-white text-gray-400" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-white text-gray-400" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2023 Samish Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
