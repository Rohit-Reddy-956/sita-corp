import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Brian Chen',
    title: 'Chief Information Officer, IIE',
    logo: 'https://sitacorp.com/img/clients/iie.png',
    quote:
      'We employed Sita Corp to lead us through our implementation as having been involved with them before - and having seen the quality of their work - I knew that they could get the job done.'
  },
  {
    name: 'Maria Lopez',
    title: 'IT Director, HealthPrime',
    logo: 'https://sitacorp.com/img/clients/healthprime.png',
    quote:
      'Sita Corp made our transition seamless. Their expertise in integration and cloud transformation saved us months of effort.'
  }
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-20 text-center text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/abstract-blur-office-building-wallpaper_7180-421.jpg')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-10 animate-fadeIn">Customer Testimonials</h2>

        <div className="max-w-4xl mx-auto animate-fadeIn delay-300">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-lg p-8 shadow-xl flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  className="w-20 h-20 object-contain rounded-full shadow-md"
                />
                <div className="text-left">
                  <div className="text-gray-600 text-xl mb-4 relative">
                    <FaQuoteLeft className="inline-block text-blue-400 mr-2" />
                    <span className="italic">{t.quote}</span>
                    <FaQuoteRight className="inline-block text-blue-400 ml-2" />
                  </div>
                  <p className="text-lg font-bold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Embedded Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
