import React from 'react';

export default function Services() {
  return (
    <div id="layanan">
      <div className="section-label reveal">Layanan</div>
      <h2 className="section-heading reveal stagger-1">
        Semua yang kamu butuhkan,<br />
        <em>kami kerjakan.</em>
      </h2>
      <p className="section-sub reveal stagger-2">
        Dari desain hingga deployment — kami tangani semuanya agar kamu bisa fokus pada bisnis.
      </p>

      <div className="services-grid">
        {/* Card 1 */}
        <div className="service-card reveal stagger-1">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 12h8M8 8h8M8 16h4" />
            </svg>
          </div>
          <div className="service-title">Landing Page</div>
          <div className="service-desc">
            Halaman tunggal yang menjual — cocok untuk promosi produk, event, atau personal brand. Desain premium, loading cepat, mobile-friendly.
          </div>
          <div className="service-tags">
            <span className="tag">HTML/CSS</span>
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
            <span className="tag">SEO-ready</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="service-card reveal stagger-2">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
          </div>
          <div className="service-title">Company Profile</div>
          <div className="service-desc">
            Website multi-halaman untuk bisnis dan organisasi. Tampil profesional di hadapan klien dan investor dengan desain yang representatif.
          </div>
          <div className="service-tags">
            <span className="tag">Multi-page</span>
            <span className="tag">CMS</span>
            <span className="tag">Responsif</span>
            <span className="tag">Animasi</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card reveal stagger-3">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 0118 17.73a2 2 0 01-2 2.19z" />
            </svg>
          </div>
          <div className="service-title">Portfolio & CV Online</div>
          <div className="service-desc">
            Tampilkan karya dan skill-mu secara online. Ideal untuk freelancer, desainer, developer, dan fresh graduate yang ingin stand out.
          </div>
          <div className="service-tags">
            <span className="tag">Animasi</span>
            <span className="tag">Dark/Light</span>
            <span className="tag">PDF export</span>
          </div>
        </div>

        {/* Featured Card: 1-on-1 Session */}
        <div className="service-card featured reveal stagger-1">
          <div className="featured-inner">
            <div>
              <div className="featured-title">
                Sesi <em>1-on-1</em><br />
                Tatap Muka
              </div>
              <div className="featured-desc">
                Kamu bisa ketemu langsung dengan developer Calamus.Code untuk konsultasi, review desain, atau ngoding bareng. Khusus untuk kamu yang ada di wilayah Jabodetabek — tanpa biaya tambahan untuk paket premium.
              </div>
              <div className="featured-cta">
                <a
                  href="https://wa.me/6289636209169?text=Halo%20Calamus.Code,%20saya%20ingin%20konsultasi%20sesi%201-on-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green"
                  style={{ height: '44px', padding: '0 20px', fontSize: '14px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Jadwalkan Sesi
                </a>
                <a href="#paket" className="btn btn-ghost" style={{ height: '44px', padding: '0 20px', fontSize: '14px' }}>
                  Lihat Paket →
                </a>
              </div>
              <div className="area-tags">
                <span className="area-tag">Jakarta</span>
                <span className="area-tag">Bogor</span>
                <span className="area-tag">Depok</span>
                <span className="area-tag">Tangerang</span>
                <span className="area-tag">Bekasi</span>
              </div>
            </div>
            <div className="session-benefits">
              <div className="benefit-row">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="benefit-text">
                  <div className="benefit-title">Konsultasi Langsung</div>
                  <div className="benefit-sub">Diskusikan kebutuhan website-mu secara tatap muka, lebih cepat dari chat.</div>
                </div>
              </div>
              <div className="benefit-row">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="benefit-text">
                  <div className="benefit-title">Screen Sharing & Live Coding</div>
                  <div className="benefit-sub">Lihat langsung proses pengerjaan — belajar sambil websitemu dibangun.</div>
                </div>
              </div>
              <div className="benefit-row">
                <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="benefit-text">
                  <div className="benefit-title">Lokasi Fleksibel</div>
                  <div className="benefit-sub">Bisa di kafe, kampus, atau lokasi pilihanmu — selama masih di Jabodetabek.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="service-card reveal stagger-2">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <path d="M3 3h18v18H3z" />
              <path d="M8 9l4 4 4-4" />
            </svg>
          </div>
          <div className="service-title">Toko Online / E-Commerce</div>
          <div className="service-desc">
            Website jual-beli lengkap dengan keranjang belanja, manajemen produk, dan integrasi payment gateway lokal (Midtrans/Xendit).
          </div>
          <div className="service-tags">
            <span className="tag">Cart</span>
            <span className="tag">Midtrans</span>
            <span className="tag">Admin panel</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="service-card reveal stagger-3">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div className="service-title">Tugas & Skripsi Web</div>
          <div className="service-desc">
            Bantuan pengerjaan tugas kuliah, proyek akhir, atau sistem informasi untuk skripsi/TA. Berpengalaman menangani berbagai framework akademis.
          </div>
          <div className="service-tags">
            <span className="tag">Laravel</span>
            <span className="tag">CodeIgniter</span>
            <span className="tag">Bootstrap</span>
            <span className="tag">MySQL</span>
          </div>
        </div>

        {/* Card 6 */}
        <div className="service-card reveal stagger-4">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="service-title">Maintenance & Revisi</div>
          <div className="service-desc">
            Website sudah ada tapi butuh update, perbaikan bug, atau tambah fitur? Kami tangani dengan cepat, tanpa perlu rebuild dari awal.
          </div>
          <div className="service-tags">
            <span className="tag">Bug fix</span>
            <span className="tag">Update konten</span>
            <span className="tag">Optimasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
