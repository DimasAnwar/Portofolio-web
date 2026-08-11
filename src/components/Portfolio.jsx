import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Smartphone, Sparkles, X, ArrowRight, Eye, Code, Layers } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'restaurant-app',
      isFeatured: true,
      title: 'RestaurantApp — Flutter Mobile Application',
      category: 'Mobile Development',
      badge: 'Featured Repository',
      icon: <Smartphone size={20} />,
      image: '/images/project_flutter_app.png',
      shortDesc:
        'Aplikasi mobile manajemen restoran dan pemesanan interaktif berbasis Flutter & Dart dengan layanan Order Chat real-time dan Dashboard Menu.',
      fullDesc:
        'RestaurantApp adalah proyek aplikasi mobile profesional berbasis Flutter & Dart yang mengimplementasikan Clean Architecture secara modular (Domain, Data, & Presentation Layer). Aplikasi ini memiliki fitur unggulan berupa Order Chat Service interaktif, manajemen dashboard menu makanan, penanganan state yang scalable, serta antarmuka dark mode yang sangat responsif.',
      features: [
        'Real-Time Order Chat & Customer Service System',
        'Clean Architecture & Modular Layer Structure',
        'Interactive Restaurant Dashboard & Food Menu Showcase',
        'Scalable State Management with Flutter & Dart',
        '60 FPS Smooth Navigation & Micro-Animations',
      ],
      tech: ['Flutter', 'Dart', 'State Management', 'SupaBase'],
      demoLink: 'https://github.com/DimasAnwar/RestaurantApp',
      githubLink: 'https://github.com/DimasAnwar/RestaurantApp',
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>Karya Terpilih</span>
          </div>
          <h2 className="section-title">
            Portofolio &amp; <span className="gradient-text-accent">Proyek Utama</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Aplikasi mobile Flutter performa tinggi dengan fitur arsitektur modern dan antarmuka responsif.
          </p>
        </div>

        {/* Projects Container (Constrained Standard Card Width) */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-card project-card ${project.isFeatured ? 'featured-project' : ''}`}
              style={{
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(69, 209, 253, 0.15)',
              }}
            >
              {/* Card Thumbnail Image Container - Clear High-Res Display */}
              <div
                className="project-image-wrapper"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <span className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem', gap: '8px' }}>
                    <Eye size={18} />
                    <span>Lihat Detail Proyek</span>
                  </span>
                </div>
                <span className="project-category-badge">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div style={{ padding: ' clamp(20px, 4vw, 32px)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontSize: '0.825rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                  {project.icon}
                  <span>{project.category}</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        padding: '6px 14px',
                        borderRadius: '99px',
                        background: 'rgba(69, 209, 253, 0.1)',
                        border: '1px solid rgba(69, 209, 253, 0.25)',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary"
                    style={{ flex: 1, minWidth: '180px' }}
                  >
                    <span>Detail &amp; Screenshot</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, minWidth: '180px', textDecoration: 'none' }}
                  >
                    <Code size={16} />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(69, 209, 253, 0.15)',
                    color: 'var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {selectedProject.title}
                  </h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Full Crisp Image Display */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '24px',
                border: '1px solid rgba(69, 209, 253, 0.3)',
                background: '#070B14',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  display: 'block',
                  objectFit: 'contain',
                  background: 'radial-gradient(circle at center, #111827 0%, #070B14 100%)',
                  padding: '12px',
                }}
              />
            </div>

            {/* Modal Full Description */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                Ringkasan Proyek
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Fitur &amp; Keunggulan Utama
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
                {selectedProject.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.925rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', boxShadow: '0 0 8px var(--accent-blue)' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Teknologi yang Digunakan
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(69, 209, 253, 0.1)',
                      border: '1px solid rgba(69, 209, 253, 0.3)',
                      color: 'var(--accent-blue)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, minWidth: '200px', textDecoration: 'none' }}
              >
                <ExternalLink size={18} />
                <span>Buka Repository / Demo</span>
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, minWidth: '200px', textDecoration: 'none' }}
              >
                <Code size={18} />
                <span>GitHub Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Styled Portfolio CSS */}
      <style>{`
        .project-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .featured-project {
          border: 1px solid rgba(69, 209, 253, 0.35);
          background: linear-gradient(160deg, rgba(26, 34, 53, 0.95), rgba(15, 23, 42, 0.98));
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: clamp(280px, 35vw, 360px);
          overflow: hidden;
          border-top-left-radius: var(--radius-lg);
          border-top-right-radius: var(--radius-lg);
          background: radial-gradient(circle at center, #111827 0%, #070B14 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.04);
        }

        .project-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 15, 25, 0.75);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-image-overlay {
          opacity: 1;
        }

        .project-category-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(11, 15, 25, 0.85);
          border: 1px solid rgba(69, 209, 253, 0.35);
          color: var(--accent-blue);
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 0.775rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }

        @media (max-width: 600px) {
          .project-image-wrapper {
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
