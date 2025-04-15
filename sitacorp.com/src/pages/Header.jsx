import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const navItems = {
    Services: [
      { label: 'SAP Consulting', to: '/services/sap-consulting' },
      { label: 'Cloud Solutions', to: '/services/cloud-solutions' },
      { label: 'Support Services', to: '/services/support-services' },
      { label: 'SSAM', to: '/services/SSAM-solutions' },
      { label: 'FSM', to: '/services/FSM-solutions' },
    ],
    Industries: [
      { label: 'Manufacturing', to: '/industries/manufacturing' },
      { label: 'Retail', to: '/industries/retail' },
      { label: 'Public Sector', to: '/industries/public-sector' },
    ],
    Technology: [
      { label: 'SAP S/4 HANA', to: '/technology/sap-s4-hana' },
      { label: 'AI & ML', to: '/technology/ai-ml' },
      { label: 'IoT Integration', to: '/technology/iot-integration' },
    ],
  };

  const renderDropdown = (items) => (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-md rounded-md z-50">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.to}
          className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutId);
    setDropdown(key);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setDropdown(null), 200);
    setTimeoutId(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center text-black">
        {/* Logo */}
        <Link to="/">
          <img src="https://sitacorp.com/img/logo-sitacorp.png" alt="SitaCorp" className="h-10" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium relative">
          <Link to="/" className="hover:text-blue-300 transition cursor-pointer">
            Home
          </Link>

          {Object.entries(navItems).map(([key, value], index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-blue-300 transition cursor-pointer">
                {key}
              </button>
              {dropdown === key && renderDropdown(value)}
            </div>
          ))}

          <Link to="/jobs" className="hover:text-blue-300 transition cursor-pointer">
            Jobs
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <button className="text-blue-500 bg-white p-2 rounded-md">
            <div className="w-6 h-0.5 bg-blue-600 mb-1" />
            <div className="w-6 h-0.5 bg-blue-600 mb-1" />
            <div className="w-6 h-0.5 bg-blue-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
