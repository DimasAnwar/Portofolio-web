import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, Heart, Sparkles, Globe } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const DribbbleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
  </svg>
);

export default function ContactFooter() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'Dimasanwar210@gmail.com';
  const phone = '+6283873928028';

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0B0F19 0%, #06080E 100%)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '100px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        {/* Top Section: CTA Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            marginBottom: '80px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Info */}
          <div>
            <div className="section-tag">
              <Sparkles size={16} />
              <span>Kontak &amp; Kolaborasi</span>
            </div>

            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '20px' }}>
              Mari Bangun Aplikasi <span className="gradient-text-accent">Hebat Bersama.</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '36px' }}>
              Saya selalu terbuka untuk diskusi proyek baru, posisi pengembangan aplikasi Flutter, atau sekadar bertukar pikiran teknis. Hubungi saya langsung melalui saluran berikut:
            </p>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(26, 34, 53, 0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(69, 209, 253, 0.12)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email Direct
                    </div>
                    <a
                      href={`mailto:${email}`}
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: 700,
                        fontSize: '0.975rem',
                        textDecoration: 'none',
                      }}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  title="Salin Email"
                  style={{
                    background: copiedField === 'email' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: copiedField === 'email' ? '1px solid #10B981' : '1px solid var(--border-color)',
                    color: copiedField === 'email' ? '#10B981' : 'var(--text-secondary)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copiedField === 'email' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedField === 'email' ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div
                className="glass-card"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(26, 34, 53, 0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(45, 212, 191, 0.12)',
                      color: '#2DD4BF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Telepon / WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/6283873928028`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: 700,
                        fontSize: '0.975rem',
                        textDecoration: 'none',
                      }}
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6283873928028`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(45, 212, 191, 0.15)',
                    border: '1px solid rgba(45, 212, 191, 0.3)',
                    color: '#2DD4BF',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Chat WA</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 600 }}>
                Tautan Profil &amp; Portofolio Eksternal:
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://www.linkedin.com/in/dimas-anwar-162944253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://github.com/DimasAnwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="GitHub Profile (DimasAnwar)"
                >
                  <GithubIcon size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(145deg, rgba(26, 34, 53, 0.8), rgba(15, 23, 42, 0.9))',
              border: '1px solid rgba(69, 209, 253, 0.25)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>
              Kirim Pesan Langsung
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '24px' }}>
              Isi formulir singkat ini untuk mengirim pesan ke inbox email saya.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10B981',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px auto',
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px', color: '#10B981' }}>
                  Pesan Terkirim!
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  Terima kasih sudah menghubungi. Saya akan segera membalas pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 15, 25, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 15, 25, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pesan atau detail penawaran Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 15, 25, 0.6)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  <Send size={18} />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>M Dimas Anwar Maulana</strong>. Hak Cipta Dilindungi.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>

          </div>
        </div>
      </div>
    </footer>
  );
}
