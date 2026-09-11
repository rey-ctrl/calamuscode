import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Loader2, 
  Clock, 
  FileCode, 
  Cpu, 
  ShieldCheck, 
  GitCommit, 
  Layers,
  ArrowRight,
  Database,
  Search
} from 'lucide-react';

const pipelineNodes = [
  {
    id: 'node-1',
    title: 'User Prompt & Input',
    subtitle: 'Menerima instruksi pembuatan dashboard React',
    type: 'trigger',
    icon: FileCode,
    status: 'completed',
    latency: '12ms',
    details: 'Prompt parsed with 3 user constraints: React + Vite + Violet Rail theme.',
    inputs: ['User Request', 'Workspace Context'],
    outputs: ['Tokenized Prompt', 'System Instructions']
  },
  {
    id: 'node-2',
    title: 'Desain Context Sync',
    subtitle: 'Mengambil token warna & tipografi Violet Rail',
    type: 'context',
    icon: Database,
    status: 'completed',
    latency: '145ms',
    details: 'Retrieved 89 design tokens including --color-canvas, --color-surface, and --gradient-rail-surface.',
    inputs: ['Tokenized Prompt'],
    outputs: ['Design Tokens', 'Component Schema']
  },
  {
    id: 'node-3',
    title: 'AST & Code Synthesis',
    subtitle: 'Model Gemini 3.6 Flash memproses struktur JSX',
    type: 'model',
    icon: Cpu,
    status: 'completed',
    latency: '840ms',
    details: 'Generated 6 React modular components with full glassmorphism styling and micro-animations.',
    inputs: ['Design Tokens', 'Context'],
    outputs: ['JSX AST', 'Component Tree']
  },
  {
    id: 'node-4',
    title: 'Automated Build Verification',
    subtitle: 'Memverifikasi sintaks & tipe data dengan Vite',
    type: 'verify',
    icon: ShieldCheck,
    status: 'running',
    latency: '210ms',
    details: 'Running ESLint and Vite JSX parser check in sandbox container.',
    inputs: ['JSX AST'],
    outputs: ['Build Artifacts', 'Clean Status']
  },
  {
    id: 'node-5',
    title: 'Workspace Commit & Deploy',
    subtitle: 'Menulis file ke workspace Calamus',
    type: 'deploy',
    icon: GitCommit,
    status: 'queued',
    latency: '--',
    details: 'Waiting for build verification step before applying file system diffs.',
    inputs: ['Build Artifacts'],
    outputs: ['Workspace Files']
  }
];

export default function FlowCanvas() {
  const [selectedNode, setSelectedNode] = useState(pipelineNodes[2]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px' }}>
      {/* Flow Canvas Interactive Graph */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers size={20} color="#a78bfa" />
              <h3 className="font-serif" style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
                Agent Execution Pipeline (Flow Canvas)
              </h3>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              Pipa eksekusi otonom Calamus Code untuk pemrosesan agen AI waktu nyata
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge-status badge-status-purple">
              <Loader2 size={12} className="animate-spin" /> Node 4 Active
            </span>
          </div>
        </div>

        {/* Nodes Graph Container */}
        <div style={{
          background: 'rgba(13, 12, 20, 0.9)',
          borderRadius: 'var(--radius-panel)',
          border: '1px dashed var(--color-border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative'
        }}>
          {pipelineNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isSelected = selectedNode?.id === node.id;

            return (
              <React.Fragment key={node.id}>
                <div
                  onClick={() => setSelectedNode(node)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-card)',
                    background: isSelected 
                      ? 'var(--gradient-rail-surface)' 
                      : 'var(--color-surface-muted)',
                    border: isSelected 
                      ? '1px solid #a78bfa' 
                      : '1px solid var(--color-border-soft)',
                    boxShadow: isSelected 
                      ? '0 0 20px rgba(167, 139, 250, 0.25)' 
                      : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: isSelected ? 'translateX(4px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-control)',
                      background: node.status === 'completed' 
                        ? 'rgba(96, 159, 137, 0.15)' 
                        : node.status === 'running' 
                        ? 'rgba(83, 26, 255, 0.2)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${node.status === 'completed' ? '#609f89' : node.status === 'running' ? '#a78bfa' : 'var(--color-border)'}`
                    }}>
                      <IconComponent size={20} color={node.status === 'completed' ? '#609f89' : node.status === 'running' ? '#a78bfa' : '#868593'} />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>{node.title}</h4>
                        <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', background: 'var(--color-surface)', padding: '2px 6px', borderRadius: '4px' }}>
                          STEP 0{index + 1}
                        </span>
                      </div>
                      <p style={{ fontSize: '12px', color: 'var(--color-text-soft)', marginTop: '2px' }}>{node.subtitle}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block' }}>Latency</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', fontFamily: 'var(--font-mono)' }}>{node.latency}</span>
                    </div>

                    {node.status === 'completed' && <CheckCircle2 size={18} color="#609f89" />}
                    {node.status === 'running' && <Loader2 size={18} color="#a78bfa" className="animate-spin" />}
                    {node.status === 'queued' && <Clock size={18} color="#868593" />}
                  </div>
                </div>

                {index < pipelineNodes.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '-6px 0' }}>
                    <div style={{ width: '2px', height: '20px', background: 'linear-gradient(to bottom, #a78bfa, rgba(255,255,255,0.1))' }} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Right Sidebar: Selected Node Details */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', borderBottom: '1px solid var(--color-border-soft)', paddingBottom: '10px' }}>
          Node Inspector
        </h4>

        {selectedNode ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Node ID</span>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>{selectedNode.id}</p>
            </div>

            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Status</span>
              <div style={{ marginTop: '4px' }}>
                <span className={`badge-status ${selectedNode.status === 'completed' ? 'badge-status-positive' : 'badge-status-purple'}`}>
                  {selectedNode.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Detail Eksekusi</span>
              <p style={{ fontSize: '12px', color: 'var(--color-text-soft)', marginTop: '4px', lineHeight: 1.5 }}>
                {selectedNode.details}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Inputs</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {selectedNode.inputs.map((inp, idx) => (
                  <span key={idx} style={{ fontSize: '11px', background: 'var(--color-surface-muted)', color: '#fff', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--color-border-soft)' }}>
                    {inp}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Outputs</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {selectedNode.outputs.map((out, idx) => (
                  <span key={idx} style={{ fontSize: '11px', background: 'rgba(83, 26, 255, 0.15)', color: '#c4b5fd', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(167, 139, 250, 0.3)' }}>
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Pilih node untuk melihat detail inspector.</p>
        )}
      </div>
    </div>
  );
}
