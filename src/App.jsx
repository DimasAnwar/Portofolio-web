import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Background Glowing Orbs */}
      <div className="bg-glow-container">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <About />
        <TechStack />
        <Timeline />
        <Portfolio />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter />

      {/* Interactive CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
