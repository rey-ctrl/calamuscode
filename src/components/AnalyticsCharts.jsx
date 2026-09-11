import React from 'react';
import { BarChart3, PieChart, Zap, Shield, Sparkles } from 'lucide-react';

const modelUsage = [
  { model: 'Gemini 3.6 Flash (High)', percentage: 65, color: '#a78bfa', tokens: '14.2M tokens' },
  { model: 'Claude 3.7 Sonnet', percentage: 22, color: '#ec4899', tokens: '4.8M tokens' },
  { model: 'GPT-4o / Codex Engine', percentage: 13, color: '#609f89', tokens: '2.9M tokens' }
];

const weeklyThroughput = [
  { day: 'Sen', tokens: 420 },
  { day: 'Sel', tokens: 680 },
  { day: 'Rab', tokens: 910 },
  { day: 'Kam', tokens: 850 },
  { day: 'Jum', tokens: 1120 },
  { day: 'Sab', tokens: 740 },
  { day: 'Min', tokens: 530 }
];

export default function AnalyticsCharts() {
  const maxTokens = Math.max(...weeklyThroughput.map(w => w.tokens));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      {/* Chart 1: Token Usage Throughput (Weekly) */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BarChart3 size={20} color="#a78bfa" />
            <div>
              <h3 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: '#fff' }}>
                Throughput Token Mingguan
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Volume token yang diproses oleh Calamus Agent (ribu token)</p>
            </div>
          </div>
          <span className="badge-status badge-status-positive">+24% Minggu Ini</span>
        </div>

        {/* Custom Bar Graph */}
        <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', padding: '10px 0 0 0' }}>
          {weeklyThroughput.map((item, idx) => {
            const heightPercent = (item.tokens / maxTokens) * 100;
            return (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{item.tokens}k</span>
                <div style={{
                  width: '100%',
                  height: `${heightPercent}%`,
                  background: 'var(--gradient-button)',
                  borderRadius: 'var(--radius-node) var(--radius-node) 0 0',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  transition: 'height 0.5s ease'
                }} />
                <span style={{ fontSize: '11px', color: 'var(--color-text-soft)', fontWeight: 500 }}>{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chart 2: Model Distribution & Latency */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PieChart size={20} color="#a78bfa" />
            <div>
              <h3 className="font-serif" style={{ fontSize: '17px', fontWeight: 600, color: '#fff' }}>
                Distribusi Model AI & Presisi
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Pembagian beban kerja antar model LLM</p>
            </div>
          </div>
          <span className="badge-status badge-status-purple">Violet Rail Compliant</span>
        </div>

        {/* Model Progress Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
          {modelUsage.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#fff', fontWeight: 500 }}>{item.model}</span>
                <span style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{item.tokens} ({item.percentage}%)</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--color-surface)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                <div style={{
                  width: `${item.percentage}%`,
                  height: '100%',
                  background: item.color,
                  borderRadius: 'var(--radius-pill)',
                  transition: 'width 0.6s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
