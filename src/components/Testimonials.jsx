import React from 'react';

const TESTIMONIALS = [
  {
    text: '"Awalnya panik karena deadline tugas akhir tinggal 3 hari. Calamus.Code langsung respon dan hasilnya melebihi ekspektasi — sistemnya berjalan sempurna saat presentasi!"',
    avatar: 'R',
    name: 'Rafi A.',
    role: 'Mahasiswa Informatika, Depok',
  },
  {
    text: '"Sesi 1-on-1 nya worth banget. Kita ketemuan langsung di kafe, dia langsung coding sambil njelasin. Toko online UMKM saya jadi dalam 5 hari, dan saya ngerti cara ngelolanya."',
    avatar: 'S',
    name: 'Siti N.',
    role: 'Pemilik UMKM, Bekasi',
  },
  {
    text: '"Portfolio baru saya jadi keren banget. Desainnya modern, animasinya smooth. Langsung dapat interview dari beberapa perusahaan setelah link portfolio saya share ke HR."',
    avatar: 'D',
    name: 'Dimas P.',
    role: 'Fresh Graduate, Jakarta Selatan',
  },
];

export default function Testimonials() {
  return (
    <div id="klien">
      <div className="section-label reveal">Kata Klien</div>
      <h2 className="section-heading reveal stagger-1">
        Mereka sudah <em>punya websitenya.</em>
      </h2>
      <p className="section-sub reveal stagger-2">
        Lebih dari 50 proyek selesai. Ini yang mereka bilang.
      </p>

      <div className="testi-grid">
        {TESTIMONIALS.map((t, idx) => (
          <div key={t.name} className={`testi-card reveal stagger-${idx + 1}`}>
            <div className="testi-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="testi-text">{t.text}</div>
            <div className="testi-author">
              <div className="testi-avatar">{t.avatar}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
