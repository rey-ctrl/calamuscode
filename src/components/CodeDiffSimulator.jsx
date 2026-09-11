import React, { useState } from 'react';
import { FileCode, Play, Sparkles, Check, RefreshCw, Eye, Code } from 'lucide-react';

const originalSnippet = `// Original legacy component
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/users/' + userId)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  return <div>{user ? user.name : 'Loading...'}</div>;
}`;

const refactoredSnippet = `// Calamus AI Refactored (React 19 + Violet Rail)
import { useQuery } from '@tanstack/react-query';
import { SkeletonPanel } from './SkeletonPanel';

export function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    staleTime: 60_000,
  });

  if (isLoading) return <SkeletonPanel type="avatar" />;
  if (error) return <div className="badge-status badge-status-warning">Error loading user</div>;

  return (
    <div className="glass-panel" style={{ padding: '16px', display: 'flex', gap: '12px' }}>
      <img src={user.avatar} className="radius-pill" width={40} height={40} alt="" />
      <div>
        <h4 className="font-serif" style={{ color: '#fff', fontSize: '15px' }}>{user.name}</h4>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>{user.role}</p>
      </div>
    </div>
  );
}`;

export default function CodeDiffSimulator() {
  const [viewMode, setViewMode] = useState('diff'); // 'diff', 'refactored', 'original'
  const [isRefactoring, setIsRefactoring] = useState(false);
  const [refactorProgress, setRefactorProgress] = useState(100);

  const handleSimulateRefactor = () => {
    setIsRefactoring(true);
    setRefactorProgress(0);
    const interval = setInterval(() => {
      setRefactorProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRefactoring(false);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header & Simulator Action Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileCode size={20} color="#a78bfa" />
          <div>
            <h3 className="font-serif" style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
              Autonomous Code Refactoring Playground
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
              Simulasikan optimasi kode otomatis oleh Calamus Code AI
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Mode Switcher Buttons */}
          <div style={{ display: 'flex', background: 'var(--color-surface-muted)', padding: '3px', borderRadius: 'var(--radius-control)' }}>
            {[
              { id: 'diff', label: 'Diff View' },
              { id: 'refactored', label: 'Refactored (AI)' },
              { id: 'original', label: 'Original' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setViewMode(m.id)}
                style={{
                  background: viewMode === m.id ? 'var(--color-primary-hover)' : 'transparent',
                  color: viewMode === m.id ? '#fff' : 'var(--color-text-soft)',
                  border: 'none',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-node)',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleSimulateRefactor}
            disabled={isRefactoring}
            style={{
              background: 'var(--gradient-button)',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 'var(--radius-control)',
              fontSize: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: isRefactoring ? 'not-allowed' : 'pointer',
              opacity: isRefactoring ? 0.7 : 1
            }}
          >
            <Sparkles size={14} />
            {isRefactoring ? `Optimizing (${refactorProgress}%)...` : 'Jalankan Refactoring AI'}
          </button>
        </div>
      </div>

      {/* Code Editor Screen */}
      <div style={{
        background: '#0a090f',
        borderRadius: 'var(--radius-panel)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}>
        {/* Editor Tab bar */}
        <div style={{
          background: 'var(--color-surface)',
          padding: '10px 16px',
          borderBottom: '1px solid var(--color-border-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fcd34d' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#609f89' }} />
            <span style={{ fontSize: '12px', color: 'var(--color-text-soft)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>
              src/components/UserProfile.jsx
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#a78bfa', background: 'rgba(83, 26, 255, 0.2)', padding: '2px 8px', borderRadius: '4px' }}>
            Violet Rail System Compliant
          </span>
        </div>

        {/* Code Content Box */}
        <div style={{ padding: '16px', overflowX: 'auto', fontSize: '13px', fontFamily: 'var(--font-mono)', lineHeight: 1.6 }}>
          {viewMode === 'original' && (
            <pre style={{ color: '#f87171' }}>{originalSnippet}</pre>
          )}

          {viewMode === 'refactored' && (
            <pre style={{ color: '#8ce1c4' }}>{refactoredSnippet}</pre>
          )}

          {viewMode === 'diff' && (
            <div>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                // --- Code Diff (Red: Removed | Green: AI Added) ---
              </div>
              <div style={{ background: 'rgba(248, 113, 113, 0.1)', color: '#f87171', padding: '4px 8px', borderRadius: '4px', marginBottom: '4px' }}>
                - useEffect(() =&gt; &#123; fetch('/api/users/' + userId)... &#125;)
              </div>
              <div style={{ background: 'rgba(96, 159, 137, 0.1)', color: '#8ce1c4', padding: '6px 8px', borderRadius: '4px' }}>
                + const &#123; data: user &#125; = useQuery(&#123; queryKey: ['user', userId] &#125;);
                <br />
                + return &lt;div className="glass-panel"&gt;...&lt;/div&gt;;
              </div>
              <pre style={{ color: 'var(--color-text-soft)', marginTop: '12px' }}>{refactoredSnippet}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
