import React from 'react';
import { 
  Terminal, 
  Sparkles, 
  Search, 
  ChevronDown, 
  GitBranch
} from 'lucide-react';

export default function Header({ activeProject, onNewSession, activeTab, setActiveTab }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      padding: '16px 40px'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {/* Left: Brand Logo & Project Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none', color: '#fff', fontSize: '15.5px', fontWeight: 600, letterSpacing: '-0.03em' }}>
            <svg style={{ width: '22px', height: '22px', flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
              <g transform="rotate(-30 12 12)">
                <circle cx="7.3" cy="3.2" r="1.45" />
                <rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8" />
                <rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8" />
                <circle cx="16.7" cy="20.8" r="1.45" />
              </g>
            </svg>
            <span>Vesper<span style={{ fontWeight: 400, opacity: 0.7 }}>.ai</span></span>
          </a>

          <div style={{ height: '20px', width: '1px', background: 'rgba(255, 255, 255, 0.16)' }} />

          {/* Active Workspace Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(20, 20, 20, 0.8)',
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            fontSize: '13px'
          }}>
            <GitBranch size={14} color="#ffffff" />
            <span style={{ color: '#fff', fontWeight: 500 }}>{activeProject || 'Calamus Core'}</span>
            <span style={{ fontSize: '11px', color: '#9a9a9a' }}>main</span>
            <ChevronDown size={14} color="#9a9a9a" />
          </div>
        </div>

        {/* Center: Liquid-Metal Navigation Pills (Benefits, How It Works, FAQs, Pricing Removed) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'canvas', label: 'Flow Canvas' },
            { id: 'insights', label: 'Code Insights' },
            { id: 'logs', label: 'Live Events' },
            { id: 'simulator', label: 'Diff Playground' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                height: '40px',
                padding: '0 18px',
                borderRadius: '7px',
                border: activeTab === tab.id 
                  ? '1px solid rgba(235, 235, 235, 0.9)' 
                  : '1px solid rgba(198, 198, 198, 0.55)',
                background: activeTab === tab.id 
                  ? 'linear-gradient(105deg, #111111 0%, #3a3a3a 45%, #6a6a6a 100%)' 
                  : 'linear-gradient(105deg, #050505 0%, #2a2a2a 48%, #4a4a4a 100%)',
                color: '#f3f3f3',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? 600 : 400,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                boxShadow: activeTab === tab.id ? '0 0 18px rgba(200, 210, 230, 0.18)' : 'none',
                transition: 'all 0.35s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right: Search & Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            width: '180px'
          }}>
            <Search size={14} color="#9a9a9a" />
            <input 
              type="text" 
              placeholder="Search..." 
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                width: '100%',
                fontSize: '12px'
              }}
            />
          </div>

          <button 
            onClick={onNewSession}
            className="btn btn-solid"
            style={{
              height: '40px',
              padding: '0 16px',
              borderRadius: '6px',
              fontSize: '13.5px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Sparkles size={14} /> Start for Free
          </button>
        </div>
      </div>
    </header>
  );
}
