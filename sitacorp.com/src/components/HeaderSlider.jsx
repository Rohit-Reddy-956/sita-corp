import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroSlides = [
  {
    // title: 'Digital Transformation',
    // subtitle: 'Maximizing value for enterprises running SAP applications, Integration, Technology, and Analytics.',
    image: 'https://media-hosting.imagekit.io/cfb100a0dff045d4/Sita%20Corp%20Package%20Image.png?Expires=1839237929&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oJpPY8MNILsZNX3KCHla04TWD4a9njTJa41VQ~wUGgdLCO1F5l1EeSAhMPhNfHgV5ayssyVoNCl1MnL9xICTjQgZSMghQiwT-8ij-vGVQjLHZ~NN8ssk2UxqryBUC51aOWxLvbCEcrpfpSmWTWJzSnFsgSI1Di0X7oJDPrTBdkRRWqSKMF0~MTtPZ5R2~D1itJSSCACN1uQbe8h6tEeDuBdEKHoWSWKvAZwNIdaumiwSOXSerUNriuKn4vhcbBHmp7PId8A8tQL~3DcStNZJaK24QmioHrRzvVa8LXlKDD~s50Rr07~bHU7kT5WW4XKDbZct8RpWLXAqDZVq~t0WVw__',
  },
  {
    title: 'SAP Expertise',
    subtitle: 'Certified SAP Value Added Reseller delivering customized, scalable enterprise solutions.',
    image: 'https://sitacorp.com/img/banner-sap-2.jpg',
  },
  {
    title: 'Connected Intelligence',
    subtitle: 'Link field operations with core ERP using AI, analytics, and cloud-native workflows.',
    image: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399287.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740',
  }
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
    <FaChevronLeft className="text-blue-800" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
    <FaChevronRight className="text-blue-800" />
  </button>
);

const HeroSlider = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="relative mt-[70px] z-10">
      <Slider {...settings}>
        {heroSlides.map((slide, i) => (
          <div key={i}>
            <div
              className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-6 md:px-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-opacity-50"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400">{slide.title}</h1>
                  <p className="mt-4 text-lg text-black">{slide.subtitle}</p>
                  {/* <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <Link to="/services" className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">Explore Services</Link>
                    <button onClick={() => setShowModal(true)} className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Download Brochure</button>
                  </div> */}
                </div>

                {/* SAP Badge */}
                {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                  <img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg?uid=P96511205&ga=GA1.1.2135267610.1740638679&semt=ais_hybrid&w=740" alt="SAP Partner" className="h-28 object-contain" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Download Brochure</h2>
            <p className="text-sm text-gray-700 mb-4">Please enter your email to receive the brochure:</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Brochure sent!');
                setShowModal(false);
              }}
            >
              <input type="email" placeholder="you@example.com" required className="w-full border border-gray-300 px-4 py-2 rounded mb-4" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="text-gray-600 hover:text-gray-800">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
