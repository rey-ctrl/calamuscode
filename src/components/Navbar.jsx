import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Header blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key & resize to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') closeMenu(); };
    const handleResize = () => { if (window.innerWidth >= 901) closeMenu(); };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sync body class for mobile menu backdrop
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        {/* Logo */}
        <a href="#hero" className="logo appear appear--scale" style={{ '--d': '.08s' }}>
          <img src="/logo-new.png" alt="Calamus.Code Logo" className="logo-mark-img" />
          <span>
            Calamus<span className="logo-dot">.</span><span className="logo-code">Code</span>
          </span>
        </a>

        {/* Right side: CTA button + burger */}
        <div className="header-right">
          <a
            href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid appear appear--scale"
            style={{ '--d': '.34s' }}
          >
            Hubungi Kami
          </a>
          <button
            className="burger appear appear--scale"
            style={{ '--d': '.34s' }}
            onClick={toggleMenu}
            aria-controls="site-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <nav
        id="site-nav"
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        aria-label="Navigasi utama"
      >
        <div className="mobile-nav-links">
          <a href="#layanan" className="mobile-nav-link" onClick={closeMenu}>Layanan</a>
          <a href="#proses" className="mobile-nav-link" onClick={closeMenu}>Proses</a>
          <a href="#paket" className="mobile-nav-link" onClick={closeMenu}>Paket</a>
          <a href="#klien" className="mobile-nav-link" onClick={closeMenu}>Klien</a>
        </div>
        <a
          href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid mobile-nav-cta"
          onClick={closeMenu}
        >
          Hubungi Kami
        </a>
      </nav>

      <div className="menu-backdrop" onClick={closeMenu}></div>
    </>
  );
}
