import React from 'react';

const STEPS = [
  {
    num: 1,
    title: 'Konsultasi Gratis',
    desc: 'Ceritakan kebutuhanmu via WhatsApp atau langsung tatap muka. Kami dengarkan, lalu rekomendasikan solusi yang paling tepat dan efisien.',
    chip: 'Gratis · Tanpa komitmen',
    chipGreen: true,
  },
  {
    num: 2,
    title: 'Briefing & Estimasi',
    desc: 'Kami siapkan proposal singkat lengkap dengan estimasi biaya dan timeline. Tidak ada biaya tersembunyi.',
    chip: '1–2 jam setelah konsultasi',
    chipGreen: false,
  },
  {
    num: 3,
    title: 'Pengerjaan & Update',
    desc: 'Proses coding dimulai. Kamu dapat progress update real-time via chat. Bisa pantau langsung di sesi 1-on-1 jika kamu Jabodetabek.',
    chip: 'Update tiap hari kerja',
    chipGreen: true,
    active: true,
  },
  {
    num: 4,
    title: 'Revisi & Finalisasi',
    desc: 'Kamu punya hak revisi sampai puas (dalam scope yang disepakati). Kami pastikan hasilnya sesuai ekspektasimu.',
    chip: 'Revisi tidak terbatas',
    chipGreen: false,
  },
  {
    num: 5,
    title: 'Deployment & Handover',
    desc: 'Website live! Kami bantu deploy ke hosting pilihanmu dan serahkan semua file source code. Garansi 30 hari bug fix gratis.',
    chip: 'Garansi 30 hari',
    chipGreen: true,
  },
];

export default function Process() {
  return (
    <div id="proses">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <div className="section-label reveal">Cara Kerja</div>
          <h2 className="section-heading reveal stagger-1">
            Dari chat ke website<br />
            <em>dalam hitungan hari.</em>
          </h2>
          <p className="section-sub reveal stagger-2" style={{ marginBottom: 0 }}>
            Prosesnya simpel dan transparan — kamu selalu tahu statusnya.
          </p>
        </div>
        <div className="steps-timeline">
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className={`step-item ${step.active ? 'active-step' : ''} reveal stagger-${idx + 1}`}
            >
              <div className="step-num-circle">{step.num}</div>
              <div className="step-content">
                <div className="step-content-title">{step.title}</div>
                <div className="step-content-desc">{step.desc}</div>
                <span className={`step-chip ${step.chipGreen ? 'chip-green' : ''}`}>
                  {step.chip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
