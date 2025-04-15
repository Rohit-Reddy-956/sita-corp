import React from 'react';
import { FaLink, FaUsers, FaFileInvoice } from 'react-icons/fa';

const SojournerSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 md:px-20 text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 animate-fadeInLeft">
            Bring All Your Data into OnePlace
          </h2>
          <p className="text-xl mb-4 animate-fadeIn delay-200">
            With our proven, industry-specific <span className="text-orange-400 font-semibold">SOJOURNER™ Platform</span>
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-4 text-white">
            <li className="flex items-start gap-3 animate-fadeIn delay-300">
              <FaLink className="text-red-400 mt-1" /> Connect to multiple disparate applications and IoT
            </li>
            <li className="flex items-start gap-3 animate-fadeIn delay-400">
              <FaUsers className="text-blue-300 mt-1" /> Collaborate more effectively with partners
            </li>
            <li className="flex items-start gap-3 animate-fadeIn delay-500">
              <FaFileInvoice className="text-green-300 mt-1" /> Execute transactions & reports
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex justify-center animate-zoomIn delay-600">
          <img
            src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399290.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
            alt="Sojourner UI"
            className="w-full max-w-md rounded shadow-xl"
          />
        </div>
      </div>

      {/* Embedded Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 1s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 1s ease-out forwards; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default SojournerSection;
