import React from 'react';

const ImageGrid = () => {
  return (
    <div className="text-gray-800 w-full">
      <section className="w-full px-6 md:px-20 py-20 bg-gray-100" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-12 text-center text-blue-800">Our Clients</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              src: "https://sitacorp.com/img/customers/nippon.jpg",
              desc: "NIPPO"
            },
            {
              src: "https://sitacorp.com/img/customers/kswiss-lg.jpg",
              desc: "K-Swiss"
            },
            {
              src: "https://sitacorp.com/img/customers/johnson-lg.jpg",
              desc: "Johnson and Johnson"
            },
            {
              src: "https://sitacorp.com/img/customers/cafam.jpg",
              desc: "CA FAM"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <img
                src={item.src}
                alt={item.desc}
                className="w-full h-85 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium px-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Animation */}
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
      `}</style>
    </div>
  );
};

export default ImageGrid;
