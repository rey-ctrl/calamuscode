import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activate scroll-reveal animation observer
  useScrollReveal();

  return (
    <>
      {/* Noise Grain Overlay */}
      <div className="grain"></div>

      {/* Header & Navigation */}
      <Navbar />

      {/* Main Landing Site */}
      <div className="site">
        <Hero />

        <div className="section-wrap">
          <div className="divider"></div>
          <Services />

          <div className="divider"></div>
          <Process />

          <div className="divider"></div>
          <Pricing />

          <div className="divider"></div>
          <Testimonials />

          <div className="divider"></div>
          <CTASection />

          <div className="divider"></div>
          <Footer />
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </>
  );
}
