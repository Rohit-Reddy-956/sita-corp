// FeatureIconsSection.jsx
import React from 'react';
import { FaCoins, FaChartBar, FaUserTie, FaShoppingCart } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

const features = [
  { icon: <FaCoins size={40} />, label: 'Finance' },
  { icon: <FaChartBar size={40} />, label: 'Procurement' },
  { icon: <FaUserTie size={40} />, label: 'Success Factors' },
  { icon: <FaShoppingCart size={40} />, label: 'Retail' }
];

const FeatureIconsSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="flex flex-col items-center bg-white p-6 rounded-full shadow-md w-32 h-32 justify-center hover:scale-110 transition-transform duration-300"
          >
            <div className="text-blue-700 mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-2" data-aos="fade-up">
        Growing list of features requested by managers like you
      </p>
      <h3 className="text-3xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay="200">
        And Many More...
      </h3>
    </section>
  );
};

export default FeatureIconsSection;
