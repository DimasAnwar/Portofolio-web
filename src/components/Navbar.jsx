import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['about', 'tech-stack', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang Saya', href: '#about', id: 'about' },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { label: 'Pengalaman', href: '#experience', id: 'experience' },
    { label: 'Portofolio', href: '#portfolio', id: 'portfolio' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '16px 0' : '24px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-nav-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.15rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-blue) 0%, #38BDF8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0B0F19',
              boxShadow: '0 0 15px var(--accent-glow)',
            }}
          >
            <Code size={20} strokeWidth={2.5} />
          </div>
          <span>
            DIMAS ANWAR<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            background: scrolled ? 'transparent' : 'rgba(26, 34, 53, 0.4)',
            padding: scrolled ? 0 : '8px 24px',
            borderRadius: '99px',
            border: scrolled ? 'none' : '1px solid var(--border-color)',
            backdropFilter: scrolled ? 'none' : 'blur(10px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    background: 'var(--accent-blue)',
                    boxShadow: '0 0 8px var(--accent-blue)',
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Header Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="#contact"
            className="btn btn-primary desktop-nav"
            style={{ padding: '10px 20px', fontSize: '0.875rem' }}
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-glow)',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: activeSection === link.id ? 'rgba(69, 209, 253, 0.1)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      {/* CSS for responsive navigation */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
