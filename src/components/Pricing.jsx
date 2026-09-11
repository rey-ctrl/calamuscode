import React from 'react';

export default function Pricing() {
  return (
    <div id="paket">
      <div className="section-label reveal">Paket Harga</div>
      <h2 className="section-heading reveal stagger-1">
        Transparan, <em>tanpa kejutan.</em>
      </h2>
      <p className="section-sub reveal stagger-2">
        Pilih paket yang sesuai kebutuhanmu. Semua paket sudah termasuk source code dan free revisi.
      </p>

      <div className="pricing-grid">
        {/* Starter */}
        <div className="pricing-card reveal stagger-1">
          <div className="pricing-name">Starter</div>
          <div className="pricing-price">
            <sup>Rp</sup> 800<span className="per"> RB</span>
          </div>
          <div className="pricing-desc">Cocok untuk tugas kuliah, landing page sederhana, atau portfolio dasar.</div>
          <div className="pricing-divider"></div>
          <div className="pricing-features">
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">1 halaman (single page)</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Desain responsif (mobile-friendly)</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Source code diberikan</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">3 kali revisi</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#4a4a4a' }}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text muted">Sesi 1-on-1 (tidak termasuk)</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#4a4a4a' }}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text muted">Backend / database (tidak termasuk)</span>
            </div>
          </div>
          <div className="pricing-card-btn">
            <a
              href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20pesan%20Paket%20Starter"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ width: '100%', height: '44px', fontSize: '14px' }}
            >
              Pesan Starter
            </a>
          </div>
        </div>

        {/* Pro — POPULAR */}
        <div className="pricing-card popular reveal stagger-2">
          <div className="popular-tag">Terpopuler</div>
          <div className="pricing-name">Pro</div>
          <div className="pricing-price">
            <sup>Rp</sup> 1.5 - 2<span className="per"> Juta</span>
          </div>
          <div className="pricing-desc">Untuk bisnis, UMKM, atau proyek serius yang butuh tampilan dan fitur premium.</div>
          <div className="pricing-divider"></div>
          <div className="pricing-features">
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Hingga 5 halaman</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Desain premium + animasi dasar</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Optimasi SEO on-page</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Revisi tidak terbatas</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Garansi 30 hari bug fix</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text" style={{ color: '#4ade80', fontWeight: 600 }}>
                Sesi 1-on-1 (Jabodetabek) ✓
              </span>
            </div>
          </div>
          <div className="pricing-card-btn">
            <a
              href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20pesan%20Paket%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ width: '100%', height: '44px', fontSize: '14px' }}
            >
              Pesan Pro
            </a>
          </div>
        </div>

        {/* Enterprise / Custom */}
        <div className="pricing-card reveal stagger-3">
          <div className="pricing-name">Custom</div>
          <div className="pricing-price" style={{ fontSize: '28px', paddingTop: '6px' }}>
            Hubungi kami
          </div>
          <div className="pricing-desc">Untuk sistem informasi kompleks, web app full-stack, atau e-commerce dengan backend.</div>
          <div className="pricing-divider"></div>
          <div className="pricing-features">
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Halaman tidak terbatas</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Backend + database (MySQL/Supabase)</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Autentikasi & role management</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Integrasi API / payment gateway</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text">Support prioritas & maintenance</span>
            </div>
            <div className="pricing-feat">
              <svg className="feat-check" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="feat-text" style={{ color: '#4ade80', fontWeight: 600 }}>
                Sesi 1-on-1 multiple (Jabodetabek) ✓
              </span>
            </div>
          </div>
          <div className="pricing-card-btn">
            <a
              href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20diskusi%20Paket%20Custom"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ width: '100%', height: '44px', fontSize: '14px' }}
            >
              Diskusi Kebutuhan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
