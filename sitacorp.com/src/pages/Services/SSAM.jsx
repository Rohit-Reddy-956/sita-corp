import { Link } from 'react-router-dom';
import { useState, } from 'react';
import ImageGrid from '../../components/ImageGrid';
import ContactFormModal from '../../components/ContactFormModal';
const featureItems = [
    {
    //   icon: <FaSyncAlt size={32} className="text-yellow-400" />,
      title: "Online & Offline Asset Maintenance",
      desc: "Technicians can manage work orders, time tracking, inventory, and checklists — even without connectivity."
    },
    {
    //   icon: <FaMobileAlt size={32} className="text-yellow-400" />,
      title: "Intuitive Mobile UI",
      desc: "SSAM’s simplified, role-based interface ensures quick adoption and actionable visibility for field teams."
    },
    {
    //   icon: <FaDatabase size={32} className="text-yellow-400" />,
      title: "Real-Time Asset Monitoring",
      desc: "Gain instant updates on service status, maintenance history, and equipment conditions for smarter planning."
    },
    {
    //   icon: <FaClipboardCheck size={32} className="text-yellow-400" />,
      title: "Compliance-Ready Maintenance",
      desc: "Access digital safety checklists and ensure every asset is maintained as per regulatory standards."
    },
    {
    //   icon: <FaMapMarkedAlt size={32} className="text-yellow-400" />,
      title: "GIS & Geospatial Integration",
      desc: "Visualize assets on a map, monitor job locations, and assign tasks more effectively."
    },
    {
    //   icon: <FaCheckCircle size={32} className="text-yellow-400" />,
      title: "SAP S/4HANA Integration",
      desc: "Keep your master data, inventory, and cost reporting fully synchronized with your SAP digital core."
    }
  ];
const SSAM = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

  return (
    <div className="text-gray-800">

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-xl font-bold text-blue-800">SITA Corp</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-800 focus:outline-none">
            <span className="block w-6 h-0.5 bg-blue-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-blue-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-blue-800"></span>
          </button>
        </div>
        {menuOpen && (
          <div className="px-6 pb-4">
            <Link to="/services/ssam" className="block py-2 text-blue-700">SSAM</Link>
            <Link to="/services/taas" className="block py-2 text-blue-700">TAAS</Link>
            <Link to="/services/cloud" className="block py-2 text-blue-700">Cloud</Link>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section
  className="relative bg-[#f1f1f1] text-white pt-8 pb-20 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat mt-[70px]"
  style={{
    backgroundImage: "url('https://img.freepik.com/premium-photo/businessman-search-new-opportunities-international-business-typing-laptop-background-world-map-hologram_269648-16699.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740')"
  }}
  data-aos="fade-up"
>
  {/* Optional Dark Overlay for Better Text Visibility */}
  <div className="absolute inset-0   bg-black bg-opacity-60 z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Text */}
    <div className="animate-fadeInLeft" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
      <div className="flex items-center gap-3 mb-6 animate-fadeIn">
        <img
          src="https://img.freepik.com/free-photo/beautiful-landscape-phu-chi-fa-woman-hand-holding-umbrella-phu-chi-fa-national-park-chiang-rai-province-thailand_335224-1022.jpg"
          alt="SSAM"
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-3xl font-bold">Maximize Asset Uptime with SAP Service and Asset Management (SSAM)</h2>
      </div>
      <p className="text-gray-300 text-white mb-6 leading-relaxed animate-fadeIn">
      Maintain your equipment smarter with SAP SSAM, designed to streamline maintenance operations, reduce downtime, and ensure compliance through real-time insights and mobile-first execution.
      </p>
      <div className="flex gap-4 mb-6 animate-slideUp">
        <button
          onClick={() => setShowContactModal(true)}
          className="bg-black text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-800 transition"
        >
          📞 Book a Consultation
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Download Brochure
        </button>
      </div>
      {/* Meta Info */}
      {/* <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 animate-fadeIn">
        <div>
          <p className="text-gray-300">Page Type</p>
          <p className="text-green-400">Landing</p>
        </div>
        <div>
          <p className="text-gray-300">Platform</p>
          <p className="text-green-400">SAP / BTP</p>
        </div>
        <div>
          <p className="text-gray-300">Industry</p>
          <p className="text-green-400">Manufacturing</p>
        </div>
        <div>
          <p className="text-gray-300">Use Case</p>
          <p className="text-green-400">Asset Maintenance</p>
        </div>
      </div> */}
    </div>

    {/* Right: Image */}
    <div className="relative animate-fadeInRight z-10">
      <img
        src="https://img.freepik.com/premium-photo/concept-business-growth-profit-development-success-seedling-are-growing-from-rich-soil_117255-1665.jpg"
        alt="SSAM Visual"
        className="rounded-lg shadow-2xl w-full object-cover"
      />
      <div className="absolute top-4 right-4 flex flex-col gap-2 animate-fadeIn">
        <button className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 text-xs font-semibold">Start Free</button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-700 text-xs font-semibold">View Docs</button>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      0% { opacity: 0; transform: translateX(40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeInLeft {
      animation: fadeInLeft 1s ease-out forwards;
    }
    .animate-fadeInRight {
      animation: fadeInRight 1s ease-out forwards;
    }
    .animate-slideUp {
      animation: slideUp 1s ease-out forwards;
    }
    .animate-fadeIn {
      animation: fadeIn 1.2s ease-out forwards;
    }
  `}</style>
</section>




      {/* Overview */}
      <section className="px-6 md:px-20 py-20 bg-white" data-aos="fade-up">
  <div className="grid md:grid-cols-2 gap-12 items-center">
  <div className="relative overflow-hidden rounded-lg shadow-xl animate-fadeZoom">
      <img
        src="https://img.freepik.com/free-photo/dynamic-data-visualization-3d_23-2151904316.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
        alt="SSAM Dashboard"
        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="animate-slideInLeft">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">SITA CORP SSAM OVERVIEW</h2>
      <p className="text-gray-700 text-lg leading-relaxed m-10px">
      In asset-heavy industries, the cost of unplanned downtime is steep — and traditional maintenance methods no longer make the cut. That’s where <span className='font-bold'>SAP Service and Asset Management (SSAM)</span> steps in.
      </p>
      <br/>
      <p className="text-gray-700 text-lg leading-relaxed m-10px">
      At SITA Corp, we implement SAP SSAM to help clients modernize how they manage work orders, monitor asset
       health, and ensure field teams stay aligned — whether online or offline. Designed for businesses 
       in Utilities, Oil & Gas, Manufacturing, and Engineering, SSAM empowers you to keep operations running
        efficiently, safely, and compliantly.
      </p>
      {/* <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
        <li>Empower technicians with mobile-first workflows</li>
        <li>Monitor assets in real-time with advanced analytics</li>
        <li>Ensure compliance and safety through digital checklists</li>
      </ul> */}
    </div>

  </div>

  {/* Custom animation styles */}
  <style jsx>{`
    @keyframes slideInLeft {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeZoom {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-slideInLeft {
      animation: slideInLeft 1s ease-out forwards;
    }
    .animate-fadeZoom {
      animation: fadeZoom 1s ease-out forwards;
    }
  `}</style>
</section>


      {/* Features */}

<section className="bg-[#0a0a0a] py-20 px-6 md:px-20 text-white" data-aos="fade-up">
  <h2 className="text-3xl font-semibold text-center mb-16">Key Features of SAP SSAM</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {featureItems.map((item, index) => (
      <div
        key={index}
        className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate-fadeInUp"
        style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'both' }}
      >
        {/* <div className="mb-4 h-24">
          <Lottie animationData={animatedIcons[index]} loop={true} className="w-24 h-24 mx-auto" />
        </div> */}
        <h3 className="text-xl font-bold mb-2 text-white animate-textReveal">
          {item.title.split(' ').map((word, wIndex) => (
            <span key={wIndex} className="inline-block opacity-0 animate-lineFade" style={{ animationDelay: `${wIndex * 0.15}s`, animationFillMode: 'both' }}>{word} </span>
          ))}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed animate-fadeIn" style={{ animationDelay: `${index * 0.5}s` }}>{item.desc}</p>
      </div>
    ))}
  </div>

  <style jsx>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes lineFade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-lineFade {
      animation: lineFade 0.5s ease-out forwards;
    }
  `}</style>
</section>




      {/* Why SITA Corp */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-20 py-20 overflow-hidden" data-aos="fade-up">
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

    {/* Left: Text Content */}
    <div className="animate-fadeLeft">
      <h2 className="text-3xl font-bold mb-6 text-white">Why Choose SITA Corp for SAP SSAM?</h2>
      <ul className="space-y-4 text-lg text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Deep experience in Enterprise Asset Management and Customer Service
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span> Collaboration with SAP’s SSAM product management team
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span> Pre-built starter packs for faster time-to-value
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Extensive integration with SAP BTP, S/4HANA, ASPM, and CX solutions
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Reliable testing support via Tricentis for risk-free go-live
        </li>
      </ul>
    </div>

    {/* Right: Image Side */}
    <div className="relative animate-fadeRight">
      <img
        src="https://img.freepik.com/premium-photo/businessman-touching-virtual-screen-icon-business-erp-enterprise-resource-planning-erp-document-management-concept_55997-2017.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
        alt="Why Choose SITA"
        className="rounded-xl shadow-2xl object-cover w-full h-full max-h-[500px]"
      />
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-fadeLeft {
      animation: fadeLeft 1s ease-out forwards;
    }
    .animate-fadeRight {
      animation: fadeRight 1s ease-out forwards;
    }
  `}</style>
</section>


      {/* Benefits */}
      <section className="px-6 md:px-20 py-20 bg-white text-center" data-aos="fade-up">
  <h2 className="text-3xl font-semibold mb-12 text-blue-800">Client Benefits</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        percent: "+35%",
        title: "Reduce equipment downtime",
        desc: "Boost customer loyalty with an improved post-sale experience.",
        color: "bg-green-200",
        icon: "👤"
      },
      {
        percent: "+81%",
        title: "Improve asset lifecycle efficiency",
        desc: "Make it easy for customers to buy from you again, in less time.",
        color: "bg-pink-200",
        icon: "💰"
      },
      {
        percent: "+71%",
        title: "Ensure compliance with minimal manual work",
        desc: "Encourage repeat purchases and build a loyal customer base for your brand.",
        color: "bg-purple-200",
        icon: "⚡"
      },
      {
        percent: "+29%",
        title: "Centralize maintenance operations for multiple roles",
        desc: "Offer products that match customer preferences during the return and exchange process.",
        color: "bg-yellow-200",
        icon: "👏"
      },
      {
        percent: "+50%",
        title: "Boost technician productivity with mobile access",
        desc: "Streamline internal processes and reduce overhead with automated tools.",
        color: "bg-blue-200",
        icon: "⚙️"
      },
      {
        percent: "+60%",
        title: "Customer satisfaction",
        desc: "Deliver faster resolutions and more personalized service experiences.",
        color: "bg-red-200",
        icon: "🌟"
      }
    ].map((item, i) => (
      <div
        key={i}
        className={`${item.color} relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-left animate-fadeInUp`}
        style={{ animationDelay: `${i * 0.2}s`, animationFillMode: "both" }}
      >
        <div className="text-4xl font-bold mb-2">{item.percent}</div>
        <h3 className="text-md font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-800 leading-snug">{item.desc}</p>
        <div className="absolute top-4 right-4 text-3xl">{item.icon}</div>
      </div>
    ))}
  </div>

  <style jsx>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease forwards;
    }
  `}</style>
</section>

        <ImageGrid/>
      {/* CTA */}
      <section className="relative bg-white px-6 md:px-20 py-20 text-center text-black overflow-hidden" data-aos="fade-up">
  {/* Decorative Background Graphics */}
  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat mix-blend-overlay"></div>

  {/* Content Container */}
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug drop-shadow-md">
      Ready to modernize your asset maintenance?
    </h2>
    <p className="mb-8 text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
      Let us show you how SAP SSAM can transform field operations and asset uptime with precision, speed, and reliability.
    </p>

    {/* Call to Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => setShowModal(true)}
        className="bg-white text-yellow-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-100 transition duration-300"
      >
        📄 Download Brochure
      </button>

      <button
  onClick={() => setShowContactModal(true)}
  className="bg-black text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-800 transition"
>
📞 Book a Consultation
</button>

    </div>


    {/* Stats or Visual Teasers */}
    <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-yellow-900 font-medium">
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-md shadow">
        <p className="text-2xl font-bold">+40%</p>
        <p>Faster Work Order Execution</p>
      </div>
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-md shadow">
        <p className="text-2xl font-bold">99.8%</p>
        <p>Data Accuracy Synced with SAP</p>
      </div>
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-md shadow">
        <p className="text-2xl font-bold">24/7</p>
        <p>Mobile Access Anywhere</p>
      </div>
    </div>
  </div>
</section>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-md max-w-md w-full text-center">
            <h3 className="text-xl font-semibold mb-4">Download SSAM Brochure</h3>
            <p className="text-gray-600 mb-4">Click below to start your download or contact our team for more information.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assets/ssam-brochure.pdf" download className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Download</a>
              <button onClick={() => setShowModal(false)} className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setShowContactModal(true)}>Book a Consultation</button>
      <ContactFormModal show={showContactModal} onClose={() => setShowContactModal(false)} />

    </div>
  );
};

export default SSAM;
