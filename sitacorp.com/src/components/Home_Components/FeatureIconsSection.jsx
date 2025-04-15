import React from 'react';
import { FaCoins, FaChartBar, FaUserTie, FaShoppingCart } from 'react-icons/fa';

const features = [
  { icon: <FaCoins size={36} />, label: 'Finance' },
  { icon: <FaChartBar size={36} />, label: 'Procurement' },
  { icon: <FaUserTie size={36} />, label: 'Success Factors' },
  { icon: <FaShoppingCart size={36} />, label: 'Retail' }
];

const FeatureIconsSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20 text-center relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 animate-fadeIn">Enterprise Solutions We Serve</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white p-6 rounded-full shadow-md w-32 h-32 justify-center transform hover:scale-110 transition duration-300 animate-zoomIn delay-${index + 1}00`}
          >
            <div className="text-blue-700 mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-sm mt-10 animate-fadeIn delay-500">
        Growing list of modules enabled by managers like you
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-2 animate-fadeIn delay-600">And Many More...</h3>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default FeatureIconsSection;
