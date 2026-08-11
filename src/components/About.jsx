import React from 'react';
import { User, ShieldCheck, Palette, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const corePillars = [
    {
      icon: <Cpu size={22} className="text-accent" />,
      title: 'Infrastruktur & Arsitektur IT',
      desc: 'Pemahaman mendalam mengenai arsitektur sistem, jaringan, dan server sebagai fondasi aplikasi yang stabil.',
    },
    {
      icon: <Palette size={22} className="text-accent" />,
      title: 'Desain Spasial 3D & UI/UX',
      desc: 'Kepekaan visual tingkat tinggi dari pemodelan 3D dan desain antarmuka interaktif yang intuitif.',
    },
    {
      icon: <ShieldCheck size={22} className="text-accent" />,
      title: 'Flutter Mobile Engineering',
      desc: 'Fokus penuh pada ekosistem Flutter & Dart untuk menghasilkan aplikasi mobile cross-platform yang responsif.',
    },
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-tag">
            <User size={16} />
            <span>Tentang Saya</span>
          </div>

          <h2 className="section-title">
            Bertransisi Membawa Keahlian Komprehensif ke <span className="gradient-text-accent">Dunia Mobile</span>
          </h2>

          {/* Main Narrative Glass Box */}
          <div
            className="glass-card"
            style={{
              padding: '36px clamp(24px, 5vw, 48px)',
              margin: '36px 0 48px 0',
              textAlign: 'center',
              border: '1px solid rgba(69, 209, 253, 0.2)',
              background: 'linear-gradient(180deg, rgba(26, 34, 53, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                color: '#E2E8F0',
                lineHeight: 1.85,
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
              }}
            >
              "Sebagai Mahasiswa Sistem Informasi yang bertransisi menjadi Mobile Developer, saya menggabungkan keahlian teknis dari manajemen infrastruktur IT dan pengembangan game 3D ke dalam ekosistem mobile. Pengalaman saya dalam merancang UI/UX yang interaktif dan mendiagnosis arsitektur sistem memungkinkan saya untuk membangun aplikasi Flutter yang tidak hanya memukau secara visual, tetapi juga optimal secara performa."
            </p>
          </div>

          {/* Core Skill Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              textAlign: 'left',
            }}
          >
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(26, 34, 53, 0.5)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(69, 209, 253, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    marginBottom: '16px',
                  }}
                >
                  {pillar.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
