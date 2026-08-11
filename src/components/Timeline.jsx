import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, Gamepad2, Megaphone, HardDrive, Sparkles } from 'lucide-react';

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);

  const experiences = [
    {
      period: '2025 - 2026',
      title: 'Freelance Roblox Game Developer',
      company: 'Indie Development',
      icon: <Gamepad2 size={20} />,
      color: '#45D1FD',
      description:
        'Merancang arsitektur sistem dengan Luau, mengelola siklus UI/UX responsif, dan membangun objek 3D interaktif.',
      highlight:
        'Logika state management dan arsitektur event-driven yang kompleks dalam pengembangan game 3D menjadi fondasi utama dalam membangun alur state aplikasi mobile Flutter yang optimal.',
      tags: ['Luau Scripting', 'OOP Architecture', '3D Modeling', 'UI/UX Responsif', 'State Logic'],
    },
    {
      period: '2023 - 2024',
      title: 'Admin & Visual Comm',
      company: 'Yamet CDC',
      icon: <Megaphone size={20} />,
      color: '#818CF8',
      description:
        'Manajemen finansial, komunikasi publik, dan produksi aset visual/branding untuk Instagram.',
      highlight:
        ' Mengembangkan kepekaan estetika visual, manajemen komunikasi klien, serta presisi branding yang diaplikasikan ke dalam rancangan UI/UX aplikasi mobile.',
      tags: ['Visual Branding', 'Financial Admin', 'Corel Draw', 'Public Relations', 'Content Design'],
    },
    {
      period: '2022 - 2023',
      title: 'Staff IT',
      company: 'SMP SMA Cahaya Rancamaya',
      icon: <HardDrive size={20} />,
      color: '#2DD4BF',
      description:
        'Pemeliharaan infrastruktur jaringan, server, troubleshooting hardware, dan desain grafis.',
      highlight:
        ' Pengalaman langsung mengelola jaringan MikroTik/UniFi & troubleshooting server memberikan wawasan mendalam mengenai efisiensi komunikasi data jaringan pada aplikasi mobile.',
      tags: ['MikroTik RouterOS', 'UniFi Network', 'Hardware Repair', 'Server Admin', 'Graphic Design'],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag">
            <Briefcase size={16} />
            <span>Perjalanan Karir</span>
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-text-accent">Career Timeline</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Jejak langkah profesional dari infrastruktur IT, komunikasi visual, hingga arsitektur game 3D &amp; mobile development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {/* Glowing Vertical Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="timeline-items">
            {experiences.map((exp, index) => {
              const isActive = activeItem === index;
              return (
                <div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  onMouseEnter={() => setActiveItem(index)}
                  onClick={() => setActiveItem(index)}
                >
                  {/* Glowing Center Node Dot */}
                  <div className={`timeline-dot ${isActive ? 'active' : ''}`} style={{ borderColor: exp.color }}>
                    <div className="timeline-dot-inner" style={{ background: exp.color }} />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`glass-card timeline-card ${isActive ? 'active-card' : ''}`}
                    style={{
                      borderColor: isActive ? exp.color : 'var(--border-color)',
                      boxShadow: isActive ? `0 10px 30px -10px ${exp.color}40` : 'none',
                    }}
                  >
                    {/* Period Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span
                        className="timeline-badge"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {exp.company}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {exp.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '16px' }}>
                      {exp.description}
                    </p>

                    {/* Highlight Box */}
                    <div
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(11, 15, 25, 0.6)',
                        borderLeft: `3px solid ${exp.color}`,
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                      }}
                    >
                      {exp.highlight}
                    </div>

                    {/* Skill Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '3px 10px',
                            borderRadius: '99px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styled Timeline CSS */}
      <style>{`
        .timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-blue) 0%, #818CF8 50%, #2DD4BF 100%);
          transform: translateX(-50%);
          box-shadow: 0 0 12px var(--accent-glow);
          border-radius: 2px;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-item {
          position: relative;
          display: flex;
          width: 100%;
          cursor: pointer;
        }

        .timeline-item.left {
          justify-content: flex-start;
          padding-right: calc(50% + 32px);
        }

        .timeline-item.right {
          justify-content: flex-end;
          padding-left: calc(50% + 32px);
        }

        .timeline-dot {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translate(-50%, 0);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 3px solid var(--accent-blue);
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .timeline-dot.active {
          transform: translate(-50%, 0) scale(1.3);
          box-shadow: 0 0 20px var(--accent-blue);
        }

        .timeline-dot-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .timeline-card {
          width: 100%;
          padding: 28px;
          border-radius: var(--radius-lg);
          transition: all 0.35s ease;
        }

        .timeline-card:hover, .active-card {
          transform: translateY(-4px);
        }

        .timeline-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.775rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-item.left, .timeline-item.right {
            justify-content: flex-start;
            padding-left: 56px;
            padding-right: 0;
          }

          .timeline-dot {
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
}
