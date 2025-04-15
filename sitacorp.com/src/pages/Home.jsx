// Home.jsx
import React from 'react';
import HeroSlider from '../components/HeaderSlider';
import SojournerSection from '../components/Home_Components/SojournerSection';
import FeatureIconsSection from '../components/Home_Components/FeatureIconsSection';
import ImageGrid from '../components/ImageGrid';
import TestimonialsSlider from '../components/Home_Components/TestimonialsSlider';

const Home = () => {
  return (
    <main className="global-animate">
      <HeroSlider />
      <SojournerSection />
      <FeatureIconsSection />
      <ImageGrid/>
      <TestimonialsSlider />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .global-animate > * {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        .global-animate > *:nth-child(1) {
          animation-delay: 0.2s;
        }

        .global-animate > *:nth-child(2) {
          animation-delay: 0.4s;
        }

        .global-animate > *:nth-child(3) {
          animation-delay: 0.6s;
        }

        .global-animate > *:nth-child(4) {
          animation-delay: 0.8s;
        }

        @media (prefers-reduced-motion: reduce) {
          .global-animate > * {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
