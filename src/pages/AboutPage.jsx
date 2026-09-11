import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <div className="grain"></div>
      <Navbar />
      <div className="site">
        <div className="section-wrap" style={{ paddingTop: '80px' }}>
          <AboutUs />
          <div className="divider"></div>
          <Footer />
        </div>
      </div>
      <FloatingWhatsApp />
    </>
  );
}
