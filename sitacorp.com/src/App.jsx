import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs1"
import Contact from "./pages/Contact";
import { useEffect } from "react";

// Service Pages
import SAPConsulting from "./pages/Services/SAPConsulting";
import CloudSolutions from "./pages/Services/CloudSolutions";
import SupportServices from "./pages/Services/SupportServices";
import SSAM from "./pages/Services/SSAM";
import FSM from "./pages/Services/FSM";

// Industry Pages
import Manufacturing from "./pages/Industries/Manufacturing";
import Retail from "./pages/Industries/Retail";
import PublicSector from "./pages/Industries/PublicSector";

// Technology Pages
import SAPS4HANA from "./pages/Technology/SAPS4HANA";
// import AIandML from "./pages/Technology/";
import IoTIntegration from "./pages/Technology/IoTIntegration";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,        // animation duration in ms
      once: true,            // whether animation should happen only once
      easing: 'ease-out',    // easing function
      delay: 100             // delay for all elements
    });
  }, []);
  return (
    <Router>
      
      <Header className="pt-8 pb-20"/>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/services/sap-consulting" element={<SAPConsulting />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/support-services" element={<SupportServices />} />
        <Route path="/services/SSAM-solutions" element={<SSAM/>} />
        <Route path="/services/fsm-solutions" element={<FSM />} />


        {/* Industries */}
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/industries/public-sector" element={<PublicSector />} />

        {/* Technology */}
        <Route path="/technology/sap-s4-hana" element={<SAPS4HANA />} />
        {/* <Route path="/technology/ai-ml" element={<AIandML />} /> */}
        <Route path="/technology/iot-integration" element={<IoTIntegration />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
