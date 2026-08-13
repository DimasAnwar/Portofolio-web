import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Smartphone, Sparkles, X, ArrowRight, Eye, Code, Layers } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      id: 'eduschool',
      isFeatured: true,
      title: 'EduSchool — School Management Application',
      category: 'Mobile Development',
      badge: 'Featured Repository',
      icon: <Smartphone size={20} />,
      image: '/images/screenshoots/Screenshot_1786622567.png',
      gallery: [
        '/images/screenshoots/Screenshot_1786622567.png',
        '/images/screenshoots/Screenshot_1786622610.png',
        '/images/screenshoots/Screenshot_1786622549.png',
        '/images/screenshoots/Screenshot_1786622572.png',
        '/images/screenshoots/Screenshot_1786622574.png',
        '/images/screenshoots/Screenshot_1786622576.png',
        '/images/screenshoots/Screenshot_1786622588.png',
        '/images/screenshoots/Screenshot_1786622604.png',
        '/images/screenshoots/Screenshot_1786622622.png',
        '/images/screenshoots/Screenshot_1786622923.png',
        '/images/screenshoots/Screenshot_1786622928.png',
        '/images/screenshoots/Screenshot_1786622930.png',
      ],
      shortDesc:
        'Aplikasi mobile manajemen sekolah interaktif berbasis Flutter & Dart untuk pengelolaan jadwal pelajaran, tugas, rekapitulasi nilai, dan portal akademik siswa.',
      fullDesc:
        'EduSchool adalah aplikasi mobile manajemen persekolahan modern berbasis Flutter & Dart yang dirancang untuk mempermudah siswa dan pengajar dalam memantau kegiatan akademik harian. Aplikasi ini mengintegrasikan pelacakan tugas (assignment tracker), penanganan jadwal harian interaktif, monitoring progres nilai, serta antarmuka responsif dengan performa tinggi.',
      features: [
        'Interactive Class Schedule & Timetable Management',
        'Assignment & Task Tracker with Reminders',
        'Student Grade & Academic Performance Progress',
        'Modular Clean Architecture with Flutter & Dart',
        '60 FPS Smooth Navigation & Modern Dark Theme',
      ],
      tech: ['Flutter', 'Dart', 'State Management', 'REST API'],
      demoLink: 'https://github.com/DimasAnwar/futter-school-app',
      githubLink: 'https://github.com/DimasAnwar/futter-school-app',
    },
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

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setActiveImage(project.image);
  };

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

        {/* Projects Container (Responsive Grid Layout) */}
        <div className="portfolio-grid">
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
              {/* Card Thumbnail Image Container - Phone Device Mockup Presentation */}
              <div
                className="project-image-wrapper"
                onClick={() => handleOpenModal(project)}
                style={{ cursor: 'pointer' }}
              >
                {project.gallery && project.gallery.length > 1 ? (
                  <div className="project-multi-mockup">
                    <div className="project-image-frame frame-secondary">
                      <img src={project.gallery[1]} alt={`${project.title} Preview 2`} />
                    </div>
                    <div className="project-image-frame frame-primary">
                      <img src={project.gallery[0]} alt={project.title} />
                    </div>
                  </div>
                ) : (
                  <div className="project-image-frame frame-primary">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}

                <div className="project-image-overlay">
                  <span className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem', gap: '8px' }}>
                    <Eye size={18} />
                    <span>Lihat Detail Proyek</span>
                  </span>
                </div>
                <span className="project-category-badge">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div style={{ padding: 'clamp(20px, 4vw, 32px)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                <div className="project-card-actions">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="btn btn-primary"
                  >
                    <span>Detail &amp; Screenshot</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
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

            {/* Modal Full Crisp Image Display & Gallery */}
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
                src={activeImage || selectedProject.image}
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

              {/* Interactive Screenshot Gallery Selector */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div style={{ padding: '8px 12px 14px', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(11, 15, 25, 0.6)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Galeri Screenshot App ({selectedProject.gallery.length} Tampilan)
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      overflowX: 'auto',
                      paddingBottom: '6px',
                      scrollbarWidth: 'thin',
                    }}
                  >
                    {selectedProject.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(imgUrl)}
                        style={{
                          border: activeImage === imgUrl ? '2px solid var(--accent-blue)' : '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          padding: 0,
                          cursor: 'pointer',
                          background: '#070B14',
                          width: '60px',
                          height: '100px',
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                          opacity: activeImage === imgUrl ? 1 : 0.55,
                          boxShadow: activeImage === imgUrl ? '0 0 12px rgba(69, 209, 253, 0.4)' : 'none',
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Screenshot ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
            <div className="modal-actions-grid">
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink size={18} />
                <span>Buka Repository / Demo</span>
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ textDecoration: 'none' }}
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
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .project-card-actions .btn {
          flex: 1;
          min-width: 150px;
        }

        .modal-actions-grid {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .modal-actions-grid .btn {
          flex: 1;
          min-width: 180px;
        }

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
          height: clamp(320px, 38vw, 390px);
          overflow: hidden;
          border-top-left-radius: var(--radius-lg);
          border-top-right-radius: var(--radius-lg);
          background: radial-gradient(circle at 50% 40%, rgba(69, 209, 253, 0.16) 0%, rgba(11, 15, 25, 0.98) 75%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 16px 12px;
        }

        .project-multi-mockup {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-image-frame {
          position: relative;
          height: 96%;
          aspect-ratio: 9 / 19.5;
          border-radius: 20px;
          overflow: hidden;
          border: 2.5px solid rgba(69, 209, 253, 0.4);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(69, 209, 253, 0.2);
          background: #090D16;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .frame-primary {
          z-index: 2;
          transform: translateY(0) scale(1);
        }

        .frame-secondary {
          position: absolute;
          z-index: 1;
          transform: translateX(42px) translateY(10px) rotate(6deg) scale(0.88);
          opacity: 0.72;
          border-color: rgba(255, 255, 255, 0.18);
          filter: brightness(0.85);
        }

        .project-card:hover .frame-primary {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(69, 209, 253, 0.75);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(69, 209, 253, 0.4);
        }

        .project-card:hover .frame-secondary {
          transform: translateX(62px) translateY(6px) rotate(10deg) scale(0.92);
          opacity: 0.92;
          filter: brightness(1);
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
          z-index: 5;
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
          z-index: 6;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .project-card-actions {
            flex-direction: column;
            gap: 12px;
          }
          .project-card-actions .btn {
            width: 100%;
            min-width: unset;
          }
          .modal-actions-grid {
            flex-direction: column;
            gap: 12px;
          }
          .modal-actions-grid .btn {
            width: 100%;
            min-width: unset;
          }
        }

        @media (max-width: 600px) {
          .project-image-wrapper {
            height: clamp(250px, 55vw, 300px);
            padding: 14px 10px 8px;
          }
          .frame-secondary {
            transform: translateX(24px) translateY(8px) rotate(5deg) scale(0.85);
          }
          .project-card:hover .frame-secondary {
            transform: translateX(36px) translateY(4px) rotate(8deg) scale(0.88);
          }
          .project-category-badge {
            top: 12px;
            right: 12px;
            font-size: 0.7rem;
            padding: 4px 10px;
          }
        }
      `}</style>
    </section>
  );
}
