import React, { useState } from 'react';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  XCircle, 
  Search, 
  Filter, 
  Copy, 
  Check 
} from 'lucide-react';

const initialLogs = [
  { id: 1, type: 'success', time: '17:42:15', category: 'SYSTEM', message: 'Auth token verified with DesainPakeAI origin (https://desainpakeai.com)' },
  { id: 2, type: 'info', time: '17:42:10', category: 'AGENT', message: 'DesainPakeAI skills loaded (15 on-demand guides available)' },
  { id: 3, type: 'info', time: '17:41:55', category: 'VITE', message: 'Scaffolded React + Vite template in ./ directory' },
  { id: 4, type: 'success', time: '17:41:40', category: 'NPM', message: 'Installed dependencies: react, react-dom, lucide-react (0 vulnerabilities)' },
  { id: 5, type: 'warning', time: '17:41:20', category: 'CLI', message: 'create_page endpoint HTTP 500 fallback: Switched to client component synthesis' },
  { id: 6, type: 'info', time: '17:40:50', category: 'TOKENS', message: 'Loaded 89 design tokens for Violet Rail (alpha.1)' },
  { id: 7, type: 'success', time: '17:40:10', category: 'AUTH', message: 'Session authenticated for project ID 893fe6f6-8be6-4e98-a960-6a54fe4db92b' },
  { id: 8, type: 'info', time: '17:39:45', category: 'HARNESS', message: 'Environment DPAI_AGENT_HARNESS initialized to "antigravity"' }
];

export default function ActivityFeed() {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const filteredLogs = initialLogs.filter(log => {
    const matchesType = filterType === 'all' || log.type === filterType;
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleCopy = (log) => {
    navigator.clipboard.writeText(`[${log.time}] [${log.category}] ${log.message}`);
    setCopiedId(log.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header & Filter Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Activity size={20} color="#a78bfa" />
          <div>
            <h3 className="font-serif" style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
              Live Event Stream & Activity Logs
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
              Aktivitas real-time eksekusi sistem Calamus Code
            </p>
          </div>
        </div>

        {/* Filter Pills & Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Search box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-soft)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '12px'
          }}>
            <Search size={14} color="var(--color-text-muted)" />
            <input 
              type="text" 
              placeholder="Filter log..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '12px', width: '130px' }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '4px', background: 'var(--color-surface-muted)', padding: '3px', borderRadius: 'var(--radius-control)' }}>
            {['all', 'info', 'success', 'warning'].map(t => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                style={{
                  background: filterType === t ? 'var(--color-primary-hover)' : 'transparent',
                  color: filterType === t ? '#fff' : 'var(--color-text-soft)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-node)',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Log Feed List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxHeight: '420px',
        overflowY: 'auto',
        paddingRight: '4px'
      }}>
        {filteredLogs.map(log => {
          return (
            <div
              key={log.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-card)',
                background: 'var(--color-surface-muted)',
                border: '1px solid var(--color-border-soft)',
                fontSize: '13px',
                transition: 'background 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {log.type === 'success' && <CheckCircle size={16} color="#609f89" />}
                {log.type === 'info' && <Info size={16} color="#a78bfa" />}
                {log.type === 'warning' && <AlertTriangle size={16} color="#eab38a" />}
                {log.type === 'error' && <XCircle size={16} color="#f87171" />}

                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                  {log.time}
                </span>

                <span style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'var(--color-surface)',
                  color: '#a78bfa',
                  border: '1px solid var(--color-border-soft)'
                }}>
                  {log.category}
                </span>

                <span style={{ color: 'var(--color-text)', fontWeight: 400 }}>
                  {log.message}
                </span>
              </div>

              <button
                onClick={() => handleCopy(log)}
                title="Salin Log"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {copiedId === log.id ? <Check size={14} color="#609f89" /> : <Copy size={14} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
