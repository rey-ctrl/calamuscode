import React, { useState } from 'react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import FlowCanvas from './components/FlowCanvas';
import ActivityFeed from './components/ActivityFeed';
import CodeDiffSimulator from './components/CodeDiffSimulator';
import AnalyticsCharts from './components/AnalyticsCharts';
import { 
  Code2, 
  CheckCircle, 
  Cpu, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  GitBranch, 
  Layers,
  Terminal
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeProject, setActiveProject] = useState('Calamus Core Workspace');
  const [notification, setNotification] = useState(null);

  const triggerNewSession = () => {
    setNotification('Sesi agen Calamus AI baru diinisialisasi!');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navigation */}
      <Header 
        activeProject={activeProject} 
        onNewSession={triggerNewSession}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container */}
      <main style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        flex: 1
      }}>

        {/* Floating Toast Notification */}
        {notification && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 100,
            background: 'var(--gradient-button)',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: 'var(--radius-control)',
            boxShadow: '0 8px 24px rgba(83, 26, 255, 0.4)',
            fontSize: '13px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Sparkles size={16} />
            {notification}
          </div>
        )}

        {/* Hero Welcome & Operational Banner */}
        <div className="glass-panel-raised" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge-status badge-status-purple">
                  <Terminal size={12} /> DesainPakeAI "Violet Rail" Foundation
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Rev: sha256-d65642602ee0a179
                </span>
              </div>
              <h1 className="font-serif" style={{ fontSize: '32px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>
                Calamus Code AI Dashboard
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--color-text-soft)', marginTop: '8px', lineHeight: 1.5 }}>
                Platform pengembangan agen AI otonom untuk sintesis kode presisi tinggi, refactoring otomatis, dan verifikasi pipeline waktu nyata.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                background: 'rgba(13, 12, 20, 0.6)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border-soft)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block' }}>Engine Active</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#a0e5e5', fontFamily: 'var(--font-mono)' }}>Gemini 3.6 Flash</span>
              </div>
              <div style={{
                background: 'rgba(13, 12, 20, 0.6)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border-soft)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block' }}>Acceptance Rate</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#609f89', fontFamily: 'var(--font-mono)' }}>94.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* 4 KPI Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <MetricCard
                title="Kode Dihasilkan"
                value="14,280"
                subtitle="Baris kode sintetis minggu ini"
                change="+18.4%"
                isPositive={true}
                icon={Code2}
                sparklineData={[10, 15, 12, 22, 18, 26, 30]}
              />
              <MetricCard
                title="Tingkat Akurasi AI"
                value="94.2%"
                subtitle="Diterima tanpa modifikasi manual"
                change="+2.1%"
                isPositive={true}
                icon={CheckCircle}
                sparklineData={[20, 22, 24, 25, 27, 28, 29]}
              />
              <MetricCard
                title="Sesi Subagent Aktif"
                value="8 Agent"
                subtitle="0 error dalam 24 jam terakhir"
                change="Optimal"
                isPositive={true}
                icon={Cpu}
                sparklineData={[5, 6, 8, 7, 8, 8, 8]}
              />
              <MetricCard
                title="Rata-rata Latensi AI"
                value="42ms"
                subtitle="Kecepatan output: 128 t/s"
                change="-8ms"
                isPositive={true}
                icon={Zap}
                sparklineData={[25, 22, 20, 18, 16, 15, 14]}
              />
            </div>

            {/* Analytics Section */}
            <AnalyticsCharts />

            {/* Flow Canvas Pipeline */}
            <FlowCanvas />

            {/* Activity Stream Feed & Code Simulator */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <ActivityFeed />
              <CodeDiffSimulator />
            </div>
          </>
        )}

        {/* Canvas Only Tab */}
        {activeTab === 'canvas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FlowCanvas />
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <AnalyticsCharts />
            <ActivityFeed />
          </div>
        )}

        {/* Live Logs Tab */}
        {activeTab === 'logs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ActivityFeed />
          </div>
        )}

        {/* Diff Simulator Tab */}
        {activeTab === 'simulator' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <CodeDiffSimulator />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--color-border-soft)',
        background: 'var(--color-surface)',
        padding: '16px 24px',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--color-text-muted)'
        }}>
          <div>
            © 2026 Calamus Code • Powered by DesainPakeAI CLI & Agent Harness
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Design Tokens: <strong>Violet Rail (alpha.1)</strong></span>
            <span>Revision: <strong>sha256-d65642602ee0a179</strong></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
