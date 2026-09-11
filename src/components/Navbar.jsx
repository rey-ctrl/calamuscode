import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'layanan', label: 'Layanan' },
  { id: 'proses', label: 'Proses' },
  { id: 'paket', label: 'Paket' },
  { id: 'klien', label: 'Klien' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Scroll listener for header blur & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 140;
      let currentSection = '';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key & resize to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 901) closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sync menuOpen state with body class
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
        <a href="#hero" className="logo appear appear--scale" style={{ '--d': '.08s' }}>
          <img src="/logo-square.png" alt="Calamus.Code Logo" className="logo-mark-img" />
          <span>
            Calamus<span className="logo-dot">.</span><span className="logo-code">Code</span>
          </span>
        </a>

        <nav id="site-nav" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-pill ${activeSection === item.id ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

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

      <div className="menu-backdrop" onClick={closeMenu}></div>
    </>
  );
}
