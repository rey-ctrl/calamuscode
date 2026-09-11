import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '18px' }}>
          Calamus<span style={{ color: '#D4AF37' }}>.</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #FFF 0%, #E6C687 50%, #C5A059 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Code
          </span>
        </span>
      </div>
      <div className="footer-links">
        <a href="#layanan">Layanan</a>
        <a href="#proses">Proses</a>
        <a href="#paket">Paket</a>
        <a
          href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
      <div>© 2026 Calamus.Code · Jasa Pembuatan Website · Jabodetabek</div>
    </footer>
  );
}
