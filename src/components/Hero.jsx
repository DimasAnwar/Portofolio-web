import React from 'react';
import { ArrowRight, Download, Sparkles, Smartphone, Box, ShieldCheck, Layers } from 'lucide-react';

export default function Hero({ onOpenCV }) {
  return (
    <section
      id="hero"
      className="section"
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copywriting & Actions */}
          <div style={{ opacity: 0, animation: 'fadeInUp 0.8s 0.1s forwards' }}>
            {/* Status Badge */}
            <div style={{ marginBottom: '24px' }}>
              <span className="pulse-badge">
                <span className="dot-online"></span>
                <span>Open for Flutter & Tech Roles</span>
              </span>
            </div>

            {/* Headline H1 */}
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Merancang Pengalaman Mobile yang{' '}
              <span className="gradient-text-accent">Responsif &amp; Elegan.</span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '580px',
              }}
            >
              Halo, saya <strong style={{ color: 'var(--text-primary)' }}>M Dimas Anwar Maulana</strong>. Seorang{' '}
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Flutter Mobile Developer</span> dengan
              latar belakang komprehensif dalam Sistem Informasi, Arsitektur Jaringan, dan Desain UI/3D.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              <a href="#portfolio" className="btn btn-primary">
                <span>Lihat Karya Saya</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenCV} className="btn btn-secondary">
                <Download size={18} />
                <span>Unduh CV</span>
              </button>
            </div>

            {/* Quick Experience Highlights / Key Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '28px',
                borderTop: '1px solid var(--border-color)',
                maxWidth: '520px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}
                >
                  3+ <span style={{ color: 'var(--accent-blue)' }}>Thn</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Pengalaman IT &amp; Tech
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}
                >
                  Flutter
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Mobile Architecture
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}
                >
                  3D/UI
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Spatial Design Logic
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo & 3D Tech Visual Element */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
              animation: 'fadeInUp 0.8s 0.3s forwards',
            }}
          >
            {/* Outer Ambient Glow Halo */}
            <div
              style={{
                position: 'absolute',
                width: '95%',
                height: '95%',
                background: 'radial-gradient(circle, rgba(69, 209, 253, 0.3) 0%, rgba(11, 15, 25, 0) 75%)',
                filter: 'blur(50px)',
                zIndex: 0,
              }}
            />

            {/* Main Profile Card Container */}
            <div
              className="floating-element"
              style={{
                width: '100%',
                maxWidth: '420px',
                borderRadius: 'var(--radius-lg)',
                padding: '16px',
                background: 'linear-gradient(145deg, rgba(26, 34, 53, 0.95), rgba(15, 23, 42, 0.9))',
                border: '1px solid rgba(69, 209, 253, 0.35)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(69, 209, 253, 0.2)',
                position: 'relative',
                zIndex: 5,
                overflow: 'visible',
              }}
            >
              {/* Inner Photo Frame with Vignette & Aspect Ratio */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(340px, 65vw, 460px)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: 'inset 0 0 30px rgba(11, 15, 25, 0.6)',
                }}
              >
                <img
                  src="/images/dimas.jpeg"
                  alt="M Dimas Anwar Maulana"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />

                {/* Subtle Gradient Overlay for Text Readability */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(11,15,25,0.1) 50%, rgba(11,15,25,0.85) 100%)',
                  }}
                />

                {/* Profile Name Overlay at Bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(11, 15, 25, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(69, 209, 253, 0.3)',
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      M Dimas Anwar Maulana
                    </div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                      Flutter Mobile Developer
                    </div>
                  </div>
                  <a
                    href="https://github.com/DimasAnwar/RestaurantApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buka Repository RestaurantApp"
                    style={{
                      background: 'rgba(69, 209, 253, 0.15)',
                      border: '1px solid rgba(69, 209, 253, 0.3)',
                      color: 'var(--accent-blue)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Repo</span>
                    <Sparkles size={12} />
                  </a>
                </div>
              </div>

              {/* Floating Tech Badges Container */}
              <div className="hero-badges-wrapper">
                {/* Floating Tech Badge 1 (Top Left) */}
                <div className="hero-badge-floating hero-badge-1">
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: 'rgba(69, 209, 253, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      boxShadow: '0 0 15px rgba(69, 209, 253, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                      Flutter Specialist
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      Dart &amp; Clean Arch
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badge 2 (Top Right) */}
                <div className="hero-badge-floating hero-badge-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38BDF8', boxShadow: '0 0 10px #38BDF8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#38BDF8', whiteSpace: 'nowrap' }}>
                    JS • TS • Dart • Luau
                  </span>
                </div>

                {/* Floating Tech Badge 3 (Bottom Right) */}
                <div className="hero-badge-floating hero-badge-3">
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: 'rgba(129, 140, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818CF8',
                      boxShadow: '0 0 15px rgba(129, 140, 248, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <Box size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                      UI/UX &amp; 3D Design
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#818CF8', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      Blender &amp; Spatial
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badge 4 (Bottom Left) */}
                <div className="hero-badge-floating hero-badge-4">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2DD4BF', boxShadow: '0 0 10px #2DD4BF', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#2DD4BF', whiteSpace: 'nowrap' }}>
                    MikroTik &amp; UniFi IT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Floating Badge Styles */}
      <style>{`
        .hero-badges-wrapper {
          display: contents;
        }

        .hero-badge-floating {
          position: absolute;
          z-index: 25;
          background: rgba(11, 15, 25, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .hero-badge-1 {
          top: 24px;
          left: -32px;
          border: 1px solid rgba(69, 209, 253, 0.6);
          box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(69, 209, 253, 0.3);
          animation: floatBadgeLeft 4.5s ease-in-out infinite alternate;
        }

        .hero-badge-2 {
          top: -18px;
          right: -16px;
          border: 1px solid rgba(56, 189, 248, 0.6);
          border-radius: var(--radius-full);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 20px rgba(56, 189, 248, 0.3);
          animation: floatBadgeTop 3.8s ease-in-out infinite alternate;
        }

        .hero-badge-3 {
          bottom: 24px;
          right: -24px;
          border: 1px solid rgba(129, 140, 248, 0.6);
          box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(129, 140, 248, 0.3);
          animation: floatBadgeRight 5s ease-in-out infinite alternate;
        }

        .hero-badge-4 {
          bottom: -18px;
          left: -16px;
          border: 1px solid rgba(45, 212, 191, 0.6);
          border-radius: var(--radius-full);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 20px rgba(45, 212, 191, 0.3);
          animation: floatBadgeLeft 4s ease-in-out infinite alternate;
        }

        @keyframes floatBadgeLeft {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-8px) translateX(-4px); }
        }

        @keyframes floatBadgeRight {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(8px) translateX(4px); }
        }

        @keyframes floatBadgeTop {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }

        @media (max-width: 1024px) {
          .hero-badge-1 { left: -12px; }
          .hero-badge-2 { right: -8px; }
          .hero-badge-3 { right: -12px; }
          .hero-badge-4 { left: -8px; }
        }

        @media (max-width: 768px) {
          .hero-badges-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 16px;
            width: 100%;
          }

          .hero-badge-floating {
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            animation: none !important;
            border-radius: var(--radius-full) !important;
            padding: 8px 14px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
          }
        }
      `}</style>
    </section>
  );
}
