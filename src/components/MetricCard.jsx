import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricCard({ title, value, change, isPositive, icon: Icon, subtitle, sparklineData }) {
  return (
    <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Subtle Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '120px',
        height: '120px',
        background: 'var(--gradient-glow)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-soft)' }}>
          {title}
        </span>
        {Icon && (
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-control)',
            background: 'var(--color-surface-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-border-soft)'
          }}>
            <Icon size={16} color="#a78bfa" />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
            {value}
          </h2>
          {subtitle && (
            <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Change Badge */}
        {change && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 8px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '12px',
            fontWeight: 600,
            background: isPositive ? 'rgba(96, 159, 137, 0.15)' : 'rgba(248, 113, 113, 0.15)',
            color: isPositive ? '#609f89' : '#f87171',
            border: `1px solid ${isPositive ? 'rgba(96, 159, 137, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`
          }}>
            {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {change}
          </div>
        )}
      </div>

      {/* SVG Sparkline Graph */}
      {sparklineData && (
        <div style={{ height: '32px', width: '100%', marginTop: '4px' }}>
          <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`sparklineGrad-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#531aff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#531aff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={`M 0 25 ${sparklineData.map((val, i) => `L ${(i / (sparklineData.length - 1)) * 100} ${30 - val}`).join(' ')} L 100 30 L 0 30 Z`}
              fill={`url(#sparklineGrad-${title})`}
            />
            <path
              d={`M 0 25 ${sparklineData.map((val, i) => `L ${(i / (sparklineData.length - 1)) * 100} ${30 - val}`).join(' ')}`}
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
