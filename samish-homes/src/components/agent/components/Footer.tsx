const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Samish
            </h3>
            <p className="text-sm text-gray-500">
              Empowering real estate agents with tools to close more deals, track referrals,
              and grow their business.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              For Agents
            </h3>
            <ul className="space-y-2">
              {['Dashboard', 'Listings', 'Referrals', 'Proposals'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {['Help Center', 'Training', 'API Docs', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 Samish Homes and Apartments Limited. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { icon: 'fab fa-facebook-f', href: '#' },
              { icon: 'fab fa-twitter', href: '#' },
              { icon: 'fab fa-instagram', href: '#' },
              { icon: 'fab fa-linkedin-in', href: '#' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-gray-500"
                aria-label={`Follow on ${social.icon.split(' ')[1].replace('fa-', '')}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
