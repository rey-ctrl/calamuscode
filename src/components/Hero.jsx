import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.65));
      setVideoOpacity(fade);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Video Background ── */}
      <div className="video-wrap" id="videoWrap" style={{ opacity: videoOpacity }}>
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4"
        ></video>
        <div className="hero-video-scrim"></div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="hero" id="hero">
        <div className="hero-copy">
          <h1 className="headline">
            <span className="headline-line appear appear--mask" style={{ '--d': '.46s' }}>
              Website impianmu jadi
            </span>
            <span className="headline-line appear appear--mask" style={{ '--d': '.66s' }}>
              nyata <em>cepat & rapi.</em>
            </span>
          </h1>

          <p className="lede appear appear--soft" style={{ '--d': '.86s', animationDuration: '1.25s' }}>
            Calamus.Code hadir sebagai mitra coding-mu. Kami bantu wujudkan website profesional — dari landing page, portfolio, hingga web app — dengan sesi 1-on-1 eksklusif untuk area Jabodetabek.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid appear appear--btn"
              style={{ '--d': '1.0s' }}
            >
              Pesan Sekarang
            </a>
            <a
              href="#layanan"
              className="btn btn-ghost appear appear--side"
              style={{ '--d': '1.14s' }}
            >
              Lihat Layanan →
            </a>
          </div>
        </div>

        <div className="scroll-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          scroll
        </div>

        {/* Trust strip */}
        <div className="trust-strip">
          <div className="trust-item appear" style={{ '--d': '1.2s', animationName: 'in-soft' }}>
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 12l2 2 4-4M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z" />
            </svg>
            100% revisi sampai puas
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item appear" style={{ '--d': '1.3s', animationName: 'in-soft' }}>
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Pengerjaan 3–7 hari kerja
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item appear" style={{ '--d': '1.4s', animationName: 'in-soft' }}>
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            10+ proyek selesai
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item appear" style={{ '--d': '1.5s', animationName: 'in-soft' }}>
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            1-on-1 tatap muka · Jabodetabek
          </div>
        </div>
      </section>
    </>
  );
}
