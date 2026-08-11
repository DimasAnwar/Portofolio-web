import React from 'react';
import { X, Download, Briefcase, GraduationCap, Code2, CheckCircle2, Award, Mail, Phone } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown file for CV download demonstration
    const cvText = `
M DIMAS ANWAR MAULANA
Flutter Mobile Developer & UI/3D Designer
Email: Dimasanwar210@gmail.com | Phone: +6283873928028

RINGKASAN EKSEKUTIF:
Sebagai Mahasiswa Sistem Informasi yang bertransisi menjadi Mobile Developer, menggabungkan keahlian teknis dari manajemen infrastruktur IT dan pengembangan game 3D ke dalam ekosistem mobile.

EXPERIENCE:
1. 2025 - 2026 | Freelance Roblox Game Developer
   - Arsitektur sistem dengan Luau, siklus UI/UX responsif, dan objek 3D interaktif.
2. 2023 - 2024 | Admin & Visual Comm - Yamet CDC
   - Manajemen finansial, komunikasi publik, branding Instagram.
3. 2022 - 2023 | Staff IT - SMP SMA Cahaya Rancamaya
   - Infrastruktur jaringan MikroTik/UniFi, troubleshooting server & hardware, desain grafis.

SKILLS:
- Mobile & Web: Flutter, Dart, HTML, CSS, JavaScript, REST API, State Management
- 3D & Design: Blender 3D, UI/UX Logic, Corel Draw, Figma
- Architecture: Luau Scripting, Object-Oriented Programming (OOP)
- Infrastructure: MikroTik, UniFi, Hardware Troubleshooting
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_M_Dimas_Anwar_Maulana.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '750px', padding: '36px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Curriculum Vitae Preview
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
              M Dimas Anwar Maulana
            </span>
          </div>

          <button
            onClick={onClose}
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

        {/* Modal Body Resume Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          {/* Summary Box */}
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(69, 209, 253, 0.06)',
              border: '1px solid rgba(69, 209, 253, 0.2)',
            }}
          >
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '6px' }}>
              Profil Singkat
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Mahasiswa Sistem Informasi &amp; Flutter Mobile Developer. Memiliki keahlian terintegrasi dari manajemen jaringan IT, logika game 3D, hingga pengembangan aplikasi Flutter modern.
            </p>
          </div>

          {/* Education & Contacts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                <GraduationCap size={18} />
                <span>Pendidikan</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Sistem Informasi</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Mahasiswa Aktif - Mobile Dev Focus</div>
            </div>

            <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                <Mail size={18} />
                <span>Kontak CV</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>Dimasanwar210@gmail.com</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>+6283873928028</div>
            </div>
          </div>

          {/* Key Skill Highlights */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Kompetensi Inti
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Flutter', 'Dart', 'Luau Scripting', 'OOP', 'Blender 3D', 'MikroTik', 'UniFi', 'UI/UX Logic', 'HTML/CSS/JS'].map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={handleDownload} className="btn btn-primary" style={{ width: '100%' }}>
            <Download size={18} />
            <span>Unduh Dokumen CV</span>
          </button>
        </div>
      </div>
    </div>
  );
}
