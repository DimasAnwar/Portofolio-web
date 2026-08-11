import React from 'react';
import { Layers, Smartphone, Box, Terminal, Server, CheckCircle2, Code2 } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">
            <Layers size={16} />
            <span>Keahlian Utama</span>
          </div>
          <h2 className="section-title">
            Bento Grid <span className="gradient-text-accent">Tech Stack</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Pengelompokan keahlian teknis dari ekosistem mobile development, pemodelan 3D, hingga infrastruktur jaringan server.
          </p>
        </div>

        {/* Bento Grid Layout Container */}
        <div className="bento-grid">
          {/* BOX 1: Mobile & Web Development (Paling Besar & Menonjol) */}
          <div className="glass-card bento-box bento-box-large">
            <div className="bento-card-glow" />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="bento-icon-wrapper flutter-glow">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="bento-title">Mobile &amp; Web Development</h3>
                    <span className="bento-subtitle">Core Specialization</span>
                  </div>
                </div>
                <span className="bento-highlight-badge">Fokus Utama</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Mengembangkan aplikasi cross-platform berkinerja tinggi dengan antarmuka yang halus, arsitektur kode bersih (Clean Architecture), dan state management terstruktur.
              </p>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                {['Flutter', 'Dart', 'HTML5', 'CSS3', 'JavaScript', 'REST API', 'State Management'].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-primary">
                    <CheckCircle2 size={14} />
                    {skill}
                  </span>
                ))}
              </div>

              {/* Code Snippet Visual Preview Card */}
              <div className="code-preview-box">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="code-title">main.dart — Flutter App</span>
                </div>
                <pre className="code-body">
                  <code>{`Widget build(BuildContext context) {
  return MaterialApp(
    theme: ThemeData.dark(),
    home: FlutterResponsivePortfolio(
      developer: 'M Dimas Anwar Maulana',
      performance: '60 FPS Ultra Smooth',
    ),
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* BOX 2: 3D & UI/UX Design */}
          <div className="glass-card bento-box bento-box-medium">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="bento-icon-wrapper purple-glow">
                  <Box size={22} />
                </div>
                <div>
                  <h3 className="bento-title">3D &amp; UI/UX Design</h3>
                  <span className="bento-subtitle">Spatial &amp; Visual Aesthetics</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Menggabungkan pemodelan objek 3D dengan prinsip UI/UX modern untuk menciptakan pengalaman pengguna yang memukau.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Blender 3D Modeling', 'UI/UX Logic', 'Corel Draw', 'Figma', 'Visual Assets'].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-purple">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 3: System Architecture */}
          <div className="glass-card bento-box bento-box-medium">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="bento-icon-wrapper cyan-glow">
                  <Terminal size={22} />
                </div>
                <div>
                  <h3 className="bento-title">System Architecture</h3>
                  <span className="bento-subtitle">Logic &amp; Game Mechanics</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Penerapan logika sistem Object-Oriented Programming (OOP) dan Luau scripting dari pengalaman pengembangan game ke logika mobile app.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Luau Scripting', 'Object-Oriented Programming (OOP)', 'State Logic', 'Algorithm Optimization'].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-cyan">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 4: IT Infrastructure */}
          <div className="glass-card bento-box bento-box-medium">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="bento-icon-wrapper teal-glow">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="bento-title">IT Infrastructure</h3>
                  <span className="bento-subtitle">Network &amp; Hardware Management</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Pengelolaan dan konfigurasi jaringan internet enterprise serta pemeliharaan keandalan sistem perangkat keras.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['MikroTik RouterOS', 'UniFi Network', 'Hardware Troubleshooting', 'Server Maintenance'].map((skill, i) => (
                  <span key={i} className="skill-pill skill-pill-teal">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Bento Grid CSS */}
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .bento-box {
          padding: 32px;
          border-radius: var(--radius-lg);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bento-box-large {
          grid-column: span 7;
          grid-row: span 2;
          background: linear-gradient(145deg, rgba(26, 34, 53, 0.9), rgba(15, 23, 42, 0.95));
          border: 1px solid rgba(69, 209, 253, 0.3);
        }

        .bento-box-medium {
          grid-column: span 5;
          background: rgba(26, 34, 53, 0.6);
        }

        .bento-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flutter-glow {
          background: rgba(69, 209, 253, 0.15);
          color: var(--accent-blue);
          box-shadow: 0 0 15px rgba(69, 209, 253, 0.25);
        }

        .purple-glow {
          background: rgba(129, 140, 248, 0.15);
          color: #818CF8;
        }

        .cyan-glow {
          background: rgba(56, 189, 248, 0.15);
          color: #38BDF8;
        }

        .teal-glow {
          background: rgba(45, 212, 191, 0.15);
          color: #2DD4BF;
        }

        .bento-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .bento-subtitle {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .bento-highlight-badge {
          background: rgba(69, 209, 253, 0.15);
          border: 1px solid rgba(69, 209, 253, 0.4);
          color: var(--accent-blue);
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .skill-pill-primary {
          background: rgba(69, 209, 253, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(69, 209, 253, 0.25);
        }

        .skill-pill-purple {
          background: rgba(129, 140, 248, 0.1);
          color: #A5B4FC;
          border: 1px solid rgba(129, 140, 248, 0.25);
        }

        .skill-pill-cyan {
          background: rgba(56, 189, 248, 0.1);
          color: #7DD3FC;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .skill-pill-teal {
          background: rgba(45, 212, 191, 0.1);
          color: #5EEAD4;
          border: 1px solid rgba(45, 212, 191, 0.25);
        }

        .code-preview-box {
          background: #090D16;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-color);
        }

        .code-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-red { background: #EF4444; }
        .dot-yellow { background: #F59E0B; }
        .dot-green { background: #10B981; }

        .code-title {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: monospace;
        }

        .code-body {
          padding: 14px;
          font-family: 'Fira Code', monospace, Consolas;
          font-size: 0.8rem;
          color: #38BDF8;
          overflow-x: auto;
          margin: 0;
        }

        @media (max-width: 992px) {
          .bento-box-large {
            grid-column: span 12;
            grid-row: auto;
          }
          .bento-box-medium {
            grid-column: span 12;
          }
        }
      `}</style>
    </section>
  );
}
