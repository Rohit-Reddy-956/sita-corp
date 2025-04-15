import { Link } from 'react-router-dom';
import { useState, } from 'react';
import ImageGrid from '../../components/ImageGrid';
const featureItems = [
    {
    //   icon: <FaSyncAlt size={32} className="text-yellow-400" />,
      title: "AI-Based Scheduling & Dispatching",
      desc: "Automate your workforce planning with AI-powered scheduling that considers availability, skills, location, and traffic conditions."
    },
    {
    //   icon: <FaMobileAlt size={32} className="text-yellow-400" />,
      title: "Mobile-First Field Execution",
      desc: "Empower technicians with access to job details, equipment history, and digital signatures — even in offline mode."
    },
    {
    //   icon: <FaDatabase size={32} className="text-yellow-400" />,
      title: "Real-Time Resource Visibility",
      desc: "Track job status, inventory, and technician location in real time for improved coordination and accountability."
    },
    {
    //   icon: <FaClipboardCheck size={32} className="text-yellow-400" />,
      title: "Equipment History & Contextual Insights",
      desc: "Give your team access to past resolutions and asset data to improve first-time fix rates and customer experience."
    },
    {
    //   icon: <FaMapMarkedAlt size={32} className="text-yellow-400" />,
      title: "Optimal Route Planning",
      desc: "Intelligent navigation cuts travel time, fuel cost, and idle hours."
    },
    {
    //   icon: <FaCheckCircle size={32} className="text-yellow-400" />,
      title: "Seamless Integration with SAP S/4HANA",
      desc: "End-to-end integration ensures data consistency across inventory, cost management, invoicing, and customer records."
    }
  ];
const FSM = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      await fetch("https://script.google.com/macros/s/your-web-app-id/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      setSuccessMessage("✅ Thank you! Your response has been recorded.");
      setShowContactModal(false); // Close the popup
  
      // Optionally clear the message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
  
    }
     catch (sucessful) {
      alert(sucessful);
    }
  };
  
  

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
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

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
        <h2 className="text-3xl font-bold">Transform Your Field Operations with SAP Field Service Management</h2>
      </div>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed animate-fadeIn">
      Deliver faster, smarter, and more efficient field service experiences with AI-powered scheduling, real-time visibility, and mobile-enabled execution.
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
      {/* Meta Info
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 animate-fadeIn">
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
        src="https://img.freepik.com/premium-vector/futuristic-glowing-low-polygonal-crab-isolated-dark-blue-background-seafood-astrological-symbol-cancer-modern-wireframe-mesh-design_67515-1078.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
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
        src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
        alt="SSAM Dashboard"
        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="animate-slideInLeft">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">SITA Corp SSAM Overview</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
      Modern field service is no longer about just completing jobs, it’s about delivering customer satisfaction, operational efficiency, and cost control. With SAP FSM, SITA Corp empowers businesses to streamline their entire service lifecycle from intelligent dispatching and resource planning to mobile job execution and real-time updates.
        Our SAP FSM solution is ideal for businesses in Utilities, Oil & Gas, Manufacturing, Medical Devices, and Engineering & Construction that want to elevate their field service operations and reduce overhead.
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
      <h2 className="text-3xl font-bold mb-6 text-white">Why Choose SITA Corp for SAP FSM?</h2>
      <ul className="space-y-4 text-lg text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Proven SAP FSM Implementations with real results
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Deep experience in SAP BTP, S/4HANA, and Digital Supply Chain
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Collaboration with SAP FSM Product Management for leading practices
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Starter packs for rapid deployment and quick ROI
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-400 text-2xl">✔</span>Quality testing integrated via Tricentis
        </li>
      </ul>
    </div>

    {/* Right: Image Side */}
    <div className="relative animate-fadeRight">
      <img
        src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399292.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740"
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
        percent: "+40%",
        title: "Faster Job Resolution",
        desc: "Boost customer loyalty with an improved post-sale experience.",
        color: "bg-green-200",
        icon: "👤"
      },
      {
        percent: "25%",
        title: "reduction in field service cost",
        desc: "Make it easy for customers to buy from you again, in less time.",
        color: "bg-pink-200",
        icon: "💰"
      },
      {
        percent: "2X",
        title: "increase in first-time fix rate",
        desc: "Encourage repeat purchases and build a loyal customer base for your brand.",
        color: "bg-purple-200",
        icon: "⚡"
      },
      {
        percent: "+29%",
        title: "Increase in average order value",
        desc: "Offer products that match customer preferences during the return and exchange process.",
        color: "bg-yellow-200",
        icon: "👏"
      },
      {
        percent: "+50%",
        title: "Real-time insights for smarter decisions",
        desc: "Streamline internal processes and reduce overhead with automated tools.",
        color: "bg-blue-200",
        icon: "⚙️"
      },
    //   {
    //     percent: "+60%",
    //     title: "Customer satisfaction",
    //     desc: "Deliver faster resolutions and more personalized service experiences.",
    //     color: "bg-red-200",
    //     icon: "🌟"
    //   }
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
      <section className="relative bg-white via-yellow-300 to-yellow-500 px-6 md:px-20 py-20 text-center text-black overflow-hidden" data-aos="fade-up">
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
      {successMessage && (
  <div className="text-green-700 font-medium text-center mb-4">
    {successMessage}
  </div>
)}

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
      {showContactModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div className="bg-white text-black rounded-lg p-6 w-full max-w-lg relative shadow-lg">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
        onClick={() => setShowContactModal(false)}
      >
        ✖
      </button>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 mb-4 rounded" required />
        <input type="email" name="email" placeholder="Email Address" className="w-full border p-2 mb-4 rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 mb-4 rounded" required />
        <textarea name="message" rows="3" placeholder="Message" className="w-full border p-2 mb-4 rounded" required></textarea>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
    
  </div>
)}

    </div>
  );
};

export default FSM;
